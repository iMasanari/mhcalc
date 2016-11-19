/// <reference path="SkillBoxList.tsx" />
/// <reference path="SkillRanking.tsx" />
/// <reference path="Weapon.tsx" />

namespace MHCalc {
    export interface Props extends React.ClassAttributes<MHCalc> {
    }
    export interface State {
        weapon: WeaponData
        activeSkill: { [skillGroup: string]: string }
    }
}

class MHCalc extends React.Component<MHCalc.Props, MHCalc.State> {
    state: MHCalc.State = {
        weapon: {
            type: 'lightbowgun',
            power: 0,
            affinity: 0
        },
        activeSkill: {}
    }

    setWeapon = (weapon: WeaponData) => {
        this.setState({ weapon } as MHCalc.State)
    }
    setActiveSkill = (skillGroup: string, skillName: string) => {
        let activeSkill = this.state.activeSkill

        if (activeSkill[skillGroup] === skillName) {
            delete activeSkill[skillGroup]
        } else {
            activeSkill[skillGroup] = skillName
        }

        this.setState({ activeSkill } as MHCalc.State)
    }

    render() {
        return <div className="MHCalc">
            <Weapon
                weapon={this.state.weapon}
                setWeapon={this.setWeapon}
                activeSkill={this.state.activeSkill}
                />
            <section>
                <h2>Skill Ranking</h2>
                <div className="skill">
                    <SkillBoxList
                        activeSkill={this.state.activeSkill}
                        setActiveSkill={this.setActiveSkill}
                        />
                    <SkillRanking
                        activeSkill={this.state.activeSkill}
                        setActiveSkill={this.setActiveSkill}
                        weapon={this.state.weapon}
                        />
                </div>
            </section>
        </div>
    }
}
