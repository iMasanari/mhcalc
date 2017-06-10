import * as preact from 'preact'
import preactRedux from 'preact-redux'
import { StoreState } from '../../../reducers'
import { setWeaponType } from '../../../reducers/weapon'
import EventFrom from '../../../units/EventFrom'
import './WeaponTypeSelect.css'

const mapStateToProps = (state: StoreState) =>
  ({ type: state.weapon.type })

const mapDispatchToProps = (dispatch: any) =>
  ({
    setWeaponType: (e: EventFrom<HTMLInputElement>) => {
      dispatch(setWeaponType(e.currentTarget.value))
    }
  })

export default preactRedux.connect(mapStateToProps, mapDispatchToProps)(
  (props) =>
    <select className="WeaponTypeSelect input-area" value={props.type} onChange={props.setWeaponType}>
      <option value="lightbowgun">ライト</option>
      <option value="heavybowgun">ヘビィ</option>
    </select>
)