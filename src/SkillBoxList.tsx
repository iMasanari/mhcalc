import * as React from 'react';

import {SkillBox} from './SkillBox'
import skillData from './skilldata'

export namespace SkillBoxList {
    export interface Props extends React.Props<SkillBoxList> {
        activeSkill: { [skillName: string]: string }
        setActiveSkill: () => void
    }
    export interface State {
    }
}

export class SkillBoxList extends React.Component<SkillBoxList.Props, SkillBoxList.State> {
    render() {
        return (
            <ul className='SkillBoxList'> {skillData.map(data =>
                <li className='SkillBoxList-li'>
                    <SkillBox key={data.name}
                        name={data.name}
                        value={this.props.activeSkill[data.group] || null}
                        action={this.props.setActiveSkill.bind(null, data.group) }
                        skillButtonList={data.item}
                        />
                </li>
            ) } </ul>
        )
    }
}