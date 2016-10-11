import * as React from 'react';

import {SkillBoxList} from './SkillBoxList';
import {Output} from './Output';
import {Weapon} from './Weapon';

export namespace MHCalc {
    export interface Props extends React.Props<MHCalc> {
    }
    export interface State {
        weapon?: {
            type: string
            name: string
            level: number
        }
        activeSkill?: {
            [skillName: string]: string
        }
    }
}

export class MHCalc extends React.Component<MHCalc.Props, MHCalc.State> {
    constructor() {
        super()

        this.state = {
            weapon: {
                type: 'heavybowgun',
                name: 'ベルダーキャノン',
                level: 7
            },
            activeSkill: {}
        }
    }
    setWeapon(type: string, name: string, level: number) {
        this.setState({
            weapon: { type, name, level }
        })
    }
    setActiveSkill(skillBoxName: string, value: string) {
        let activeSkill = this.state.activeSkill

        if (activeSkill[skillBoxName] === value) {
            delete activeSkill[skillBoxName]
        } else {
            activeSkill[skillBoxName] = value
        }

        this.setState({
            activeSkill: activeSkill
        })
    }

    render() {
        return <div className="MHCalc">
            <div className="input">
                <Weapon
                    type={this.state.weapon.type}
                    name={this.state.weapon.name}
                    level={this.state.weapon.level}
                    setWeapon={this.setWeapon.bind(this) }
                    />
                <SkillBoxList
                    activeSkill={this.state.activeSkill}
                    setActiveSkill={this.setActiveSkill.bind(this) }
                    />
            </div>
            <Output
                activeSkill={this.state.activeSkill}
                setActiveSkill={this.setActiveSkill.bind(this) }
                weapon={this.state.weapon}
                />
        </div>
    }
}
