/// <reference path="skillData.ts" />
/// <reference path="weaponData.ts" />

namespace Output {
    export interface Props extends React.Props<Output> {
        activeSkill: { [skillName: string]: string }
        setActiveSkill: () => void
        weapon: {
            type: string
            name: string
            level: number
        }
    }
    export interface State {
    }
}

class Output extends React.Component<Output.Props, Output.State> {
    newArray: {
        name: string
        group: string
        value: number | { parts: number }
        effect: (a, b) => void
        action: () => void
    }[] = []

    constructor(props: Output.Props) {
        super(props)

        skillData.forEach(skill => {
            skill.item.forEach(item => {
                this.newArray.push({
                    name: item.name,
                    group: skill.group,
                    value: item.value,
                    effect: skill.effect,
                    action: props.setActiveSkill.bind(null, skill.group, item.name)
                })
            })
        })
    }

    render() {
        let wep = weaponData[this.props.weapon.type][this.props.weapon.name][this.props.weapon.level]
        let weapon = {
            power: wep[0],
            affinity: wep[1],
            mult: this.props.weapon.type === 'lightbowgun' ? 1.3 : 1.5
        }
        let skill = {
            power: 0,
            mult: 1,
            affinity: 0
        };

        let activeSkillList = this.newArray.filter(item => {
            return this.props.activeSkill[item.group] === item.name
        })

        activeSkillList.forEach(item => {
            item.effect(skill, item.value)
        })

        let orgPower = getAttackPower(weapon, skill)

        let a = this.newArray.map(item => {
            let skill = {
                power: 0,
                mult: 1,
                affinity: 0
            };

            activeSkillList.forEach(item_1 => {
                if (item_1.group === item.group) return

                item_1.effect(skill, item_1.value)
            })

            let group = this.props.activeSkill[item.group]
            let a = {
                name: item.name,
                isActive: group === item.name,
                action: item.action,
                disappearance: group && group !== item.name ? '- ' + group : '',
                plus: null,
                mult: null
            }
            if (this.props.activeSkill[item.group] !== item.name) {
                item.effect(skill, item.value)

                let power = getAttackPower(weapon, skill);

                a.plus = (power - orgPower) | 0
                a.mult = power / orgPower
            } else {
                let power = getAttackPower(weapon, skill);

                a.plus = (orgPower - power) | 0
                a.mult = orgPower / power;
            }

            return a
        }).sort((a, b) =>
            b.plus - a.plus || b.mult - a.mult // || +b.isActive - +a.isActive
            )

        return <table className="Output">
            <tr>
                <th>スキル</th>
                <th>上昇値</th>
                <th>上昇率</th>
            </tr>
            {a.map(item => {
                return <tr key={item.name}
                    onClick={item.action}
                    className={item.isActive ? 'checked' : ''}
                    >
                    <td>
                    <span className="skillName">
                        {item.name}
                    </span>
                        <span className="disappearance">
                            {item.disappearance}
                        </span>
                    </td>
                    <td>
                        <span
                            className={'test' + (item.plus < 0 ? ' minus' : '') }
                            style={{ width: Math.abs(item.plus) + 'px' }}
                            />
                        {' '}
                        {item.plus}
                    </td>
                    <td>{item.mult.toFixed(3) }</td>
                </tr>
            }) }
        </table>
    }
}

function getAttackPower(weapon, skill) {
    var power = weapon.power,
        affinity = Math.min(Math.max(weapon.affinity + skill.affinity, -100), 100),
        superAffinity = 1.25 - 1;

    if (skill.parts) {
        power += Math.floor(power * (skill.parts - 1));
    }

    if (skill.superAffinity) {
        superAffinity = skill.superAffinity - 1;
    }

    // return (power + skill.power) * weapon.mult * skill.mult * (1 + affinity / 100 * superAffinity);
    return (power + skill.power) * skill.mult * (1 + affinity / 100 * superAffinity);
}
