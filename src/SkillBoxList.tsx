import * as React from 'react';

import {SkillBox} from './SkillBox'
import skillData from './skilldata'

export namespace SkillBoxList {
    export interface Props extends React.Props<SkillBoxList> {
    }
    export interface State {
        activeSkill?: {
            [skillName: string]:  string
        }
    }
}

export class SkillBoxList extends React.Component<SkillBoxList.Props, SkillBoxList.State> {
    constructor() {
        super()

        this.state = {
            activeSkill: {}
        }
    }
    setValue(skillBoxName: string, value: string) {
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
        console.log(this.state.activeSkill);
        
        return (
            <ul className='SkillBoxList'> {skillData.map(data =>
                <li className='SkillBoxList-li'>
                    <SkillBox key={data.name}
                        name={data.name}
                        value={this.state.activeSkill[data.group] || null}
                        action={this.setValue.bind(this, data.group) }
                        skillButtonList={data.item}
                        />
                </li>
            )} </ul>
        )
    }
}