import * as React from 'react'

interface Props extends React.ClassAttributes<null> {
    name: string
    isChecked: boolean
    action: () => void
}

export default (props: Props) =>
    <li
        className={'SkillButton' + (props.isChecked ? ' checked' : '')}
        onClick={props.action}
    >
        {props.name}
    </li>
