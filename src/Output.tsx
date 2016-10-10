import * as React from 'react';

import skillData from './skilldata'

export namespace Output {
    export interface Props extends React.Props<Output> {
        activeSkill: { [skillName: string]: string }
        setActiveSkill: () => void
    }
    export interface State {
    }
}

export class Output extends React.Component<Output.Props, Output.State> {
    newArray: {
        name: string
        group: string
        action: any
    }[] = []

    constructor(props: Output.Props) {
        super(props)

        skillData.forEach(skill => {
            skill.item.forEach(item => {
                this.newArray.push({
                    name: skill.name + item.label,
                    group: skill.group,
                    action: props.setActiveSkill.bind(null, skill.group, skill.name + item.label)
                })
            })
        })
    }

    render() {
        return <table> {this.newArray.map(item =>
            <tr>
                <th>スキル</th>
            </tr>
            <tr key={item.name}
                className={this.props.activeSkill[item.group] === item.name ? 'checked' : ''}
                onClick={item.action}
                >
                <td>{item.name}</td>
            </tr>
        ) } </table>
    }
}