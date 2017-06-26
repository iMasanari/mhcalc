import * as preact from 'preact'
import EventFrom from '@/units/EventFrom'
import './AutoComplete.css'

interface Props {
  value: string
  dataList: string[]
  update?: (value: string) => any
  width: string | number
}

interface State {
  value?: string | null
  isFocus?: boolean
  isInputed?: boolean
}

const hiraganaToKatakana = (src: string) =>
  src.replace(/[\u3041-\u3096]/g, (match) =>
    String.fromCharCode(match.charCodeAt(0) + 0x60)
  )

export default class AutoComplete extends preact.Component<Props, State> {
  private input: HTMLInputElement
  private dataList = this.getDataList(this.props.dataList)

  private onInput = (e: EventFrom<HTMLInputElement>) => {
    this.setState({
      value: e.currentTarget.value,
      isInputed: true,
    })
  }

  private blurInput = () => {
    if (!this.state.isFocus || document.activeElement === this.input) return

    console.log(this.props.value, this.state.value, this.props.dataList.indexOf(this.state.value!))
    this.setState({
      isFocus: false,
      value: this.state.value != null ? this.props.value : this.state.value,
    })
  }

  componentDidMount() {
    const focus = () => {
      this.setState({
        isFocus: true,
        isInputed: false,
      })

      if (this.input.selectionStart === this.input.selectionEnd) {
        this.input.setSelectionRange(0, this.input.value.length)
      }
    }

    this.input.addEventListener('click', focus)
    this.input.addEventListener('blur', () => { setTimeout(this.blurInput, 200) })
    document.addEventListener('click', this.blurInput)
  }

  componentDidUnMount() {
    document.removeEventListener('click', this.blurInput)
  }

  private getDataList(dataList: string[]) {
    return dataList.map(data =>
      ({
        value: data,
        katakana: hiraganaToKatakana(data)
      })
    )
  }

  componentWillReceiveProps(props: Props) {
    this.dataList = this.getDataList(props.dataList)
  }

  private selectValue = (value: string) => {
    const update = this.props.update

    this.setState({ value: update ? null : value })

    if (update) update(value)
  }

  render() {
    let dataList: string[] | undefined
    const katakanaValue = hiraganaToKatakana(this.state.value || '')

    if (this.state.isFocus) {
      if (this.state.isInputed) {
        const matchIndexList = this.dataList.map(data =>
          ({
            value: data.value,
            index: data.katakana.indexOf(katakanaValue),
          })
        )

        dataList = [
          ...matchIndexList.filter(data => data.index === 0),
          ...matchIndexList.filter(data => data.index > 0),
        ].map(data => data.value)
      }
      else {
        dataList = this.dataList.map(data => data.value)
      }
    }

    return <div className="AutoComplete" style={{ width: this.props.width }}>
      <input ref={(input) => { this.input = input as any }}
        className="AutoComplete-input input-area"
        style={{ width: this.props.width }}
        value={this.state.value != null ? this.state.value : this.props.value}
        onInput={this.onInput}
      />
      {dataList &&
        <ul className="AutoComplete-ul"
          style={{
            width: this.props.width,
            height: dataList.length * 30
          }}
        >
          {dataList.map(name =>
            <li key={name}
              className="AutoComplete-li"
              onClick={() => this.selectValue(name)}
            >
              {name}
            </li>
          )}
        </ul>
      }
    </div>
  }
}
