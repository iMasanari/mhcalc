import * as preact from 'preact'
import preactRedux from 'preact-redux'
import { StoreState } from '@/reducers'
import { setWeaponName } from '@/reducers/weapon'
import EventFrom from '@/units/EventFrom'
import './WeaponNameSelect.css'

const mapStateToProps = (state: StoreState) =>
  ({
    name: state.weapon.name,
    list: state.weapon.list
  })

const mapDispatchToProps = (dispatch: any) =>
  ({
    setWeaponName: (e: EventFrom<HTMLInputElement>) => {
      dispatch(setWeaponName(e.currentTarget.value))
    }
  })

export default preactRedux.connect(mapStateToProps, mapDispatchToProps)(
  (props) => {
    const weaponOptions = props.list.map(value => <option value={value}>{value}</option>)

    if (props.list.indexOf(props.name) === -1) {
      weaponOptions.unshift(<option key={props.name} value={props.name}>{`（${props.name}）`}</option>)
    }

    return (
      <select className="WeaponNameSelect input-area" value={props.name} onChange={props.setWeaponName}>
        {weaponOptions}
      </select>
    )
  }
)
