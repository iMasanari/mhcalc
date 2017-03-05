import skillList from './data'

export { skillList }

export interface Skill {
    power: number
    affinity: number
    mult: number
    [skillName: string]: number
}

interface SkillNameList {
    name: string
    label: string
    group: string
    isArmorSkill: boolean
    effect: (skill: Skill) => Skill
}

export const skillNameList: SkillNameList[] = []

for (const skill of skillList) {
    skill.group = skill.group || skill.name

    for (const item of skill.item) {
        item.name = item.name || skill.name + (item.label || '')
        item.label = item.label || 'on'

        skillNameList.push({
            name: item.name,
            label: item.label,
            group: skill.group,
            isArmorSkill: skill.isArmorSkill || false,
            effect: (s) => skill.effect(s, item.value)
        })
    }
}

export const skillNameHash = skillNameList.reduce((hash, value) => {
    hash[value.name] = value
    return hash
}, {} as {[name: string]: SkillNameList})
