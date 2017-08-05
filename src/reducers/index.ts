import { combineReducers } from 'redux'
import skill, { SkillState } from './skill'
import ranking, { RankingState } from './ranking'
import weapon, { WeaponState } from './weapon'

export interface StoreState {
  skill: SkillState
  ranking: RankingState
  weapon: WeaponState
}

export default combineReducers({
  skill,
  ranking,
  weapon,
  // log: (state = {}, action) => console.log(action.type)||  state
})
