import * as preact from 'preact'
import preactRedux from 'preact-redux'
import { StoreState } from '../../reducers'
import { setPower, setAffinity } from '../../reducers/weapon'
import DelayInput from './DelayInput'

const mapStateToProps = (state: StoreState) =>
  ({
    power: state.weapon.power,
    affinity: state.weapon.affinity
  })

const mapDispatchToProps = (dispatch: any) =>
  ({
    setPower: (textValue: string) => {
      dispatch(setPower(+textValue))
    },
    setAffinity: (textValue: string) => {
      dispatch(setAffinity(+textValue))
    },
  })

export default preactRedux.connect(mapStateToProps, mapDispatchToProps)(
  (props) =>
    <div>
      <DelayInput type="number" pattern="[0-9]*" step="10" max="1000" min="10"
        value={props.power + ''} update={props.setPower}
      />
      /
      <DelayInput type="number" pattern="-?[0-9]*" step="5" max="100" min="-100"
        value={props.affinity + ''} update={props.setAffinity}
      />
    </div>
)
