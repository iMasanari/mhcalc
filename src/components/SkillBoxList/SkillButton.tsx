import * as preact from 'preact'
import { connect } from 'preact-redux'
import { StoreState } from '@/reducers'
import { toggleSkill } from '@/reducers/skill'
import { skillNameHash } from '@/skillData'

interface Props {
  name: string
}

const mapStateToProps = (state: StoreState, ownProps: Props) => {
  const { label, group } = skillNameHash[ownProps.name]

  return {
    label: label,
    isActive: (state.skill.active[group] === ownProps.name)
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: Props) =>
  ({
    onClick: () => {
      dispatch(toggleSkill(ownProps.name))
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(
  (props) =>
    <div
      className={'SkillButton' + (props.isActive ? ' checked' : '')}
      onClick={props.onClick}
      title={props.name}
    >
      {props.label}
    </div>
)
