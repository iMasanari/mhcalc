import { combineReducers } from 'redux'
import skill, { State as SkillState } from './skill'
import ranking, { State as RankingState } from './ranking'
import weapon, { State as WeaponState } from './weapon'

export interface State {
    skill: SkillState
    ranking: RankingState
    weapon: WeaponState
}

export default combineReducers({
    skill,
    ranking,
    weapon,
})
