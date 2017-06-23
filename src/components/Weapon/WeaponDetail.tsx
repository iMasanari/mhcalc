import * as preact from 'preact'
import { connect } from 'preact-redux'
import { StoreState } from '@/reducers'
import { getAttackPower } from '@/calc'

const mapStateToProps = (state: StoreState) =>
  ({
    weapon: state.weapon,
    skillValue: state.skill.value,
  })

export default connect(mapStateToProps)(
  (props) => {
    const { power, weapon } = getAttackPower(props.weapon, props.skillValue)
    const weaponData = props.weapon.weaponData! || {}
    
    return (
      <p>
        攻撃力: {power | 0} ({weapon.power | 0} {weapon.affinity})
        <br />
        スロット: {displaySlot(weaponData.slot)}
        <br />
        {weaponData.reload} / {weaponData.recoil} ブレ{weaponData.deviation}
      </p>
    )
  }
)

const displaySlot = (slot: number) =>
  ['―――', '◯――', '◯◯―', '◯◯◯'][slot]
