/// <reference path="SkillBoxList.tsx" />
/// <reference path="SkillRanking.tsx" />
/// <reference path="Weapon.tsx" />

namespace MHCalc {
    export interface Props extends React.Props<MHCalc> {
    }
    export interface State {
        weapon?: WeaponData
        weaponStatas?: string
        activeSkill?: {
            [skillGroup: string]: string
        }
    }
}

class MHCalc extends React.Component<MHCalc.Props, MHCalc.State> {
    constructor() {
        super()

        this.state = {
            weapon: {
                type: 'lightbowgun',
                name: 'ベルダーバレット',
                level: 8
            },
            activeSkill: {}
        }
    }
    setWeapon(weapon: WeaponData) {
        this.setState({ weapon })
    }
    setActiveSkill(skillBoxName: string, value: string) {
        let activeSkill = this.state.activeSkill

        if (activeSkill[skillBoxName] === value) {
            delete activeSkill[skillBoxName]
        } else {
            activeSkill[skillBoxName] = value
        }

        this.setState({ activeSkill })
    }

    render() {
        return <div className="MHCalc">
            <Weapon
                weapon={this.state.weapon}
                setWeapon={this.setWeapon.bind(this)}
                activeSkill={this.state.activeSkill}
                />
            <section>
                <h2>Skill Ranking</h2>
                <div className="skill">
                    <SkillBoxList
                        activeSkill={this.state.activeSkill}
                        setActiveSkill={this.setActiveSkill.bind(this)}
                        />
                    <SkillRanking
                        activeSkill={this.state.activeSkill}
                        setActiveSkill={this.setActiveSkill.bind(this)}
                        weapon={this.state.weapon}
                        />
                </div>
            </section>
        </div>
    }
}
