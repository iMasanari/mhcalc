import * as preact from 'preact'
import SkillButton from './SkillButton'
import { SkillItem } from '../skillData'

interface Props extends preact.ComponentProps {
    name: string
    group: string
    items: SkillItem[]
}

export default (props: Props) =>
    <div className="SkillBox">
        <span>{props.name}</span>
        <ul className="SkillBox-ul">
            {props.items.map(item =>
                <SkillButton key={item.name} name={item.name} />
            )}
        </ul>
    </div>
