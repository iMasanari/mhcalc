/// <reference path="SkillBox.tsx" />
/// <reference path="skillData.ts" />

namespace SkillBoxList {
    export interface Props extends React.ClassAttributes<null> {
        activeSkill: { [skillGroup: string]: string }
        setActiveSkill: (skillGroup: string, skillName: string) => void
    }
}

const SkillBoxList = (props: SkillBoxList.Props) =>
    <ul className='SkillBoxList'>
        {skillList.map(skill =>
            <li className='SkillBoxList-li'>
                <SkillBox key={skill.name}
                    name={skill.name}
                    value={props.activeSkill[skill.group] || null}
                    action={props.setActiveSkill.bind(null, skill.group)}
                    skillButtonList={skill.item}
                    />
            </li>
        )}
    </ul>
