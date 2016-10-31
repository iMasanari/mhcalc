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

        this.changeType = this.changeType.bind(this)
        this.changeName = this.changeName.bind(this)
        this.changeLevel = this.changeLevel.bind(this)

        this.changePower = this.changePower.bind(this)
        this.changeAffinity = this.changeAffinity.bind(this)
    }
    toggleLastName() {
        this.setState({ isLastName: !this.state.isLastName })
    }
    changeType(e: React.FormEvent<HTMLSelectElement>) {
        const type = e.currentTarget.value as any
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
    changeName(e: React.FormEvent<HTMLSelectElement>) {
        const type = this.props.weapon.type
        const name = e.currentTarget.value
        const level = getWeaponLevelList(type, name).length
        const [power, affinity] = getWeapon(type, name, level)

        this.setState({
            name, level,
            powerText: null,
            affinityText: null
        })
        this.props.setWeapon({ type, power, affinity })
    }
    changeLevel(e: React.FormEvent<HTMLSelectElement>) {
        const type = this.props.weapon.type
        const name = this.state.name
        const level = +e.currentTarget.value
        const [power, affinity] = getWeapon(type, name, level)

        this.setState({
            level,
            powerText: null,
            affinityText: null
        })
        this.props.setWeapon({ type, power, affinity })
    }
    changePower(e: React.FormEvent<HTMLInputElement>) {
        this.setPower(e.currentTarget.value, (this.refs['affinity'] as HTMLInputElement).value)
    }
    changeAffinity(e: React.FormEvent<HTMLInputElement>) {
        this.setPower((this.refs['power'] as HTMLInputElement).value, e.currentTarget.value)
    }
    setPower(powerText: string, affinityText: string) {
        let name = '（カスタマイズ）'
        let level = 1

        loop: for (const wepName of getWeaponList(this.props.weapon.type)) {
            const levelList = getWeaponLevelList(this.props.weapon.type, wepName)

            for (let i = levelList.length; i--;) {
                const weapon = levelList[i]
                if (weapon[0] !== +powerText || weapon[1] !== +affinityText) continue

                name = wepName
                level = i + 1

                break loop
            }
        }

        this.setState({ name, level, powerText, affinityText })

        // 計算を遅らせる
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
        if (this.props.weapon.power == null) return null

        const activeSkillList = skillNameList.filter(item => this.props.activeSkill[item.group] === item.name)
        const power = calc(this.props.weapon, activeSkillList)

        return <section className="Weapon">
            <h2>Choose a Weapon</h2>
            <select className="weapon-type" value={this.props.weapon.type} onChange={this.changeType}>
                <option value="lightbowgun">ライト</option>
                <option value="heavybowgun">ヘビィ</option>
            </select>
            <select className="weapon-name" value={this.state.name} onChange={this.changeName}>
                {getWeaponList(this.props.weapon.type).map(value =>
                    <option value={value}>
                        {this.state.isLastName ? getWeaponLastName(this.props.weapon.type, value) : value}
                    </option>
                )}
            </select>
            <select className="weapon-level" value={this.state.level + ''} onChange={this.changeLevel}>
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
                    onChange={this.changePower} />
                /
                <input ref="affinity" type="number" pattern="-?[0-9]*" placeholder="0" step="10" max="100" min="-100"
                    value={this.state.affinityText !== null ? this.state.affinityText : this.props.weapon.affinity}
                    onChange={this.changeAffinity} />
                %
                <br />
                {`=> ${power | 0}`}
            </p>
        </section>
    }
}