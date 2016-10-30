/// <reference path="weaponData.ts" />

namespace Weapon {
    export interface Props extends React.Props<Weapon> {
        weapon: WeaponData
        setWeapon: (weapon: WeaponData) => void
        activeSkill: { [skillGroup: string]: string }
    }
    export interface State {
        isLastName?: boolean
        name?: string
        level?: number
        powerText?: string
        affinityText?: string
    }
}

class Weapon extends React.Component<Weapon.Props, Weapon.State> {
    timer: number

    constructor(props: Weapon.Props) {
        super(props)

        this.state = {
            isLastName: true,
            name: 'ベルダーバレット',
            level: 8,
            powerText: null,
            affinityText: null
        }
        this.toggleLastName = this.toggleLastName.bind(this)

        const type = this.props.weapon.type
        const [power, affinity] = getWeapon(type, this.state.name, this.state.level)

        this.props.setWeapon({ type, power, affinity })

        this.setPower = this.setPower.bind(this)
        this.setAffinity = this.setAffinity.bind(this)
    }
    toggleLastName() {
        this.setState({ isLastName: !this.state.isLastName })
    }
    setType() {
        const type = (this.refs['type'] as HTMLSelectElement).value as any
        const name = getWeaponList(type)[0]
        const level = getWeaponLevelList(type, name).length
        const [power, affinity] = getWeapon(type, name, level)

        this.setState({
            name, level,
            powerText: null,
            affinityText: null
        })
        this.props.setWeapon({ type, power, affinity })
    }
    setName() {
        const type = this.props.weapon.type
        const name = (this.refs['name'] as HTMLSelectElement).value
        const level = getWeaponLevelList(type, name).length
        const [power, affinity] = getWeapon(type, name, level)

        this.setState({
            name, level,
            powerText: null,
            affinityText: null
        })
        this.props.setWeapon({ type, power, affinity })
    }
    setLevel() {
        const type = this.props.weapon.type
        const name = this.state.name
        const level = +(this.refs['level'] as HTMLSelectElement).value
        const [power, affinity] = getWeapon(type, name, level)

        this.setState({
            level,
            powerText: null,
            affinityText: null
        })
        this.props.setWeapon({ type, power, affinity })
    }
    setPower(e: React.FormEvent<HTMLInputElement>) {
        this._setPower((e.target as HTMLInputElement).value, (this.refs['affinity'] as HTMLInputElement).value)
    }
    setAffinity(e: React.FormEvent<HTMLInputElement>) {
        this._setPower((this.refs['power'] as HTMLInputElement).value, (e.target as HTMLInputElement).value)
    }
    _setPower(powerText: string, affinityText: string) {
        this.setState({
            name: '（カスタマイズ）',
            level: 1,
            powerText,
            affinityText
        })

        clearTimeout(this.timer)

        this.timer = setTimeout(() => {
            this.props.setWeapon({
                type: this.props.weapon.type,
                power: +this.state.powerText || 200,
                affinity: +this.state.affinityText || 0
            })

            if (powerText !== '' && !isNaN(+powerText) && affinityText !== '' && !isNaN(+affinityText)) {
                this.setState({
                    powerText: null,
                    affinityText: null
                })
            }
        }, 500);
    }
    render() {
        const activeSkillList = skillNameList.filter(item => this.props.activeSkill[item.group] === item.name)
        const power = calc(this.props.weapon, activeSkillList)

        if (this.props.weapon.power == null) return null

        return <section className="Weapon">
            <h2>Choose a Weapon</h2>
            <select ref="type"
                className="weapon-type"
                value={this.props.weapon.type}
                onChange={this.setType.bind(this)}
                >
                <option value="lightbowgun">ライト</option>
                <option value="heavybowgun">ヘビィ</option>
            </select>
            <select ref="name"
                className="weapon-name"
                value={this.state.name}
                onChange={this.setName.bind(this)}
                >
                {getWeaponList(this.props.weapon.type).map(value =>
                    <option value={value}>
                        {this.state.isLastName ? getWeaponLastName(this.props.weapon.type, value) : value}
                    </option>
                )}
            </select>
            <select ref="level"
                className="weapon-level"
                value={this.state.level + ''}
                onChange={this.setLevel.bind(this)}
                >
                {getWeaponLevelList(this.props.weapon.type, this.state.name).map((value, i) =>
                    <option value={i + 1}>LV{i + 1}</option>
                )}
            </select>
            <br />
            <label>
                <small>
                    <input type="checkbox" checked={this.state.isLastName} onChange={this.toggleLastName} />
                    最終強化名で表示
                </small>
            </label>
            <p className="weapon-power">
                <input ref="power" type="number" pattern="[0-9]*" placeholder="200" step="10" max="1000" min="10"
                    value={this.state.powerText !== null ? this.state.powerText : this.props.weapon.power}
                    onChange={this.setPower} />
                /
                <input ref="affinity" type="number" pattern="-?[0-9]*" placeholder="0" step="10" max="100" min="-100"
                    value={this.state.affinityText !== null ? this.state.affinityText : this.props.weapon.affinity}
                    onChange={this.setAffinity} />
                %
                <br/>
                {`=> ${power | 0}`}
            </p>
        </section>
    }
}