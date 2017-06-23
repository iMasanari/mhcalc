import { skillNameList, Skill, skillNameHash } from '@/skillData'
import { WeaponState } from '@/reducers/weapon'
import { SkillState, ActiveSkills } from '@/reducers/skill'

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

export function getRanking(weapon: WeaponState, skill: SkillState, isAllSkill: boolean) {
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

export function getAttackPower(weapon: WeaponState, skill: Skill) {
  let power = weapon.power + skill.power
  let mult = skill.mult

  const affinityData = getAffinity(weapon, skill)

  if (skill['parts']) {
    power += Math.floor(weapon.power * (skill['parts'] - 1))
  }

  if (skill['criticalUp']) {
    mult *= 1.75 / 1.5
  }

  return {
    power: power * mult * affinityData.mult,
    weapon: {
      power: power * mult,
      affinity: affinityData.str,
    }
  }
}

function getAffinity(weapon: WeaponState, skill: Skill) {
  if (!weapon.orAffinity || skill['virse']) {

    let affinity = weapon.affinity

    if (weapon.orAffinity) {
      affinity -= weapon.orAffinity
    }

    affinity = Math.min(Math.max(affinity + skill.affinity, -100), 100)

    const affinityStr = `${affinity}%`

    if (skill['superAffinity'] && affinity > 0) {
      affinity *= 1.6
    }

    if (skill['reverseAffinity'] && affinity < 0) {
      affinity *= -0.25
    }

    return {
      mult: 1 + affinity / 100 * 0.25,
      str: affinityStr,
    }
  }

  let plusAffinity = weapon.affinity
  let minuseAffinity = weapon.orAffinity

  if (skill.affinity > 0) {
    plusAffinity = Math.min(plusAffinity + skill.affinity, 100 + minuseAffinity)
  }
  else {
    minuseAffinity = Math.max(minuseAffinity + skill.affinity, -100 + plusAffinity)
  }

  const affinityStr = `${minuseAffinity}/${plusAffinity}%`

  if (skill['superAffinity']) {
    plusAffinity *= 1.6
  }

  if (skill['reverseAffinity']) {
    minuseAffinity *= -0.25
  }

  return {
    mult: 1 + (plusAffinity + minuseAffinity) / 100 * 0.25,
    str: affinityStr,
  }
}
