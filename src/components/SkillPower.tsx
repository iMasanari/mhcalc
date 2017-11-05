import * as preact from 'preact'
import { connect } from 'preact-redux'
import { StoreState } from '@/reducers'
import { getAttackPower } from '@/calc'
import './SkillPower.css'

const mapStateToProps = (state: StoreState) =>
  ({
    weapon: state.weapon,
    skillValue: state.skill.value,
  })

export default connect(mapStateToProps)(
  (props) => {
    const { power, weapon } = getAttackPower(props.weapon, props.skillValue)

    return (
      <div class="SkillPower">
        {props.weapon.name}
        <br />
        {power | 0} ({weapon.power | 0} {weapon.affinity})
      </div>
    )
  }
)
