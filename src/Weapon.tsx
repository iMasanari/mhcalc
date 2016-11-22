/// <reference path="weaponData.ts" />
/// <reference path="initValue.ts" />

namespace Weapon {
    export interface Props extends React.ClassAttributes<Weapon> {
        weapon: WeaponData
        setWeapon: (weapon: WeaponData) => void
        activeSkill: { [skillGroup: string]: string }
    }
    export interface State {
        isLastOnly: boolean
        name: string
        power: string | number
        affinity: string | number
    }
}

class Weapon extends React.Component<Weapon.Props, Weapon.State> {
    timer: number
    state: Weapon.State = {
        isLastOnly: true,
        name: initValue.name,
        power: this.props.weapon.power,
        affinity: this.props.weapon.affinity
    }

    toggleLastOnly = () => {
        const isLastOnly = !this.state.isLastOnly

        this.setState({ isLastOnly } as Weapon.State)
    }
    changeType = (e: React.FormEvent<HTMLSelectElement>) => {
        const type = e.currentTarget.value as wepnonType
        const name = getWeaponList(type, this.state.isLastOnly)[0]
        const {power, affinity} = getWeapon(type, name)

        this.setState({ name, power, affinity } as Weapon.State)
        this.props.setWeapon({ type, power, affinity })
    }
    changeName = (e: React.FormEvent<HTMLSelectElement>) => {
        const type = this.props.weapon.type
        const name = e.currentTarget.value
        const {power, affinity} = getWeapon(type, name)

        this.setState({ name, power, affinity } as Weapon.State)
        this.props.setWeapon({ type, power, affinity })
    }
    changePower = (e: React.FormEvent<HTMLInputElement>) => {
        this.setPower(e.currentTarget.value, (this.refs['affinity'] as HTMLInputElement).value)
    }
    changeAffinity = (e: React.FormEvent<HTMLInputElement>) => {
        this.setPower((this.refs['power'] as HTMLInputElement).value, e.currentTarget.value)
    }
    blurHandler = () => {
        const power = +this.state.power || 200
        const affinity = +this.state.affinity || 0

        if (this.state.power === power && this.state.affinity === affinity) return

        this.setState({ power, affinity } as Weapon.State)
        this.props.setWeapon({ type: this.props.weapon.type, power, affinity } as WeaponData)
    }
    setPower(power: string | number, affinity: string | number) {
        const name = this.searchWeapon(+power, +affinity)

        this.setState({ name, power, affinity } as Weapon.State)

        // 計算を遅らせる
        clearTimeout(this.timer)

        this.timer = setTimeout(() => {
            this.props.setWeapon({
                type: this.props.weapon.type,
                power: +this.state.power || 0,
                affinity: +this.state.affinity || 0
            })
        }, 500);
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
                <input ref="power" type="number" pattern="[0-9]*" placeholder="200" step="10" max="1000" min="10"
                    value={(this.refs['power'] === document.activeElement) ? this.state.power : this.props.weapon.power}
                    onChange={this.changePower}
                    onBlur={this.blurHandler} />
                /
                <input ref="affinity" type="number" pattern="-?[0-9]*" placeholder="0" step="5" max="100" min="-100"
                    value={(this.refs['affinity'] === document.activeElement) ? this.state.affinity : this.props.weapon.affinity}
                    onChange={this.changeAffinity}
                    onBlur={this.blurHandler} />
                %
            </p>
            <p>
                {weapon.power | 0}/ {weapon.affinity}% => {power | 0}
            </p>
        </section>
    }
}
