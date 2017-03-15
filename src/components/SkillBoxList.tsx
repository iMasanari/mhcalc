import * as preact from 'preact'
import { skillList } from '../skillData'
import SkillBox from './SkillBox'

export default () =>
  <ul className='SkillBoxList'>
    {skillList.map(skill =>
      <li className='SkillBoxList-li'>
        <SkillBox key={skill.name}
          name={skill.name}
          group={skill.group}
          items={skill.item.map(v => v.name)}
        />
      </li>
    )}
  </ul>
