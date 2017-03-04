import { skillNameList, Skill } from './skillData'
import { WeaponData } from './weaponData'

export function calc(weapon: WeaponData, activeSkillList: (typeof skillNameList)) {
    const skill: Skill = {
        power: 0,
        mult: 1,
        affinity: 0
    }

    activeSkillList.forEach(item => {
        item.effect(skill)
    })

    return getAttackPower(weapon, skill)
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

export function getRanking(weapon: WeaponData, activeSkill: { [skillName: string]: string }, isAllSkill: boolean) {
    const activeSkillList = skillNameList.filter(item => activeSkill[item.group] === item.name)
    const orgPower = calc(weapon, activeSkillList).power

    return (isAllSkill ? skillNameList : skillNameList.filter(v => v.isArmorSkill)).map((item, index): CalcData => {
        const isActive = activeSkill[item.group] === item.name

        const activeSkillList = skillNameList.filter(simulateItem => {
            return activeSkill[simulateItem.group] === simulateItem.name && simulateItem.group !== item.group
        })

        let plus: number, mult: number

        if (isActive) {
            const power = calc(weapon, activeSkillList).power

            plus = (orgPower - power) | 0
            mult = orgPower / power
        } else {
            const power = calc(weapon, activeSkillList.concat([item])).power

            plus = (power - orgPower) | 0
            mult = power / orgPower
        }

        return {
            name: item.name,
            group: item.group,
            isActive,
            disappearance: (activeSkill[item.group] && !isActive) ? activeSkill[item.group] : null,
            plus, mult, index
        }
    }).sort((a, b) => b.plus - a.plus || b.mult - a.mult || a.index - b.index).map((v, i) => (v.index = i, v))
}

export function getAttackPower(weapon: WeaponData, skill: Skill) {
    let power = weapon.power + skill.power,
        mult = skill.mult,
        affinity = Math.min(Math.max(weapon.affinity + skill.affinity, -100), 100),
        superAffinity = (skill['superAffinity'] || 1.25) - 1

    if (skill['parts']) {
        power += Math.floor(weapon.power * (skill['parts'] - 1))
    }

    if (skill['criticalUp']) {
        mult *= 1.75 / 1.5
    }

    return {
        power: power * mult * (1 + affinity / 100 * superAffinity),
        weapon: {
            power: power * mult,
            affinity,
            type: weapon.type
        } as WeaponData
    }
}
