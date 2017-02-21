import * as React from 'react'

interface Props {
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
