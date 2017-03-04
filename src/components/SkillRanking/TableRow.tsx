import * as preact from 'preact'
import preactRedux from 'preact-redux'
import { State } from '../../reducers'
import { toggleSkill } from '../../reducers/skill'
import { CalcData } from '../../calc'

export interface Props {
    item: CalcData
    rankUp: number
    isHide: boolean
}

const mapStateToProps = (_state: State, ownProps: Props) => ownProps

const mapDispatchToProps = (dispatch: any, ownProps: Props) => ({
    toggleSkill: () => {
        dispatch(toggleSkill(ownProps.item.group, ownProps.item.name))
    }
})

export default preactRedux.connect(mapStateToProps, mapDispatchToProps)(props =>
    <tr className={props.isHide ? 'opacity0' : props.item.isActive ? 'checked' : undefined}
        style={props.rankUp ? { transform: `translateY(${props.rankUp * 40}px)` } : undefined}
        onClick={props.toggleSkill}
    >
        <SkillNameCell name={props.item.name} disappearance={props.item.disappearance} />
        <AddPowerCell power={props.item.plus} />
        <td>{props.item.mult.toFixed(3)}</td>
    </tr>
)

interface SkillNameCellProps {
    name: string
    disappearance: string | null
}

const SkillNameCell = (props: SkillNameCellProps) =>
    <td>
        <div className="skillName">
            <span>{props.name}</span>
            <span className={"disappearance" + (props.disappearance ? '' : ' opacity0')}>
                {props.disappearance ? '- ' + props.disappearance : ''}
            </span>
        </div>
    </td>

interface AddPowerCellProps {
    power: number
}

const AddPowerCell = (props: AddPowerCellProps) => {
    const value = Math.min(Math.abs(props.power), 100)

    return <td>
        <div className="AddPower">
            <span className={"AddPower-graph" + (props.power < 0 ? ' minus' : '')}
                style={{ transform: `scaleX(${value / 100})` }}
            />
            <span className='AddPower-value' style={{ transform: `translateX(${value - 92}px)` }}>
                {props.power}
            </span>
        </div>
    </td>
}