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
        isAllSkill: boolean
        prevSkillRanking: CalcData[]
    }
}

class SkillRanking extends React.Component<SkillRanking.Props, SkillRanking.State> {
    private isAnimationEnd = true
    private animationTimer_: number | undefined
    private skillActionList_ = skillNameList.reduce(
        (hash, skill) => (hash[skill.name] = this.props.setActiveSkill.bind(null, skill.group, skill.name), hash),
        {} as { [skillName: string]: () => void }
    )

    state: SkillRanking.State = {
        isAllSkill: false,
        prevSkillRanking: getRanking(this.props.weapon, this.props.activeSkill, false)
    }

    toggleFilter = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ isAllSkill: !e.currentTarget.checked } as SkillRanking.State)
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
                } as SkillRanking.State)
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

namespace TableRow {
    export interface Props extends React.ClassAttributes<null> {
        item: CalcData
        action: () => void
        rankUp: number
        isHide?: boolean
    }
}

const TableRow = (props: TableRow.Props) =>
    <tr className={props.isHide ? 'opacity0' : props.item.isActive ? 'checked' : undefined}
        onClick={props.action}
        style={props.rankUp ? { transform: `translateY(${props.rankUp * 40}px)` } : undefined}
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
                {props.disappearance ? '- ' + props.disappearance : ''}
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