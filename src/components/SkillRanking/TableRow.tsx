import * as preact from 'preact'
import preactRedux from 'preact-redux'
import { toggleSkill } from '@/reducers/skill'
import { CalcData } from '@/calc'
import classNames from '@/units/classNames'
import SkillNameCell from './SkillNameCell'
import AddPowerCell from './AddPowerCell'
import './TableRow.css'

export interface Props {
  item: CalcData
  rankUp: number
  isHide: boolean
}

const mapDispatchToProps = (dispatch: any, ownProps: Props) =>
  ({
    toggleSkill: () => {
      dispatch(toggleSkill(ownProps.item.name))
    }
  })

export default preactRedux.connect(null, mapDispatchToProps)(
  (props) =>
    <tr className={classNames({
      'TableRow': true,
      'TableRow-hide': props.isHide,
      'TableRow-checked': props.item.isActive,
      'TableRow-animation': props.rankUp !== 0,
    })}
      style={props.rankUp ? { transform: `translateY(${props.rankUp * 40}px)` } : undefined}
      onClick={props.toggleSkill}
    >
      <td className="TableRow-td">
        <SkillNameCell name={props.item.name} disappearance={props.item.disappearance} checked={props.item.isActive} />
      </td>
      <td className="TableRow-td">
        <AddPowerCell power={props.item.plus} />
      </td>
      <td className="TableRow-td">
        {props.item.mult.toFixed(3)}
      </td>
    </tr>
)
