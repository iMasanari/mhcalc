/// <reference path="weaponData.ts" />

namespace Weapon {
    export interface Props extends React.Props<Weapon> {
        weapon: WeaponData
        setWeapon: (weapon: WeaponData) => void
    }
    export interface State {
    }
}

function getFirstKey(obj: {}) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            return key
        }
    }
    return null
}

class Weapon extends React.Component<Weapon.Props, Weapon.State> {
    setType() {
        const type = (this.refs['type'] as HTMLSelectElement).value as any
        const name = getFirstKey(weaponData[type])
        const level = weaponData[type][name].length - 1

        this.props.setWeapon({type, name, level})
    }
    setName() {
        const type = this.props.weapon.type
        const name = (this.refs['name'] as HTMLSelectElement).value
        const level = weaponData[type][name].length - 1

        this.props.setWeapon({type, name, level})
    }
    setLevel() {
        const type = this.props.weapon.type
        const name = this.props.weapon.name
        const level = +(this.refs['level'] as HTMLSelectElement).value

        this.props.setWeapon({type, name, level})
    }
    render() {
        return <div className="Weapon">
            <select ref='type' value={this.props.weapon.type} onChange={this.setType.bind(this) }>
                <option value="lightbowgun">ライト</option>
                <option value="heavybowgun">ヘビィ</option>
            </select>
            <select ref='name' value={this.props.weapon.name} onChange={this.setName.bind(this) }>
                {Object.keys(weaponData[this.props.weapon.type]).map(value =>
                    <option value={value}>{value}</option>
                ) }
            </select>
            <select ref='level' value={this.props.weapon.level + ''} onChange={this.setLevel.bind(this) }>
                {weaponData[this.props.weapon.type][this.props.weapon.name].map((value, i) =>
                    <option value={i}>LV{i + 1}</option>
                ) }
            </select>
            <p>
                {weaponData[this.props.weapon.type][this.props.weapon.name][this.props.weapon.level][0]}
                /
                {weaponData[this.props.weapon.type][this.props.weapon.name][this.props.weapon.level][1]}%
            </p>

        </div>
    }
}