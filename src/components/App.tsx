import * as preact from 'preact'
import { connect } from 'preact-redux'
import SkillBoxList from './SkillBoxList'
import SkillRanking from './SkillRanking'
import Weapon from './Weapon'
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