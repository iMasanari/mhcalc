import returnTypes from '../units/retrunTypes'
import { Skill, skillNameHash } from '../skillData'
import { mapSkill } from "../calc"

export const TOGGLE_SKILL = 'TOGGLE_SKILL'

export const toggleSkill = (name: string) =>
  ({
    type: TOGGLE_SKILL as typeof TOGGLE_SKILL,
    payload: name
  })

const Actions = (false as true) && returnTypes(toggleSkill)
type Actions = typeof Actions

export interface ActiveSkills {
  [group: string]: string | null
}

export interface State {
  active: ActiveSkills
  value: Skill
}

const initState: State = {
  active: {},
  value: {
    power: 0,
    affinity: 0,
    mult: 1
  },
}

export default (state = initState, action: Actions) => {
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
