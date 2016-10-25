/// <reference path="SkillBox.tsx" />
/// <reference path="skillData.ts" />

namespace SkillBoxList {
    export interface Props extends React.Props<SkillBoxList> {
        activeSkill: { [skillName: string]: string }
        setActiveSkill: () => void
    }
    export interface State {
    }
}

class SkillBoxList extends React.Component<SkillBoxList.Props, SkillBoxList.State> {
    render() {
        return <ul className='SkillBoxList'>
            {skillData.map(skill =>
                <li className='SkillBoxList-li'>
                    <SkillBox key={skill.name}
                        name={skill.name}
                        value={this.props.activeSkill[skill.group] || null}
                        action={this.props.setActiveSkill.bind(null, skill.group) }
                        skillButtonList={skill.item}
                        />
                </li>
            )}
        </ul>
    }
}