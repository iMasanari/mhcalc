import * as preact from 'preact'
import { connect } from 'preact-redux'
import { StoreState } from '@/reducers'
import { setPower } from '@/reducers/weapon'
import DelayInput from './DelayInput'
import './index.css'

const mapStateToProps = (state: StoreState) =>
  ({
    power: state.weapon.power,
  })

const mapDispatchToProps = (dispatch: any) =>
  ({
    setPower: (textValue: string) => {
      dispatch(setPower(+textValue))
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(
  (props) =>
    <DelayInput className="PowerInputs-input input-area"
      type="number" pattern="[0-9]*" step="10" max="1000" min="10"
      value={props.power + ''} update={props.setPower}
    />
)
