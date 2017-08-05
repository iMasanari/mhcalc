import ActionReducer from 'action-reducer'
import { Skill, skillNameHash } from '@/skillData'
import { mapSkill } from "@/calc"

export interface ActiveSkills {
  [group: string]: string | null
}

export interface SkillState {
  active: ActiveSkills
  value: Skill
}

const initState: SkillState = {
  active: {},
  value: {
    power: 0,
    affinity: 0,
    mult: 1
  },
}

const { createAction, reducer } = ActionReducer(initState)

export const toggleSkill = createAction(
  (state, payload: string) => {
    const { name, group, effect } = skillNameHash[payload]
    const prevSkillGroupValue = state.active[group]

    const active = {
      ...state.active,
      [group]: prevSkillGroupValue !== name ? name : null
    }

    const value = prevSkillGroupValue == null ? effect({ ...state.value }) : mapSkill(active)

    return { active, value }
  }
)

export default reducer
