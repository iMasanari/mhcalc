import * as preact from 'preact'
import SkillBoxList from './SkillBoxList'
import SkillRanking from './SkillRanking'
import Weapon from './Weapon'

export default () =>
    <div className="MHCalc">
        <Weapon />
        <section>
            <h2>Skill Ranking</h2>
            <div className="skill">
                <SkillBoxList />
                <SkillRanking />
            </div>
        </section>
    </div>
    