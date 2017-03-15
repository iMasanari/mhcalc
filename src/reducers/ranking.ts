import returnTypes from '../units/retrunTypes'

const TOGGLE_SKILL_FILTER = 'TOGGLE_SKILL_FILTER'

export const toggleSkillFilter = () =>
  ({
    type: TOGGLE_SKILL_FILTER as typeof TOGGLE_SKILL_FILTER
  })

const Actions = (false as true) && returnTypes(toggleSkillFilter)
type Actions = typeof Actions

export interface State {
  skillFilter: boolean
}

const initState: State = {
  skillFilter: false
}

export default (state = initState, action: Actions) => {
  switch (action.type) {
    case TOGGLE_SKILL_FILTER:
      return {
        ...state,
        skillFilter: !state.skillFilter
      }
  }
  return state
}
