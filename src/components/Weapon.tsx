import * as React from 'react'
import { WeaponData, getWeapon, getWeaponList, wepnonType } from '../weaponData'
import { initWeapon } from './App'
import { skillNameList } from '../skillData'
import { calc } from '../calc'

interface Props {
    weapon: WeaponData
    setWeapon: (weapon: WeaponData) => void
    activeSkill: { [skillGroup: string]: string }
}

interface State {
    isLastOnly: boolean
    name: string
    powerText: string
    affinityText: string
}

export default class Weapon extends React.Component<Props, State> {
    timer: number
    state: State = {
        isLastOnly: true,
        name: initWeapon.name,
        powerText: '' + this.props.weapon.power,
        affinityText: '' + this.props.weapon.affinity
    }
    refs: {
        power: HTMLInputElement,
        affinity: HTMLInputElement
    }

    toggleLastOnly = () => {
        this.setState({ isLastOnly: !this.state.isLastOnly })
    }
    changeType = (e: React.FormEvent<HTMLSelectElement>) => {
        const type = e.currentTarget.value as wepnonType
        const name = getWeaponList(type, this.state.isLastOnly)[0]
        const {power, affinity} = getWeapon(type, name)

        this.setState({ name, powerText: '' + power, affinityText: '' + affinity })
        this.props.setWeapon({ type, power, affinity })
    }
    changeName = (e: React.FormEvent<HTMLSelectElement>) => {
        const type = this.props.weapon.type
        const name = e.currentTarget.value
        const {power, affinity} = getWeapon(type, name)

        this.setState({ name, powerText: '' + power, affinityText: '' + affinity })
        this.props.setWeapon({ type, power, affinity })
    }
    changePower = (e: React.FormEvent<HTMLInputElement>) => {
        const powerText = e.currentTarget.value

        this.setState({ powerText })
        this.setPower(+powerText, +this.state.affinityText)
    }
    changeAffinity = (e: React.FormEvent<HTMLInputElement>) => {
        const affinityText = e.currentTarget.value

        this.setState({ affinityText })
        this.setPower(+this.state.powerText, +affinityText)
    }
    setPower(power: number, affinity: number) {
        this.setState({ name: this.searchWeapon(power, affinity) })

        // 計算を遅らせる
        clearTimeout(this.timer)

        this.timer = setTimeout(() => {
            this.props.setWeapon({
                type: this.props.weapon.type,
                power: validateNumberInput(this.refs.power, this.props.weapon.power, true),
                affinity: validateNumberInput(this.refs.affinity, this.props.weapon.affinity, true)
            })
        }, 500);
    }
    keydownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            this.blurHandler()
        }
    }
    blurHandler = () => {
        clearTimeout(this.timer)

        const power = validateNumberInput(this.refs.power, this.props.weapon.power, true)
        const affinity = validateNumberInput(this.refs.affinity, this.props.weapon.affinity, true)

        if (this.state.powerText === '' + power && this.state.affinityText === '' + affinity) return

        const name = this.searchWeapon(power, affinity)

        this.setState({ name, powerText: '' + power, affinityText: '' + affinity })
        this.props.setWeapon({ type: this.props.weapon.type, power, affinity } as WeaponData)
    }
    searchWeapon(power: number, affinity: number) {
        for (const isLast of [true, false]) {
            for (const name of getWeaponList(this.props.weapon.type, v => v.isLast === isLast)) {
                const weapon = getWeapon(this.props.weapon.type, name)

                if (weapon.power === power && weapon.affinity === affinity) {
                    return name
                }
            }
        }

        return 'カスタマイズ'
    }
    render() {
        const activeSkillList = skillNameList.filter(item => this.props.activeSkill[item.group] === item.name)
        const {power, weapon} = calc(this.props.weapon, activeSkillList)

        const weaponList = getWeaponList(this.props.weapon.type, this.state.isLastOnly)
        const weaponNameOptions = weaponList.map(value => <option value={value}>{value}</option>)
        const weaponValue = this.state.name

        if (weaponList.indexOf(weaponValue) === -1) {
            weaponNameOptions.unshift(<option value={weaponValue}>（{weaponValue}）</option>)
        }

        return <section className="Weapon">
            <h2>Choose a Weapon</h2>
            <p>
                <select className="weapon-type" value={this.props.weapon.type} onChange={this.changeType}>
                    <option value="lightbowgun">ライト</option>
                    <option value="heavybowgun">ヘビィ</option>
                </select>
                <select className="weapon-name" value={weaponValue} onChange={this.changeName}>
                    {weaponNameOptions}
                </select>
                <br />
                <label>
                    <input type="checkbox" checked={this.state.isLastOnly} onChange={this.toggleLastOnly} />
                    最終強化のみを表示
                </label>
            </p>
            <p>
                <input ref="power" type="number" pattern="[0-9]*" step="10" max="1000" min="10"
                    value={(this.refs['power'] === document.activeElement) ? this.state.powerText : this.props.weapon.power}
                    onChange={this.changePower}
                    onKeyDown={this.keydownHandler}
                    onBlur={this.blurHandler} />
                /
                <input ref="affinity" type="number" pattern="-?[0-9]*" step="5" max="100" min="-100"
                    value={(this.refs['affinity'] === document.activeElement) ? this.state.affinityText : this.props.weapon.affinity}
                    onChange={this.changeAffinity}
                    onKeyDown={this.keydownHandler}
                    onBlur={this.blurHandler} />
                %
            </p>
            <p>
                {weapon.power | 0} / {weapon.affinity}% => {power | 0}
            </p>
        </section>
    }
}

function validateNumberInput<T>(input: HTMLInputElement, defaultValue: number | T, step?: boolean) {
    if (input.value === '' || input.pattern && !new RegExp(`^${input.pattern}$`).test(input.value)) {
        return defaultValue
    }

    const value = +input.value

    const minAttr = input.getAttribute('min')
    if (minAttr !== null && value < +minAttr) return +minAttr

    const maxAttr = input.getAttribute('max')
    if (maxAttr !== null && value > +maxAttr) return +maxAttr

    const stepNum = +input.getAttribute('step')
    if (step && stepNum) return Math.round(value / stepNum) * stepNum

    return value
}
