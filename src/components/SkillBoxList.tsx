import * as preact from 'preact'
import { skillList } from '../skillData'
import SkillBox from './SkillBox'

interface Props {
    activeSkill: { [skillGroup: string]: string }
    setActiveSkill: (skillGroup: string, skillName: string) => void
}

export default (props: Props) =>
    <ul className='SkillBoxList'>
        {skillList.map(skill =>
            <li className='SkillBoxList-li'>
                <SkillBox key={skill.name}
                    name={skill.name}
                    value={props.activeSkill[skill.group] || null}
                    action={props.setActiveSkill.bind(null, skill.group)}
                    skillButtonList={skill.item}
                />
            </li>
        )}
    </ul>