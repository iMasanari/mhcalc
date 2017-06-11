import * as preact from 'preact'
import preactRedux from 'preact-redux'
import { StoreState } from '@/reducers'
import { setAffinity } from '@/reducers/weapon'
import DelayInput from './DelayInput'
import './index.css'

const mapStateToProps = (state: StoreState) =>
  ({
    affinity: state.weapon.affinity,
  })

const mapDispatchToProps = (dispatch: any) =>
  ({
    setAffinity: (textValue: string) => {
      dispatch(setAffinity(+textValue))
    },
  })

export default preactRedux.connect(mapStateToProps, mapDispatchToProps)(
  (props) =>
    <DelayInput className="PowerInputs-input input-area"
      type="number" pattern="-?[0-9]*" step="5" max="100" min="-100"
      value={props.affinity + ''} update={props.setAffinity}
    />
)
