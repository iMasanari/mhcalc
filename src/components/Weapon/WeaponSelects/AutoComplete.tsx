import * as preact from 'preact'
import EventFrom from '@/units/EventFrom'
import classNames from '@/units/classNames'
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
  selected?: number | null
}

const hiraganaToKatakana = (src: string) =>
  src.replace(/[\u3041-\u3096]/g, (match) =>
    String.fromCharCode(match.charCodeAt(0) + 0x60)
  )

export default class AutoComplete extends preact.Component<Props, State> {
  private input: HTMLInputElement
  private dataList = this.getDataList(this.props.dataList)
  private filteredValueList = this.props.dataList

  private inputInput = (e: EventFrom<HTMLInputElement>) => {
    this.setState({
      value: e.currentTarget.value,
      isInputed: true,
      selected: null,
    })
  }

  private blurInput = () => {
    if (!this.state.isFocus || document.activeElement === this.input) return

    this.setState({
      isFocus: false,
      value: this.state.value != null ? this.props.value : this.state.value,
    })
  }

  private focusInput = () => {
    this.setState({
      isFocus: true,
      isInputed: false,
      selected: null,
    })

    if (this.input.selectionStart === this.input.selectionEnd) {
      this.input.setSelectionRange(0, this.input.value.length)
    }
  }

  private delayBlurInput = () => {
    setTimeout(this.blurInput, 500)
  }

  private keyDownInput = (e: KeyboardEvent) => {
    switch (e.keyCode) {
      case 13: { // enter
        const value = this.filteredValueList[this.state.selected!]

        if (value) {
          e.preventDefault()
          this.selectValue(value)

          this.input.blur()
          this.setState({ isFocus: false })
        }

        return
      }
      case 27: { // esc
        e.preventDefault()
        this.setState({ isFocus: false })
        return
      }
      case 38: { // up
        e.preventDefault()
        this.setState({
          selected: this.state.selected == null ? 0 : this.state.selected - 1
        })
        return
      }
      case 40: { // down
        e.preventDefault()
        this.setState({
          selected: this.state.selected == null ? 0 : this.state.selected + 1
        })
        return
      }
    }
  }

  componentDidMount() {
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
    const katakanaValue = hiraganaToKatakana(this.state.value || '')

    if (this.state.isFocus) {
      if (this.state.isInputed) {
        const matchIndexList = this.dataList.map(data =>
          ({
            value: data.value,
            index: data.katakana.indexOf(katakanaValue),
          })
        )

        this.filteredValueList = [
          ...matchIndexList.filter(data => data.index === 0),
          ...matchIndexList.filter(data => data.index > 0),
        ].map(data => data.value)
      }
      else {
        this.filteredValueList = this.dataList.map(data => data.value)
      }
    }

    return <div className="AutoComplete" style={{ width: this.props.width }}>
      <input ref={(input) => { this.input = input as any }}
        className="AutoComplete-input input-area"
        style={{ width: this.props.width }}
        value={this.state.value != null ? this.state.value : this.props.value}
        onClick={this.focusInput}
        onInput={this.inputInput}
        onKeyDown={this.keyDownInput}
        onBlur={this.delayBlurInput}
      />
      {this.state.isFocus &&
        <ul className="AutoComplete-ul"
          style={{
            width: this.props.width,
            height: this.filteredValueList.length * 30
          }}
        >
          {this.filteredValueList.map((name, index) =>
            <li key={name}
              className={classNames({
                "AutoComplete-li": true,
                "AutoComplete-selected": index === this.state.selected,
              })}
              onClick={() => { this.selectValue(name) }}
              onMouseOver={() => { this.setState({ selected: index }) }}
            >
              {name}
            </li>
          )}
        </ul>
      }
    </div>
  }
}
