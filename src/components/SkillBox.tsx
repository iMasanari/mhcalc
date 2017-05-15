import * as preact from 'preact'
import SkillButton from './SkillButton'

interface Props extends preact.ComponentProps {
  name: string
  items: string[]
}

export default (props: Props) =>
  <div className="SkillBox">
    <span>{props.name}</span>
    <ul className="SkillBox-ul">
      {props.items.map(item =>
        <SkillButton key={item} name={item} />
      )}
    </ul>
  </div>
