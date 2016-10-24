var attackUp = function (skill, val) {
    skill.power += val;
    return skill;
};

var attackMult = function (skill, val) {
    skill.mult *= val;
    return skill;
};

var affinityUp = function (skill, val) {
    skill.affinity += val;
    return skill;
};

var multValue = function (skill, hash) {
    for (var key in hash) {
        if (skill[key]) {
            skill[key] *= hash[key];
        } else {
            skill[key] = hash[key];
        }
    }
    return skill;
};


let skillData: {
    name: string,
    group?: string,
    effect?: (a, b) => void,
    item: { label: string, value: any }[]
}[] = [
        {
            name: 'ロング/パワーバレル',
            effect: multValue,
            item: [
                { label: 'on', value: { parts: 1.05 } }
            ]
        }, {
            name: '【狩技】火薬装填',
            effect: attackMult,
            item: [
                { label: 'on', value: 1.05 }
            ]
        }, {
            name: 'パワーリロード',
            effect: attackMult,
            item: [
                { label: 'on', value: 1.05 }
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
        }, {
            name: '弱点特効',
            effect: multValue,
            item: [
                { label: 'on', value: { '弱点特効': 50 } }
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
                { label: 'on', value: 20 }
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
                { label: 'on', value: 20 }
            ]
        }, {
            name: '死中に活',
            effect: attackUp,
            item: [
                { label: 'on', value: 20 }
            ]
        }, {
            name: '研磨術',
            effect: attackMult,
            item: [
                { label: '（仮）', value: 1.75 / 1.5 }
            ]





        }, {
            name: 'ネコの火事場術',
            group: '火事場',
            effect: attackMult,
            item: [
                { label: 'on', value: 1.35 }
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
                { label: 'on', value: 0.7 }
            ]
        }
    ]

skillData.forEach(value => {
    value.group = value.group || value.name
})
