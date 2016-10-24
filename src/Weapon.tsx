import * as React from 'react';

import weaponData from './weaponData'

export namespace Weapon {
    export interface Props extends React.Props<Weapon> {
        type: string
        name: string
        level: number
        setWeapon: (type: string, name: string, level: number) => void
    }
    export interface State {
    }
}
function getFirstKey(obj: {}) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return key
        }
    }
    return null
}
export class Weapon extends React.Component<Weapon.Props, Weapon.State> {
    setType() {
        let type = (this.refs['type'] as HTMLSelectElement).value
        let name = getFirstKey(weaponData[type])
        let level = weaponData[type][name].length - 1

        this.props.setWeapon(type, name, level)
    }
    setName() {
        let type = this.props.type
        let name = (this.refs['name'] as HTMLSelectElement).value
        let level = weaponData[type][name].length - 1

        this.props.setWeapon(type, name, level)
    }
    setLevel() {
        let type = this.props.type
        let name = this.props.name
        let level = +(this.refs['level'] as HTMLSelectElement).value

        this.props.setWeapon(type, name, level)
    }
    render() {
        return <div className="Weapon">
            <select ref='type' value={this.props.type} onChange={this.setType.bind(this) }>
                <option value="lightbowgun">ライト</option>
                <option value="heavybowgun">ヘビィ</option>
            </select>
            <select ref='name' value={this.props.name} onChange={this.setName.bind(this) }>
                {Object.keys(weaponData[this.props.type]).map(value =>
                    <option value={value}>{value}</option>
                ) }
            </select>
            <select ref='level' value={this.props.level + ''} onChange={this.setLevel.bind(this) }>
                {weaponData[this.props.type][this.props.name].map((value, i) =>
                    <option value={i}>LV{i + 1}</option>
                ) }
            </select>
            <p>
                {weaponData[this.props.type][this.props.name][this.props.level][0]}
                /
                {weaponData[this.props.type][this.props.name][this.props.level][1]}%
            </p>

        </div>
    }
}