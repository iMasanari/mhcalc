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
    }
}

class Weapon extends React.Component<Weapon.Props, Weapon.State> {
    constructor(props: Weapon.Props) {
        super(props)

        this.state = {
            isLastName: true,
            name: 'ベルダーバレット',
            level: 8
        }
        this.toggleLastName = this.toggleLastName.bind(this)

        const type = this.props.weapon.type
        const [power, affinity] = getWeapon(type, this.state.name, this.state.level)

        this.props.setWeapon({ type, power, affinity })
    }
    toggleLastName() {
        this.setState({ isLastName: !this.state.isLastName })
    }
    setType() {
        const type = (this.refs['type'] as HTMLSelectElement).value as any
        const name = getWeaponList(type)[0]
        const level = getWeaponLevelList(type, name).length
        const [power, affinity] = getWeapon(type, name, level)

        this.setState({ name, level })
        this.props.setWeapon({ type, power, affinity })
    }
    setName() {
        const type = this.props.weapon.type
        const name = (this.refs['name'] as HTMLSelectElement).value
        const level = getWeaponLevelList(type, name).length
        const [power, affinity] = getWeapon(type, name, level)

        this.setState({ name, level })
        this.props.setWeapon({ type, power, affinity })
    }
    setLevel() {
        const type = this.props.weapon.type
        const name = this.state.name
        const level = +(this.refs['level'] as HTMLSelectElement).value
        const [power, affinity] = getWeapon(type, name, level)

        this.setState({ level })
        this.props.setWeapon({ type, power, affinity })
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
                {`${this.props.weapon.power} / ${this.props.weapon.affinity}% => ${power | 0}`}
            </p>
        </section>
    }
}