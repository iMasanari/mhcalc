import * as preact from 'preact'
import classNames from '@/units/classNames'
import './SkillNameCell.css'

interface Props {
  name: string
  disappearance: string | null
  checked: boolean
}

export default (props: Props) =>
  <div className="SkillNameCell">
    <span>{props.name}</span>
    <span className={classNames({
      'SkillNameCell-disappearance': true,
      'SkillNameCell-hide': !props.disappearance,
    })}>
      {props.disappearance ? '- ' + props.disappearance : ''}
    </span>
  </div>
