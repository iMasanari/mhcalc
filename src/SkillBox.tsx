/// <reference path="SkillButton.tsx" />
/// <reference path="SkillData.ts" />

namespace SkillBox {
    export interface Props extends React.Props<SkillBox> {
        name: string
        value: string
        action: () => void
        skillButtonList: SkillData.item[]
    }
    export interface State {
    }
}

class SkillBox extends React.Component<SkillBox.Props, SkillBox.State> {
    render() {
        return <div className="SkillBox">
            <span>{this.props.name}</span>
            <ul className="SkillBox-ul">
                {this.props.skillButtonList.map(skillButton =>
                    <SkillButton key={skillButton.label}
                        name={skillButton.label}
                        isChecked={this.props.value == skillButton.name}
                        action={this.props.action.bind(null, skillButton.name) }
                        />
                ) }
            </ul>
        </div>
    }
}
