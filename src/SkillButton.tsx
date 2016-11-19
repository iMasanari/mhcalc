namespace SkillButton {
    export interface Props extends React.ClassAttributes<null> {
        name: string
        isChecked: boolean
        action: () => void
    }
}

const SkillButton = (props: SkillButton.Props) =>
    <li
        className={'SkillButton' + (props.isChecked ? ' checked' : '')}
        onClick={props.action}
        >
        {props.name}
    </li>
