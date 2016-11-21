/// <reference path="skillData.ts" />
/// <reference path="weaponData.ts" />
/// <reference path="calc.ts" />

namespace SkillRanking {
    export interface Props extends React.ClassAttributes<SkillRanking> {
        activeSkill: { [skillGroup: string]: string }
        setActiveSkill: (skillGroup: string, skillName: string) => void
        weapon: WeaponData
    }
    export interface State {
        rowOrder: string[]
        isAnimationEnd: boolean
    }
}

class SkillRanking extends React.Component<SkillRanking.Props, SkillRanking.State> {
    private animationTimer_: number | undefined
    private skillActionList_ = skillNameList.reduce(
        (hash, skill) => (hash[skill.name] = this.props.setActiveSkill.bind(null, skill.group, skill.name), hash),
        {} as { [skillName: string]: () => void }
    )

    state: SkillRanking.State = {
        rowOrder: skillNameList.map(v => v.name),
        isAnimationEnd: true
    }

    render() {
        if (this.props.weapon.power === 0) return null

        const skillRanking = getRanking(this.props.weapon, this.props.activeSkill)
        const skillRankingHash = skillRanking.reduce((h, v) => (h[v.name] = v, h), {} as { [name: string]: CalcData })

        const TableRows = this.state.rowOrder.map((skillName, i) => {
            const item = skillRankingHash[skillName]

            return <TableRow key={item.name}
                item={item}
                rankUp={item.index - i}
                action={this.skillActionList_[item.name]}
                />
        })

        const isAnimationEnd = this.state.isAnimationEnd

        if (this.state.isAnimationEnd) {
            this.state.isAnimationEnd = false
        }
        else {
            clearTimeout(this.animationTimer_!)
            this.animationTimer_ = setTimeout(_ => {
                this.setState({
                    isAnimationEnd: true,
                    rowOrder: skillRanking.map(v => v.name)
                })
            }, 200)
        }

        return <div className={"SkillRanking" + (!isAnimationEnd ? ' animation' : '')}>
            <table style={{ height: 40 * (skillRanking.length + 1) }}>
                <tr>
                    <th>スキル</th>
                    <th>上昇値</th>
                    <th>上昇率</th>
                </tr>
                {TableRows}
            </table>
        </div>
    }
}

namespace TableRow {
    export interface Props extends React.ClassAttributes<null> {
        item: CalcData
        action: () => void
        rankUp: number
    }
}

const TableRow = (props: TableRow.Props) =>
    <tr className={props.item.isActive ? 'checked' : ''}
        onClick={props.action}
        style={!props.rankUp ? {} : {
            transform: `translateY(${props.rankUp * 40}px)`
        }}
        >
        <SkillNameCell name={props.item.name} disappearance={props.item.disappearance} />
        <AddPowerCell power={props.item.plus} />
        <td>{props.item.mult.toFixed(3)}</td>
    </tr>

namespace SkillNameCell {
    export interface Props extends React.ClassAttributes<null> {
        name: string
        disappearance: string | null
    }
}

const SkillNameCell = (props: SkillNameCell.Props) =>
    <td>
        <div className="skillName">
            <span>{props.name}</span>
            <span className={"disappearance" + (props.disappearance ? '' : ' opacity0')}>
                {props.disappearance ? ' - ' + props.disappearance : ''}
            </span>
        </div>
    </td>

namespace AddPowerCell {
    export interface Props extends React.ClassAttributes<null> {
        power: number
    }
}

const AddPowerCell = (props: AddPowerCell.Props) => {
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