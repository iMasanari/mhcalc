import ActionReducer from 'action-reducer'

export interface RankingState {
  skillFilter: boolean
}

const initState: RankingState = {
  skillFilter: false
}

const { createAction, reducer } = ActionReducer(initState, 'ranking')

export const toggleSkillFilter = createAction(
  (state) =>
    ({ ...state, skillFilter: !state.skillFilter })
)

export default reducer
