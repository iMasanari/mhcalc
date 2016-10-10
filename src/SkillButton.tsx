import * as React from 'react';

export namespace SkillButton {
    export interface Data {
        label: string
        value: any
    }
    export interface Props extends React.Props<SkillButton> {
        name: string
        isChecked: boolean
        action: () => void
    }
    export interface State {
        value?: string
    }
}

export class SkillButton extends React.Component<SkillButton.Props, SkillButton.State> {
    render() {
        return <li
            className={'SkillButton' + (this.props.isChecked ? ' checked' : '')}
            onClick={this.props.action}
            >
            {this.props.name}
        </li>
    }
}
