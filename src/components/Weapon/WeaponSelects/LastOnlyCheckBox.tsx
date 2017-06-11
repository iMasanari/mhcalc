import * as preact from 'preact'
import preactRedux from 'preact-redux'
import { StoreState } from '@/reducers'
import { toggleLastOnly } from '@/reducers/weapon'

const mapStateToProps = (state: StoreState) =>
  ({ isLastOnly: state.weapon.isLastOnly })

const mapDispatchToProps = (dispatch: any) =>
  ({
    toggleLastOnly: () => {
      dispatch(toggleLastOnly())
    }
  })

export default preactRedux.connect(mapStateToProps, mapDispatchToProps)(
  (props) =>
    <label>
      <input type="checkbox" checked={props.isLastOnly} onChange={props.toggleLastOnly} />
      最終強化のみを表示
    </label>
)
