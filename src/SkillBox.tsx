import * as React from 'react';

import {SkillButton} from './SkillButton'

export namespace SkillBox {
    export interface Props extends React.Props<SkillBox> {
        name: string
        value: string
        action: () => void
        skillButtonList: SkillButton.Data[]
    }
    export interface State {
    }
}

export class SkillBox extends React.Component<SkillBox.Props, SkillBox.State> {
    render() {
        return <div className="SkillBox">
            <span>{this.props.name}</span>
            <ul className="SkillBox-ul">{ this.props.skillButtonList.map(skillButton =>
                <SkillButton key={skillButton.label}
                    name={skillButton.label}
                    isChecked={this.props.value == this.props.name + skillButton.label}
                    action={this.props.action.bind(null, this.props.name + skillButton.label) }
                    />
            ) }</ul>
        </div>
    }
}
