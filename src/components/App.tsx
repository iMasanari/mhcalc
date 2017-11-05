import * as preact from 'preact'
import { connect } from 'preact-redux'
import Weapon from './Weapon'
import SkillBoxList from './SkillBoxList'
import SkillRanking from './SkillRanking'
import SkillPower from './SkillPower'
import { initWeaponType } from '@/reducers/weapon'
import './App.css'

export default connect()(
  class extends preact.Component<{ dispatch?: any }, {}> {
    componentDidMount() {
      // 非同期データの初期化
      this.props.dispatch(initWeaponType())
    }

    render() {
      return (
        <div className="App">
          <Weapon />
          <section>
            <h2>Skill Ranking</h2>
            <SkillPower />
            <div className="skill">
              <SkillBoxList />
              <SkillRanking />
            </div>
          </section>
        </div>
      )
    }
  }
)