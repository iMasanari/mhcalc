import skillList from './data'

export { skillList }

export interface Skill {
    power: number
    affinity: number
    mult: number
    [skillName: string]: number
}

export interface SkillData {
    name: string
    group: string
    isArmorSkill?: boolean,
    effect: (skill: Skill, value: any) => void
    item: SkillItem[]
}

export interface SkillItem {
    name: string
    label: string
    value: any
}


interface SkillNameList {
    name: string
    label: string
    group: string
    isArmorSkill: boolean
    effect: (skill: Skill) => void
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
            effect: (s) => { skill.effect(s, item.value) }
        })
    }
}

export const skillNameHash = skillNameList.reduce((hash, value) => {
    hash[value.name] = value
    return hash
}, {} as {[name: string]: SkillNameList})
