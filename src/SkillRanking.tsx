/// <reference path="skillData.ts" />
/// <reference path="weaponData.ts" />
/// <reference path="calc.ts" />

namespace SkillRanking {
    export interface Props extends React.Props<SkillRanking> {
        activeSkill: { [skillName: string]: string }
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
        const skillRanking = getRanking(this.props.weapon, this.props.activeSkill)

        return <table className="SkillRanking">
            <tr>
                <th>スキル</th>
                <th>上昇値</th>
                <th>上昇率</th>
            </tr>
            {skillRanking.map(item => {
                return <tr key={item.name}
                    onClick={this.skillActionList[item.name]}
                    className={item.isActive ? 'checked' : ''}
                    >
                    <td>
                        <span className="skillName">
                            {item.name}
                        </span>
                        {(item.disappearance) ? <span className="disappearance">
                            {'－' + item.disappearance}
                        </span> : null
                        }
                    </td>
                    <td>
                        <span
                            className={'test' + (item.plus < 0 ? ' minus' : '')}
                            style={{ width: Math.abs(item.plus) + 'px' }}
                            />
                        {' '}
                        {item.plus}
                    </td>
                    <td>{item.mult.toFixed(3)}</td>
                </tr>
            })}
        </table>
    }
}
