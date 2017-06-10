import * as preact from 'preact'
import classNames from '../../units/classNames'
import './AddPowerCell.css'

interface Props {
  power: number
}

export default (props: Props) => {
  const value = Math.min(Math.abs(props.power), 100)

  return (
    <div className="AddPowerCell">
      <span className={classNames({
        'AddPowerCell-graph': true,
        'AddPowerCell-minus': props.power < 0,
      })}
        style={{ transform: `scaleX(${value / 100})` }}
      />
      <span className='AddPowerCell-value' style={{ transform: `translateX(${value - 92}px)` }}>
        {props.power}
      </span>
    </div>
  )
}
