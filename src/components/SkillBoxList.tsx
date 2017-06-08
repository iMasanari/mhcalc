import * as preact from 'preact'
import { skillList } from '../skillData'
import SkillBox from './SkillBox'

export default () =>
  <ul className='SkillBoxList'>
    {skillList.map(skill =>
      <li className='SkillBoxList-li' key={skill.name}>
        <SkillBox name={skill.name} items={skill.item.map(v => v.name)}
        />
      </li>
    )}
  </ul>
