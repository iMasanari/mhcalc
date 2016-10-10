import * as React from 'react';

import {SkillBoxList} from './SkillBoxList';
import {Output} from './Output';

export namespace MHCalc {
    export interface Props extends React.Props<MHCalc> {
    }
    export interface State {
        monsterName?: string
        activeSkill?: {
            [skillName: string]: string
        }
    }
}

export class MHCalc extends React.Component<MHCalc.Props, MHCalc.State> {
    constructor() {
        super()

        this.state = {
            activeSkill: {}
        }
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
        return (
            <div className="MHCalc">
                <SkillBoxList activeSkill={this.state.activeSkill} setActiveSkill={this.setActiveSkill.bind(this)} />
                <Output activeSkill={this.state.activeSkill} setActiveSkill={this.setActiveSkill.bind(this)} />
            </div>
        );
    }
}