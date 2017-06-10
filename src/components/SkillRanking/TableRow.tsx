import * as preact from 'preact'
import preactRedux from 'preact-redux'
import { toggleSkill } from '../../reducers/skill'
import { CalcData } from '../../calc'

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
  props =>
    <tr className={props.isHide ? 'opacity0' : props.item.isActive ? 'checked' : undefined}
      style={props.rankUp ? { transform: `translateY(${props.rankUp * 40}px)` } : undefined}
      onClick={props.toggleSkill}
    >
      <td>
        <SkillName name={props.item.name} disappearance={props.item.disappearance} />
      </td>
      <td>
        <AddPower power={props.item.plus} />
      </td>
      <td>
        {props.item.mult.toFixed(3)}
      </td>
    </tr>
)

interface SkillNameProps {
  name: string
  disappearance: string | null
}

const SkillName = (props: SkillNameProps) =>
  <div className="skillName">
    <span>{props.name}</span>
    <span className={"disappearance" + (props.disappearance ? '' : ' opacity0')}>
      {props.disappearance ? '- ' + props.disappearance : ''}
    </span>
  </div>

interface AddPowerProps {
  power: number
}

const AddPower = (props: AddPowerProps) => {
  const value = Math.min(Math.abs(props.power), 100)

  return (
    <div className="AddPower">
      <span className={"AddPower-graph" + (props.power < 0 ? ' minus' : '')}
        style={{ transform: `scaleX(${value / 100})` }}
      />
      <span className='AddPower-value' style={{ transform: `translateX(${value - 92}px)` }}>
        {props.power}
      </span>
    </div>
  )
}
