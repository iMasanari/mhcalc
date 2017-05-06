import * as preact from 'preact'
import preactRedux from 'preact-redux'
import SkillBoxList from './SkillBoxList'
import SkillRanking from './SkillRanking'
import Weapon from './Weapon'
import { setWeaponType } from '../reducers/weapon'
import { StoreState } from '../reducers'

const mapStateToProps = (state: StoreState) =>
  ({
    weaponType: state.weapon.type
  })

export default preactRedux.connect(mapStateToProps)(
  class extends preact.Component<{ dispatch: any, weaponType: string }, {}> {
    componentDidMount() {
      // 非同期データの初期化
      this.props.dispatch(setWeaponType(this.props.weaponType))
    }
    render() {
      return <div className="MHCalc">
        <Weapon />
        <section>
          <h2>Skill Ranking</h2>
          <div className="skill">
            <SkillBoxList />
            <SkillRanking />
          </div>
        </section>
      </div>
    }
  }
)