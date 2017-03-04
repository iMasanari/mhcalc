import { skillList, SkillData } from '../skillData'
import returnTypes from '../units/retrunTypes'

export const TOGGLE_SKILL = 'TOGGLE_SKILL'

export const toggleSkill = (group: string, name: string) =>
    ({
        type: TOGGLE_SKILL,
        payload: { group, name }
    })

const Actions = (false as true) && returnTypes(toggleSkill)
type Actions = typeof Actions

export interface State {
    list: SkillData[]
    active: {
        [group: string]: string // | null
    }
}

const initState: State = {
    list: skillList,
    active: {}
}

export default (state = initState, action: Actions) => {
    switch (action.type) {
        case TOGGLE_SKILL:
            const { group, name } = action.payload

            return {
                ...state,
                active: {
                    ...state.active,
                    [group]: (state.active[group] !== name) ? name : null
                }
            }
    }
    return state
}
