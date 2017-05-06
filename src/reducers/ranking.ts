const TOGGLE_SKILL_FILTER = 'TOGGLE_SKILL_FILTER'

type Action = {
  type: typeof TOGGLE_SKILL_FILTER
}

export const toggleSkillFilter = (): Action =>
  ({
    type: TOGGLE_SKILL_FILTER,
  })

export interface RankingState {
  skillFilter: boolean
}

const initState: RankingState = {
  skillFilter: false
}

export default (state = initState, action: Action) => {
  switch (action.type) {
    case TOGGLE_SKILL_FILTER:
      return {
        ...state,
        skillFilter: !state.skillFilter
      }
  }
  return state
}
