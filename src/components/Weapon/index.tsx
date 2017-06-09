import * as preact from 'preact'
import preactRedux from 'preact-redux'
import { StoreState } from '../../reducers'
import { setWeaponType, setWeaponName, setPower, setAffinity, toggleLastOnly } from '../../reducers/weapon'
import DelayInput from './DelayInput'
import EventFrom from '../../units/EventFrom'
import { getAttackPower } from "../../calc"

const mapStateToProps = (state: StoreState) =>
  ({
    ...state.weapon,
    skillValue: state.skill.value,
  })

const mapDispatchToProps = (dispatch: any) =>
  ({
    setWeaponType: (e: EventFrom<HTMLInputElement>) => {
      dispatch(setWeaponType(e.currentTarget.value))
    },
    setWeaponName: (e: EventFrom<HTMLInputElement>) => {
      dispatch(setWeaponName(e.currentTarget.value))
    },
    setPower: (textValue: string) => {
      dispatch(setPower(+textValue))
    },
    setAffinity: (textValue: string) => {
      dispatch(setAffinity(+textValue))
    },
    toggleLastOnly: () => {
      dispatch(toggleLastOnly())
    },
  })

export default preactRedux.connect(mapStateToProps, mapDispatchToProps)(props => {
  const weaponList = props.list
  const weaponOptions = weaponList.map(value => <option value={value}>{value}</option>)

  if (weaponList.indexOf(props.name) === -1) {
    weaponOptions.unshift(<option key={props.name} value={props.name}>{`（${props.name}）`}</option>)
  }

  const { power, weapon } = getAttackPower({ power: props.power, affinity: props.affinity, type: props.type }, props.skillValue)

  return (
    <section className="Weapon">
      <h2>Choose a Weapon</h2>
      <p>
        <select className="weapon-type" value={props.type} onChange={props.setWeaponType}>
          <option value="lightbowgun">ライト</option>
          <option value="heavybowgun">ヘビィ</option>
        </select>
        <select className="weapon-name" value={props.name} onChange={props.setWeaponName}>
          {weaponOptions}
        </select>
        <br />
        <label>
          <input type="checkbox" checked={props.isLastOnly} onChange={props.toggleLastOnly} />
          最終強化のみを表示
      </label>
      </p>
      <p>
        <DelayInput type="number" pattern="[0-9]*" step="10" max="1000" min="10"
          value={props.power + ''} update={props.setPower}
        />
        /
      <DelayInput type="number" pattern="-?[0-9]*" step="5" max="100" min="-100"
          value={props.affinity + ''} update={props.setAffinity}
        />
      </p>
      <p>
        {weapon.power | 0} / {weapon.affinity}% => {power | 0}
      </p>
    </section>
  )
})
