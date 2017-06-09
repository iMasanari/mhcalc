import { skillNameList, Skill, skillNameHash } from './skillData'
import { WeaponData } from './weaponData'
import { SkillState, ActiveSkills } from './reducers/skill'

export function mapSkill(activeSkill: ActiveSkills) {
  const list = Object.keys(activeSkill).filter(v => activeSkill[v])
  const skill: Skill = {
    power: 0,
    mult: 1,
    affinity: 0
  }

  return list.reduce((mapSkill, group) =>
    skillNameHash[activeSkill[group]!].effect(mapSkill)
    , skill)
}

export interface CalcData {
  name: string
  group: string
  isActive: boolean
  disappearance: string | null
  plus: number
  mult: number
  index: number
}

export function getRanking(weapon: WeaponData, skill: SkillState, isAllSkill: boolean) {
  const list = isAllSkill ? skillNameList : skillNameList.filter(v => v.isArmorSkill)
  const orgPower = getAttackPower(weapon, skill.value).power

  return list.map((item, index): CalcData => {
    const isActive = skill.active[item.group] === item.name

    const skillValue = skill.active[item.group] == null ?
      item.effect({ ...skill.value })
      :
      mapSkill({
        ...skill.active,
        [item.group]: !isActive ? item.name : null
      })

    const power = getAttackPower(weapon, skillValue).power
    let plus: number
    let mult: number

    if (isActive) {
      plus = (orgPower - power) | 0
      mult = orgPower / power
    } else {
      plus = (power - orgPower) | 0
      mult = power / orgPower
    }

    return {
      name: item.name,
      group: item.group,
      isActive,
      disappearance: (skill.active[item.group] && !isActive) ? skill.active[item.group] : null,
      plus, mult, index
    }
  })
    .sort((a, b) => b.plus - a.plus || b.mult - a.mult || a.index - b.index)
    .map((v, i) => (v.index = i, v))
}

export function getAttackPower(weapon: WeaponData, skill: Skill) {
  let power = weapon.power + skill.power
  let mult = skill.mult

  const affinity = Math.min(Math.max(weapon.affinity + skill.affinity, -100), 100)

  // 会心期待値（超、裏会心時は0.25が変化）: power * (1 + 0.25 * affinity)
  const affinityCoefficient = (affinity > 0 ? skill['superAffinity'] : skill['reverseAffinity']) || 0.25
  const affinityMult = 1 + affinity / 100 * affinityCoefficient

  if (skill['parts']) {
    power += Math.floor(weapon.power * (skill['parts'] - 1))
  }

  if (skill['criticalUp']) {
    mult *= 1.75 / 1.5
  }

  return {
    power: power * mult * affinityMult,
    weapon: {
      power: power * mult,
      affinity,
      type: weapon.type
    } as WeaponData
  }
}
