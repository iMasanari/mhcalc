interface SkillData {
    name: string,
    group: string,
    effect: (a, b) => void,
    item: SkillData.item[]
}

namespace SkillData {
    export interface item {
        name: string,
        label: string,
        value: any
    }
}

const attackUp = function (skill, val) {
    skill.power += val;
    return skill;
};

const attackMult = function (skill, val) {
    skill.mult *= val;
    return skill;
};

const affinityUp = function (skill, val) {
    skill.affinity += val;
    return skill;
};

const multValue = function (skill, hash) {
    for (var key in hash) {
        if (skill[key]) {
            skill[key] *= hash[key];
        } else {
            skill[key] = hash[key];
        }
    }
    return skill;
};

let _skillList = [{
    name: 'ロング/パワーバレル',
    effect: multValue,
    item: [
        { value: { parts: 1.05 } }
    ]
}, {
    name: '【狩技】火薬装填',
    effect: attackMult,
    item: [
        { value: 1.05 }
    ]
}, {
    name: 'パワーリロード',
    effect: attackMult,
    item: [
        { value: 1.05 }
    ]
}, {
    name: '攻撃力UP',
    group: '攻撃力UP',
    effect: attackUp,
    item: [
        { label: '【小】', value: 10 },
        { label: '【中】', value: 15 },
        { label: '【大】', value: 20 }
    ]
}, {
    name: '見切り',
    group: '見切り',
    effect: affinityUp,
    item: [
        { label: '+1', value: 10 },
        { label: '+2', value: 20 },
        { label: '+3', value: 30 }
    ]
    // }, {
    //     name: '弱点特効',
    //     effect: multValue,
    //     item: [
    //         { value: { '弱点特効': 50 } }
    //     ]
}, {
    name: '弱点特効',
    effect: affinityUp,
    item: [
        { value: 50 }
    ]
}, {
    name: '力の解放',
    group: '腕が光るスキル',
    effect: affinityUp,
    item: [
        { label: '+1', value: 30 },
        { label: '+2', value: 50 }
    ]
}, {
    name: '挑戦者',
    group: '腕が光るスキル',
    effect: function (skill, val) {
        attackUp(skill, val[0])
        affinityUp(skill, val[1])

        return skill
    },
    item: [
        { label: '+1', value: [10, 10] },
        { label: '+2', value: [25, 15] }
    ]
}, {
    name: 'フルチャージ',
    group: '腕が光るスキル',
    effect: attackUp,
    item: [
        { value: 20 }
    ]
}, {
    name: '火事場',
    group: '火事場',
    effect: attackMult,
    item: [
        { label: '+2', value: 1.3 }
    ]
}, {
    name: '不屈',
    effect: attackMult,
    item: [
        { label: '1乙', value: 1.1 },
        { label: '2乙', value: 1.2 }
    ]
}, {
    name: '逆恨み',
    effect: attackUp,
    item: [
        { value: 20 }
    ]
}, {
    name: '死中に活',
    effect: attackUp,
    item: [
        { value: 20 }
    ]
}, {
    name: '研磨術',
    effect: attackMult,
    item: [
        { label: '（仮）', value: 1.75 / 1.5 }
    ]
}, {
    name: '弾強化（通常 貫通 重撃）',
    group: '弾強化',
    effect: attackMult,
    item: [
        { value: 1.1 }
    ]
}, {
    name: '弾強化（散弾）',
    group: '弾強化',
    effect: attackMult,
    item: [
        { value: 1.2 }
    ]
    // }, {
    //     name: '通常弾・連射矢UP',
    //     effect: attackMult,
    //     item: [
    //         { value: 1.1 }
    //     ]
    // }, {
    //     name: '貫通弾・貫通矢UP',
    //     effect: attackMult,
    //     item: [
    //         { value: 1.1 }
    //     ]
    // }, {
    //     name: '散弾・拡散矢UP',
    //     effect: attackMult,
    //     item: [
    //         { value: 1.2 }
    //     ]
    // }, {
    //     name: '重撃弾・重矢UP',
    //     effect: attackMult,
    //     item: [
    //         { value: 1.1 }
    //     ]
}, {
    name: '変則射撃',
    effect: attackMult,
    item: [
        { value: 1.2 }
    ]
}, {
    name: 'ネコの射撃術',
    effect: attackMult,
    item: [
        { value: 1.1 }
    ]
}, {
    name: 'ネコの暴れ撃ち',
    effect: attackMult,
    item: [
        { value: 1.05 }
    ]
}, {
    name: 'ネコの火事場術',
    group: '火事場',
    effect: attackMult,
    item: [
        { value: 1.35 }
    ]
}, {
    name: 'ネコの短期催眠術',
    effect: attackUp,
    item: [
        { value: 3 }
    ]
}, {
    name: '力の護符',
    effect: attackUp,
    item: [
        { label: '所持', value: 6 }
    ]
}, {
    name: '力の爪',
    effect: attackUp,
    item: [
        { label: '所持', value: 9 }
    ]
}, {
    name: '食事',
    effect: attackUp,
    item: [
        { label: '【小】', value: 3 },
        { label: '【中】', value: 5 },
        { label: '【大】', value: 7 }
    ]
}, {
    name: '鬼人薬',
    effect: attackUp,
    item: [
        { name: '鬼人薬', label: '薬', value: 3 },
        { label: 'G', value: 7 }
    ]
}, {
    name: 'ネコの休憩術',
    group: '怪力の種',
    effect: attackUp,
    item: [
        { value: 15 }
    ]
}, {
    name: '怪力の種',
    group: '怪力の種',
    effect: attackUp,
    item: [
        { name: '怪力の種（広域1）', label: '広域1', value: 5 },
        { name: '怪力の種', label: '種', value: 10 },
        { name: '怪力の丸薬', label: '丸薬', value: 25 },
    ]
}, {
    name: '北風/南風の狩人',
    effect: attackUp,
    item: [
        { value: 15 }
    ]
}, {
    name: '北風の狩人（クーラー）',
    effect: attackUp,
    item: [
        { value: 5 }
    ]
}, {
    name: '狂竜症',
    effect: affinityUp,
    item: [
        { value: 15 }
    ]
}, {
    name: '連撃の心得',
    effect: affinityUp,
    item: [
        { label: '2hit~', value: 25 },
        { label: '6hit', value: 30 }
    ]
}, {
    name: '超会心',
    effect: multValue,
    item: [
        { value: { superAffinity: 1.4 } }
    ]
}, {
    name: '【狩猟笛】攻撃',
    effect: attackMult,
    item: [
        { label: '小', value: 1.1 },
        { label: '大/小2', value: 1.15 },
        { label: '大2', value: 1.2 }
    ]


}, {
    name: '攻撃力DOWN',
    group: '攻撃力UP',
    effect: attackUp,
    item: [
        { label: '【小】', value: -5 },
        { label: '【中】', value: -10 },
        { label: '【大】', value: -15 }
    ]
}, {
    name: '見切り',
    group: '見切り',
    effect: affinityUp,
    item: [
        { label: '-1', value: -5 },
        { label: '-2', value: -10 },
        { label: '-3', value: -15 }
    ]
}, {
    name: '心配性',
    group: '火事場',
    effect: attackMult,
    item: [
        { value: 0.7 }
    ]
}] as {
    name: string,
    group?: string,
    effect: (a, b) => void,
    item: {
        name?: string,
        label?: string,
        value: any
    }[]
}[]

const skillNameList = [] as {
    name: string
    group: string
    value: any
    effect: (a, b) => void
}[]

for (const skill of _skillList) {
    skill.group = skill.group || skill.name

    for (const item of skill.item) {
        item.name = item.name || skill.name + (item.label || '')
        item.label = item.label || 'on'

        skillNameList.push({
            name: item.name,
            group: skill.group,
            value: item.value,
            effect: skill.effect
        })
    }
}

const skillList = _skillList as SkillData[]
