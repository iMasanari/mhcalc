import * as preact from 'preact'
import SkillButton from './SkillButton'
import { SkillItem } from '../skillData'

interface Props extends preact.ComponentProps {
    name: string
    value: string | null
    action: (skillName: string) => void
    skillButtonList: SkillItem[]
}

export default (props: Props) =>
    <div className="SkillBox">
        <span>{props.name}</span>
        <ul className="SkillBox-ul">
            {props.skillButtonList.map(skillButton =>
                <SkillButton key={skillButton.label}
                    name={skillButton.label}
                    isChecked={props.value == skillButton.name}
                    action={props.action.bind(null, skillButton.name)}
                />
            )}
        </ul>
    </div>