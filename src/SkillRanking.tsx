/// <reference path="skillData.ts" />
/// <reference path="weaponData.ts" />
/// <reference path="calc.ts" />

namespace SkillRanking {
    export interface Props extends React.Props<SkillRanking> {
        activeSkill: { [skillGroup: string]: string }
        setActiveSkill: () => void
        weapon: WeaponData
    }
    export interface State {
    }
}

class SkillRanking extends React.Component<SkillRanking.Props, SkillRanking.State> {
    skillActionList: {
        [skillName: string]: () => void
    }

    constructor(props: SkillRanking.Props) {
        super(props)

        this.skillActionList = {}

        for (const skill of skillNameList) {
            this.skillActionList[skill.name] = props.setActiveSkill.bind(null, skill.group, skill.name)
        }
    }

    render() {
        if (this.props.weapon.power == null) return null

        const skillRanking = getRanking(this.props.weapon, this.props.activeSkill)
        const testSkillRanking = {} as { [name: string]: any }

        for (let i = skillRanking.length; i--;) {
            skillRanking[i].index = i
            testSkillRanking[skillRanking[i].name] = skillRanking[i]
        }

        const TableRows = Object.keys(this.skillActionList).map((itemName, i) => {
            const item = testSkillRanking[itemName]

            return <TableRow key={item.name}
                item={item}
                action={this.skillActionList[item.name]}
                />
        })

        return <div className="SkillRanking">
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
    export interface Props extends React.Props<null> {
        item: any
        action: () => void
    }
}

const TableRow = (props: TableRow.Props) =>
    <tr className={props.item.isActive ? 'checked' : ''}
        onClick={props.action}
        style={{
            transform: `translateY(${(props.item.index + 1) * 40}px)`,
            zIndex: props.item.index
        }}
        >
        <SkillNameCell name={props.item.name} disappearance={props.item.disappearance} />
        <AddPowerCell power={props.item.plus} />
        <td>{props.item.mult.toFixed(3)}</td>
    </tr>

namespace SkillNameCell {
    export interface Props extends React.Props<null> {
        name: string
        disappearance: string
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
    export interface Props extends React.Props<null> {
        power: number
    }
}

const AddPowerCell = (props: AddPowerCell.Props) =>{
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