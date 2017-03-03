import * as preact from 'preact'
import { skillNameList } from '../skillData'
import { WeaponData } from '../weaponData'
import { CalcData, getRanking } from '../calc'
import EventFrom from '../EventFrom'

interface Props {
    activeSkill: { [skillGroup: string]: string }
    setActiveSkill: (skillGroup: string, skillName: string) => void
    weapon: WeaponData
}

interface State {
    isAllSkill: boolean
    prevSkillRanking: CalcData[]
}

export default class SkillRanking extends preact.Component<Props, Partial<State>> {
    private isAnimationEnd = true
    private animationTimer_: number | undefined
    private skillActionList_ = skillNameList.reduce(
        (hash, skill) => (hash[skill.name] = this.props.setActiveSkill.bind(null, skill.group, skill.name), hash),
        {} as { [skillName: string]: () => void }
    )

    state: State = {
        isAllSkill: false,
        prevSkillRanking: getRanking(this.props.weapon, this.props.activeSkill, false)
    }

    toggleFilter = (e: EventFrom<HTMLInputElement>) => {
        this.setState({ isAllSkill: !e.currentTarget.checked })
    }

    getTableRows(skillRanking: CalcData[]) {
        const skillRankingHash = skillRanking.reduce((h, v) => (h[v.name] = v, h), {} as { [name: string]: CalcData })

        return this.state.prevSkillRanking.map((skill, i) => {
            const item = skillRankingHash[skill.name] || skill

            return <TableRow key={item.name}
                item={item}
                rankUp={item.index - i}
                action={this.skillActionList_[item.name]}
                isHide={!skillRankingHash[skill.name]}
            />
        })
    }

    render() {
        let skillRanking: CalcData[]
        const isAnimationEnd = this.isAnimationEnd

        if (this.isAnimationEnd) {
            this.isAnimationEnd = false
            skillRanking = this.state.prevSkillRanking
        }
        else {
            skillRanking = getRanking(this.props.weapon, this.props.activeSkill, this.state.isAllSkill)

            clearTimeout(this.animationTimer_!)
            this.animationTimer_ = setTimeout(_ => {
                this.isAnimationEnd = true
                this.setState({
                    prevSkillRanking: skillRanking
                })
            }, 200)
        }

        return <div className={"SkillRanking" + (!isAnimationEnd ? ' animation' : '')}>
            <table>
                <tr>
                    <th>
                        スキル<br />
                        <label>
                            <input type="checkbox" checked={!this.state.isAllSkill} onChange={this.toggleFilter} />
                            <small>防具スキルのみ</small>
                        </label>
                    </th>
                    <th>上昇値</th>
                    <th>上昇率</th>
                </tr>
                {this.getTableRows(skillRanking)}
            </table>
        </div>
    }
}

export interface TableRowProps extends preact.ComponentProps {
    item: CalcData
    action: () => void
    rankUp: number
    isHide?: boolean
}

const TableRow = (props: TableRowProps) =>
    <tr key={props.key} className={props.isHide ? 'opacity0' : props.item.isActive ? 'checked' : undefined}
        onClick={props.action}
        style={props.rankUp ? { transform: `translateY(${props.rankUp * 40}px)` } : undefined}
    >
        <SkillNameCell name={props.item.name} disappearance={props.item.disappearance} />
        <AddPowerCell power={props.item.plus} />
        <td>{props.item.mult.toFixed(3)}</td>
    </tr>

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

// function shallowEqual(objA: any, objB: any) {
//     if (objA === objB) {
//         return true;
//     }
//     var key;
//     // Test for A's keys different from B.
//     for (key in objA) {
//         if (objA.hasOwnProperty(key) &&
//             (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
//             return false;
//         }
//     }
//     // Test for B's keys missing from A.
//     for (key in objB) {
//         if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
//             return false;
//         }
//     }
//     return true;
// }