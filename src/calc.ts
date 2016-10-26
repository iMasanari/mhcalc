/// <reference path="skillData.ts" />
/// <reference path="weaponData.ts" />

function calc(_weapon: WeaponData, activeSkillList: (typeof skillNameList)) {
    const wep = weaponData[_weapon.type][_weapon.name][_weapon.level]
    const weapon = {
        power: wep[0],
        affinity: wep[1],
        mult: _weapon.type === 'lightbowgun' ? 1.3 : 1.5
    }
    const skill = {
        power: 0,
        mult: 1,
        affinity: 0
    }

    activeSkillList.forEach(item => {
        item.effect(skill, item.value)
    })

    console.log(getAttackPower(weapon, skill))
    return getAttackPower(weapon, skill)
}
function getRanking(_weapon: WeaponData, activeSkill: { [skillName: string]: string }) {
    const activeSkillList = skillNameList.filter(item => {
        return activeSkill[item.group] === item.name
    })

    const orgPower = calc(_weapon, activeSkillList)

    const trDataList = skillNameList.map(item => {
        const skill = {
            power: 0,
            mult: 1,
            affinity: 0
        };
        const isActiveSkill = activeSkill[item.group] === item.name

        const activeSkillList = skillNameList.filter(_item => {
            return activeSkill[_item.group] === _item.name && _item.group !== item.group
        })


        const trData = {
            name: item.name,
            isActive: isActiveSkill,
            // action: item.action,
            disappearance: (activeSkill[item.group] && !isActiveSkill) ? activeSkill[item.group] : null,
            plus: null as number,
            mult: null as number
        }

        if (activeSkill[item.group] !== item.name) {
        activeSkillList.push(item)

        const power = calc(_weapon, activeSkillList)

            trData.plus = (power - orgPower) | 0
            trData.mult = power / orgPower
        } else {
        const power = calc(_weapon, activeSkillList)
            trData.plus = (orgPower - power) | 0
            trData.mult = orgPower / power;
        }

        return trData
    }).sort((a, b) => b.plus - a.plus || b.mult - a.mult)
    // }).sort((a, b) => b.plus - a.plus || b.mult - a.mult || +b.isActive - +a.isActive)

    return trDataList
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
