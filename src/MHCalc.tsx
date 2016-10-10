import * as React from 'react';

import {SkillBoxList} from './SkillBoxList';

export namespace MHCalc {
    export interface Props extends React.Props<MHCalc> {
    }
    export interface State {
        monsterName: string;
    }
}

export class MHCalc extends React.Component<MHCalc.Props, MHCalc.State> {
    render() {
        return (
            <div className="MHCalc">
                <SkillBoxList />
            </div>
        );
    }
}