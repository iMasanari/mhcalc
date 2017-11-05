import * as preact from 'preact'
import { connect } from 'preact-redux'
import { StoreState } from '@/reducers'

const mapStateToProps = (state: StoreState) =>
  ({
    weapon: state.weapon,
  })

export default connect(mapStateToProps)(
  (props) => {
    const weapon = props.weapon.weaponData! || {}
    
    return (
      <p>
        スロット: {displaySlot(weapon.slot)}
        <br />
        {weapon.reload} / {weapon.recoil} ブレ{weapon.deviation}
      </p>
    )
  }
)

const displaySlot = (slot: number) =>
  ['―――', '◯――', '◯◯―', '◯◯◯'][slot]
