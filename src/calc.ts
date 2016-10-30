/// <reference path="skillData.ts" />
/// <reference path="weaponData.ts" />

function calc(weapon: WeaponData, activeSkillList: (typeof skillNameList)) {
    const skill: Skill = {
        power: 0,
        mult: 1,
        affinity: 0
    }

    activeSkillList.forEach(item => {
        item.effect(skill, item.value)
    })

    return getAttackPower(weapon, skill)
}

function getRanking(weapon: WeaponData, activeSkill: { [skillName: string]: string }) {
    const activeSkillList = skillNameList.filter(item => {
        return activeSkill[item.group] === item.name
    })

    const orgPower = calc(weapon, activeSkillList)

    return skillNameList.map((item, index) => {
        const isActive = activeSkill[item.group] === item.name

        const result = {
            name: item.name,
            isActive: isActive,
            disappearance: (activeSkill[item.group] && !isActive) ? activeSkill[item.group] : null,
            plus: null as number,
            mult: null as number,
            index
        }

        const activeSkillList = skillNameList.filter(simulateItem => {
            return activeSkill[simulateItem.group] === simulateItem.name && simulateItem.group !== item.group
        })

        if (isActive) {
            const power = calc(weapon, activeSkillList)

            result.plus = (orgPower - power) | 0
            result.mult = orgPower / power
        } else {
            activeSkillList.push(item)

            const power = calc(weapon, activeSkillList)

            result.plus = (power - orgPower) | 0
            result.mult = power / orgPower
        }

        return result
    }).sort((a, b) => b.plus - a.plus || b.mult - a.mult || a.index - b.index)
}

function getAttackPower(weapon: WeaponData, skill: Skill) {
    let power = weapon.power,
        affinity = Math.min(Math.max(weapon.affinity + skill.affinity, -100), 100),
        superAffinity = 1.25 - 1;

    if (skill['parts']) {
        power += Math.floor(power * (skill['parts'] - 1));
    }

    if (skill['superAffinity']) {
        superAffinity = skill['superAffinity'] - 1;
    }

    return (power + skill.power) * skill.mult * (1 + affinity / 100 * superAffinity);
}
