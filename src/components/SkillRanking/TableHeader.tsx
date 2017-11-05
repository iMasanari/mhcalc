import * as preact from 'preact'
import { connect } from 'preact-redux'
import { StoreState } from '@/reducers'
import { toggleSkillFilter } from '@/reducers/ranking'

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

export default connect(mapStateToProps, mapDispatchToProps)(
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