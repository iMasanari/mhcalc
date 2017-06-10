import * as preact from 'preact'
import preactRedux from 'preact-redux'
import { StoreState } from '../../reducers'
import { getAttackPower } from '../../calc'

const mapStateToProps = (state: StoreState) =>
  ({
    power: state.weapon.power,
    affinity: state.weapon.affinity,
    type: state.weapon.type,
    skillValue: state.skill.value,
  })

export default preactRedux.connect(mapStateToProps)(
  (props) => {
    const { power, weapon } = getAttackPower({ power: props.power, affinity: props.affinity, type: props.type }, props.skillValue)

    return (
      <p>{weapon.power | 0} / {weapon.affinity}% ({power | 0})</p>
    )
  }
)
