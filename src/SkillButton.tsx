namespace SkillButton {
    export interface Props extends React.Props<SkillButton> {
        name: string
        isChecked: boolean
        action: () => void
    }
    export interface State {
    }
}

class SkillButton extends React.Component<SkillButton.Props, SkillButton.State> {
    render() {
        return <li
            className={'SkillButton' + (this.props.isChecked ? ' checked' : '')}
            onClick={this.props.action}
            >
            {this.props.name}
        </li>
    }
}

