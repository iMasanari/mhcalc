import * as preact from 'preact'
import preactRedux from 'preact-redux'
import { toggleSkill } from '../../reducers/skill'
import { StoreState } from '../../reducers'
import { toggleSkillFilter } from '../../reducers/ranking'
import './TableRow.css'

const mapStateToProps = (state: StoreState) =>
  ({
    skillFilter: state.ranking.skillFilter,
  })

const mapDispatchToProps = (dispatch: any) =>
  ({
    toggleSkillFilter: () => {
      dispatch(toggleSkillFilter())
    }
  })

export default preactRedux.connect(mapStateToProps, mapDispatchToProps)(
  (props) =>
    <tr>
      <th className="TableRow-th">
        スキル<br />
        <label>
          <input type="checkbox" checked={!props.skillFilter} onChange={props.toggleSkillFilter} />
          <small>防具スキルのみ</small>
        </label>
      </th>
      <th className="TableRow-th">上昇値</th>
      <th className="TableRow-th">上昇率</th>
    </tr>
)