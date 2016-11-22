/// <reference path="SkillButton.tsx" />
/// <reference path="SkillData.ts" />

namespace SkillBox {
    export interface Props extends React.ClassAttributes<null> {
        name: string
        value: string | null
        action: (skillName: string) => void
        skillButtonList: SkillData.item[]
    }
}

const SkillBox = (props: SkillBox.Props) =>
    <div className="SkillBox">
        <span>{props.name}</span>
        <ul className="SkillBox-ul">
            {props.skillButtonList.map(skillButton =>
                <SkillButton key={skillButton.label}
                    name={skillButton.label}
                    isChecked={props.value == skillButton.name}
                    action={props.action.bind(null, skillButton.name)}
                    />
            )}
        </ul>
    </div>
