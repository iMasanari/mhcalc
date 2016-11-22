/// <reference path="weaponData.ts" />
/// <reference path="initValue.ts" />

namespace Weapon {
    export interface Props extends React.ClassAttributes<Weapon> {
        weapon: WeaponData
        setWeapon: (weapon: WeaponData) => void
        activeSkill: { [skillGroup: string]: string }
    }
    export interface State {
        isLastName: boolean
        name: string
        level: number
        power: string | number
        affinity: string | number
    }
}

class Weapon extends React.Component<Weapon.Props, Weapon.State> {
    timer: number
    state: Weapon.State = {
        isLastName: true,
        name: initValue.name,
        level: initValue.level,
        power: this.props.weapon.power,
        affinity: this.props.weapon.affinity
    }

    toggleLastName = () => {
        this.setState({ isLastName: !this.state.isLastName } as Weapon.State)
    }
    changeType = (e: React.FormEvent<HTMLSelectElement>) => {
        const type = e.currentTarget.value as wepnonType
        const name = getWeaponList(type)[0]
        const level = getWeaponLevelList(type, name).length
        const [power, affinity] = getWeapon(type, name, level)

        this.setState({ name, level, power, affinity } as Weapon.State)
        this.props.setWeapon({ type, power, affinity })
    }
    changeName = (e: React.FormEvent<HTMLSelectElement>) => {
        const type = this.props.weapon.type
        const name = e.currentTarget.value
        const level = getWeaponLevelList(type, name).length
        const [power, affinity] = getWeapon(type, name, level)

        this.setState({ name, level, power, affinity } as Weapon.State)
        this.props.setWeapon({ type, power, affinity })
    }
    changeLevel = (e: React.FormEvent<HTMLSelectElement>) => {
        const type = this.props.weapon.type
        const name = this.state.name
        const level = +e.currentTarget.value
        const [power, affinity] = getWeapon(type, name, level)

        this.setState({ level, power, affinity } as Weapon.State)

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

        this.setState({power, affinity} as Weapon.State)
        this.props.setWeapon({type: this.props.weapon.type, power, affinity } as WeaponData)
    }
    setPower(power: string | number, affinity: string | number) {
        const {name, level} = this.searchWeapon(+power, +affinity)

        this.setState({ name, level, power, affinity } as Weapon.State)

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
        for (const name of getWeaponList(this.props.weapon.type)) {
            const levelList = getWeaponLevelList(this.props.weapon.type, name)

            for (let i = levelList.length; i--;) {
                const weapon = levelList[i]

                if (weapon[0] === power && weapon[1] === affinity) {
                    return { name, level: i + 1 }
                }
            }
        }

        return {
            name: '（カスタマイズ）',
            level: 1
        }
    }
    render() {
        const activeSkillList = skillNameList.filter(item => this.props.activeSkill[item.group] === item.name)
        const power = calc(this.props.weapon, activeSkillList)

        const weaponNameOptions = getWeaponList(this.props.weapon.type).map(value =>
            <option value={value}>
                {this.state.isLastName ? getWeaponLastName(this.props.weapon.type, value) : value}
            </option>
        )

        const weaponLevelOptions = getWeaponLevelList(this.props.weapon.type, this.state.name).map((_, i) =>
            <option value={i + 1}>LV{i + 1}</option>
        )

        return <section className="Weapon">
            <h2>Choose a Weapon</h2>
            <select className="weapon-type" value={this.props.weapon.type} onChange={this.changeType}>
                <option value="lightbowgun">ライト</option>
                <option value="heavybowgun">ヘビィ</option>
            </select>
            <select className="weapon-name" value={this.state.name} onChange={this.changeName}>
                {weaponNameOptions}
            </select>
            <select className="weapon-level" value={this.state.level} onChange={this.changeLevel}>
                {weaponLevelOptions}
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
                    value={(this.refs['power'] === document.activeElement) ? this.state.power : this.props.weapon.power}
                    onChange={this.changePower}
                    onBlur={this.blurHandler} />
                /
                <input ref="affinity" type="number" pattern="-?[0-9]*" placeholder="0" step="10" max="100" min="-100"
                    value={(this.refs['affinity'] === document.activeElement) ? this.state.affinity : this.props.weapon.affinity}
                    onChange={this.changeAffinity}
                    onBlur={this.blurHandler} />
                %
                <br />
                => {power | 0}
            </p>
        </section>
    }
}
