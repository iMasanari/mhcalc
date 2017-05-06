import { Skill, skillNameHash } from '../skillData'
import { mapSkill } from "../calc"

export const TOGGLE_SKILL = 'TOGGLE_SKILL'

type Action = {
  type: typeof TOGGLE_SKILL, payload: string
}

export const toggleSkill = (name: string): Action =>
  ({
    type: TOGGLE_SKILL,
    payload: name,
  })

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

export default (state = initState, action: Action) => {
  switch (action.type) {
    case TOGGLE_SKILL:
      const { name, group, effect } = skillNameHash[action.payload]
      const prevSkillGroupValue = state.active[group]

      const active = {
        ...state.active,
        [group]: prevSkillGroupValue !== name ? name : null
      }

      const value = prevSkillGroupValue == null ? effect({ ...state.value }) : mapSkill(active)

      return {
        ...state,
        active,
        value,
      }
  }
  return state
}
