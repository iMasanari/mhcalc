/// <reference path="skillData.ts" />
/// <reference path="weaponData.ts" />

function calc(_weapon: WeaponData, activeSkillList: (typeof skillNameList)) {
    const wep = getWeapon(_weapon)
    const weapon = {
        power: wep[0],
        affinity: wep[1],
        // mult: weaponData[_weapon.type].typeMult
    }
    const skill = {
        power: 0,
        mult: 1,
        affinity: 0
    }

    activeSkillList.forEach(item => {
        item.effect(skill, item.value)
    })

    return getAttackPower(weapon, skill)
}
function getRanking(_weapon: WeaponData, activeSkill: { [skillName: string]: string }) {
    const activeSkillList = skillNameList.filter(item => {
        return activeSkill[item.group] === item.name
    })

    const orgPower = calc(_weapon, activeSkillList)

    return skillNameList.map((item, index) => {
        const isActiveSkill = activeSkill[item.group] === item.name

        const result = {
            name: item.name,
            isActive: isActiveSkill,
            // action: item.action,
            disappearance: (activeSkill[item.group] && !isActiveSkill) ? activeSkill[item.group] : null,
            plus: null as number,
            mult: null as number,
            index
        }

        const activeSkillList = skillNameList.filter(simulateItem => {
            return activeSkill[simulateItem.group] === simulateItem.name && simulateItem.group !== item.group
        })

        if (activeSkill[item.group] !== item.name) {
            activeSkillList.push(item)

            const power = calc(_weapon, activeSkillList)

            result.plus = (power - orgPower) | 0
            result.mult = power / orgPower
        } else {
            const power = calc(_weapon, activeSkillList)
            result.plus = (orgPower - power) | 0
            result.mult = orgPower / power;
        }

        return result
    }).sort((a, b) => b.plus - a.plus || b.mult - a.mult || a.index - b.index)
    // }).sort((a, b) => b.plus - a.plus || b.mult - a.mult || +b.isActive - +a.isActive)
}

function getAttackPower(weapon, skill) {
    let power = weapon.power,
        affinity = Math.min(Math.max(weapon.affinity + skill.affinity, -100), 100),
        superAffinity = 1.25 - 1;

    if (skill.parts) {
        power += Math.floor(power * (skill.parts - 1));
    }

    if (skill.superAffinity) {
        superAffinity = skill.superAffinity - 1;
    }

    return (power + skill.power) * skill.mult * (1 + affinity / 100 * superAffinity);
}
