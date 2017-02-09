import * as React from 'react'
import SkillBoxList from './SkillBoxList'
import SkillRanking from './SkillRanking'
import Weapon from './Weapon'
import * as initValue from './initValue'
import { WeaponData, getWeapon } from './weaponData'

interface Props extends React.ClassAttributes<MHCalc> {
}

interface State {
    weapon: WeaponData
    activeSkill: { [skillGroup: string]: string }
}

export default class MHCalc extends React.Component<Props, State> {
    state: State = {
        weapon: {
            ...getWeapon(initValue.type, initValue.name),
            type: initValue.type
        },
        activeSkill: {}
    }

    setWeapon = (weapon: WeaponData) => {
        this.setState({ weapon })
    }
    setActiveSkill = (skillGroup: string, skillName: string) => {
        let activeSkill = this.state.activeSkill

        if (activeSkill[skillGroup] === skillName) {
            delete activeSkill[skillGroup]
        } else {
            activeSkill[skillGroup] = skillName
        }

        this.setState({ activeSkill })
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
