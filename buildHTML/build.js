'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var preact = require('preact');
var redux = require('redux');
var preactRedux = _interopDefault(require('preact-redux'));
var render = _interopDefault(require('preact-render-to-string'));
var fs = _interopDefault(require('fs'));
var ejs = _interopDefault(require('ejs'));

var __assign = Object.assign || function (target) {
    for (var source, i = 1; i < arguments.length; i++) {
        source = arguments[i];
        for (var prop in source) {
            if (Object.prototype.hasOwnProperty.call(source, prop)) {
                target[prop] = source[prop];
            }
        }
    }
    return target;
};

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var attackUp = function (skill, value) {
    skill.power += value;
    return skill;
};
var attackMult = function (skill, value) {
    skill.mult *= value;
    return skill;
};
var affinityUp = function (skill, value) {
    skill.affinity += value;
    return skill;
};
var multValue = function (skill, value) {
    for (var key in value) {
        if (!value.hasOwnProperty(key))
            continue;
        if (skill[key]) {
            skill[key] *= value[key];
        }
        else {
            skill[key] = value[key];
        }
    }
    return skill;
};
var skillList = [{
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
        isArmorSkill: true,
        effect: attackUp,
        item: [
            { label: '【小】', value: 10 },
            { label: '【中】', value: 15 },
            { label: '【大】', value: 20 }
        ]
    }, {
        name: '見切り',
        group: '見切り',
        isArmorSkill: true,
        effect: affinityUp,
        item: [
            { label: '+1', value: 10 },
            { label: '+2', value: 20 },
            { label: '+3', value: 30 }
        ]
    }, {
        name: '弱点特効',
        isArmorSkill: true,
        effect: affinityUp,
        item: [
            { value: 50 }
        ]
    }, {
        name: '力の解放',
        group: '腕が光るスキル',
        isArmorSkill: true,
        effect: affinityUp,
        item: [
            { label: '+1', value: 30 },
            { label: '+2', value: 50 }
        ]
    }, {
        name: '挑戦者',
        group: '腕が光るスキル',
        isArmorSkill: true,
        effect: function (skill, _a) {
            var powor = _a[0], affinity = _a[1];
            return attackUp(affinityUp(skill, affinity), powor);
        },
        item: [
            { label: '+1', value: [10, 10] },
            { label: '+2', value: [20, 15] }
        ]
    }, {
        name: 'フルチャージ',
        group: '腕が光るスキル',
        isArmorSkill: true,
        effect: attackUp,
        item: [
            { value: 20 }
        ]
    }, {
        name: '火事場',
        group: '火事場',
        isArmorSkill: true,
        effect: attackMult,
        item: [
            { label: '+2', value: 1.3 }
        ]
    }, {
        name: '不屈',
        isArmorSkill: true,
        effect: attackMult,
        item: [
            { label: '1乙', value: 1.1 },
            { label: '2乙', value: 1.2 }
        ]
    }, {
        name: '逆恨み',
        isArmorSkill: true,
        effect: attackUp,
        item: [
            { value: 20 }
        ]
    }, {
        name: '死中に活',
        isArmorSkill: true,
        effect: attackUp,
        item: [
            { value: 20 }
        ]
    }, {
        name: '北風/南風の狩人',
        isArmorSkill: true,
        effect: attackUp,
        item: [
            { value: 15 }
        ]
    }, {
        name: '研磨術',
        isArmorSkill: true,
        effect: multValue,
        item: [
            { value: { criticalUp: 1 } }
        ]
    }, {
        name: '弾強化（通常 貫通 重撃）',
        group: '弾強化',
        isArmorSkill: true,
        effect: attackMult,
        item: [
            { value: 1.1 }
        ]
    }, {
        name: '弾強化（散弾）',
        group: '弾強化',
        isArmorSkill: true,
        effect: attackMult,
        item: [
            { value: 1.2 }
        ]
    }, {
        name: '変則射撃',
        isArmorSkill: true,
        effect: attackMult,
        item: [
            { value: 1.2 }
        ]
    }, {
        name: '連撃の心得',
        isArmorSkill: true,
        effect: affinityUp,
        item: [
            { label: '2hit~', value: 25 },
            { label: '6hit', value: 30 }
        ]
    }, {
        name: '超会心',
        isArmorSkill: true,
        effect: multValue,
        item: [
            { value: { superAffinity: 1.4 } }
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
        name: 'ネコの休憩術',
        group: '怪力の種',
        effect: attackUp,
        item: [
            { value: 15 }
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
        name: '鬼人薬',
        effect: attackUp,
        item: [
            { name: '鬼人薬', label: '薬', value: 3 },
            { label: 'G', value: 7 }
        ]
    }, {
        name: '怪力の種',
        group: '怪力の種',
        effect: attackUp,
        item: [
            { name: '怪力の種（広域+1）', label: '広域1', value: 5 },
            { name: '怪力の種/鬼人笛/ドキドキノコ', label: '種など', value: 10 },
            { name: '怪力の丸薬', label: '丸薬', value: 25 },
        ]
    }, {
        name: 'クーラードリンク（北風）',
        effect: attackUp,
        item: [
            { value: 5 }
        ]
    }, {
        name: '狂竜症',
        effect: affinityUp,
        item: [
            { label: '克服', value: 15 },
            { name: '狂竜症克服（無我の境地）', label: '無我', value: 30 }
        ]
    }, {
        name: '【狩猟笛】攻撃力',
        effect: attackMult,
        item: [
            { label: '小', value: 1.1 },
            { label: '大/小2', value: 1.15 },
            { label: '大2', value: 1.2 }
        ]
    }, {
        name: '【狩猟笛】会心率',
        effect: affinityUp,
        item: [
            { label: 'UP', value: 10 },
            { label: 'UP2', value: 15 }
        ]
    }, {
        name: '【操虫棍】広域エキス',
        group: '【操虫棍】広域エキス 赤',
        effect: attackUp,
        item: [
            { label: '赤', value: 5 }
        ]
    }, {
        name: '【操虫棍】広域エキス',
        group: '【操虫棍】広域エキス 白',
        effect: affinityUp,
        item: [
            { label: '白', value: 10 }
        ]
    }, {
        name: '【ボウガン】鬼人弾',
        group: '怪力の種',
        effect: function (skill, _a) {
            var powor = _a[0], affinity = _a[1], value = _a[2];
            return attackUp(affinityUp(multValue(skill, value), affinity), powor);
        },
        item: [
            { name: '【ボウガン】鬼人弾/鬼人硬化弾', label: '鬼人', value: [10, 0, { criticalUp: 1 }] },
            { name: '【ボウガン】鬼人会心弾', label: '会心', value: [15, 10, { criticalUp: 1 }] }
        ]
    }, {
        name: '攻撃力DOWN',
        group: '攻撃力UP',
        isArmorSkill: true,
        effect: attackUp,
        item: [
            { label: '【小】', value: -5 },
            { label: '【中】', value: -10 },
            { label: '【大】', value: -15 }
        ]
    }, {
        name: '見切り',
        group: '見切り',
        isArmorSkill: true,
        effect: affinityUp,
        item: [
            { label: '-1', value: -5 },
            { label: '-2', value: -10 },
            { label: '-3', value: -15 }
        ]
    }, {
        name: '心配性',
        group: '火事場',
        isArmorSkill: true,
        effect: attackMult,
        item: [
            { value: 0.7 }
        ]
    }];

var skillNameList = [];
var _loop_1 = function (skill) {
    skill.group = skill.group || skill.name;
    var _loop_2 = function (item) {
        item.name = item.name || skill.name + (item.label || '');
        item.label = item.label || 'on';
        skillNameList.push({
            name: item.name,
            label: item.label,
            group: skill.group,
            isArmorSkill: skill.isArmorSkill || false,
            effect: function (s) { return skill.effect(s, item.value); }
        });
    };
    for (var _i = 0, _a = skill.item; _i < _a.length; _i++) {
        var item = _a[_i];
        _loop_2(item);
    }
};
for (var _i = 0, skillList_1 = skillList; _i < skillList_1.length; _i++) {
    var skill$1 = skillList_1[_i];
    _loop_1(skill$1);
}
var skillNameHash = skillNameList.reduce(function (hash, value) {
    hash[value.name] = value;
    return hash;
}, {});

function mapSkill(activeSkill) {
    var list = Object.keys(activeSkill).filter(function (v) { return activeSkill[v]; });
    var skill = {
        power: 0,
        mult: 1,
        affinity: 0
    };
    return list.reduce(function (mapSkill, group) {
        return skillNameHash[activeSkill[group]].effect(mapSkill);
    }, skill);
}
function getRanking(weapon, skill, isAllSkill) {
    var list = isAllSkill ? skillNameList : skillNameList.filter(function (v) { return v.isArmorSkill; });
    var orgPower = getAttackPower(weapon, skill.value).power;
    return list.map(function (item, index) {
        var isActive = skill.active[item.group] === item.name;
        var skillValue = skill.active[item.group] == null ?
            item.effect(__assign({}, skill.value))
            :
                mapSkill(__assign({}, skill.active, (_a = {}, _a[item.group] = !isActive ? item.name : null, _a)));
        var power = getAttackPower(weapon, skillValue).power;
        var plus;
        var mult;
        if (isActive) {
            plus = (orgPower - power) | 0;
            mult = orgPower / power;
        }
        else {
            plus = (power - orgPower) | 0;
            mult = power / orgPower;
        }
        return {
            name: item.name,
            group: item.group,
            isActive: isActive,
            disappearance: (skill.active[item.group] && !isActive) ? skill.active[item.group] : null,
            plus: plus, mult: mult, index: index
        };
        var _a;
    })
        .sort(function (a, b) { return b.plus - a.plus || b.mult - a.mult || a.index - b.index; })
        .map(function (v, i) { return (v.index = i, v); });
}
function getAttackPower(weapon, skill) {
    var power = weapon.power + skill.power, mult = skill.mult, affinity = Math.min(Math.max(weapon.affinity + skill.affinity, -100), 100), superAffinity = (skill['superAffinity'] || 1.25) - 1;
    if (skill['parts']) {
        power += Math.floor(weapon.power * (skill['parts'] - 1));
    }
    if (skill['criticalUp']) {
        mult *= 1.75 / 1.5;
    }
    return {
        power: power * mult * (1 + affinity / 100 * superAffinity),
        weapon: {
            power: power * mult,
            affinity: affinity,
            type: weapon.type
        }
    };
}

var TOGGLE_SKILL = 'TOGGLE_SKILL';
var toggleSkill = function (name) {
    return ({
        type: TOGGLE_SKILL,
        payload: name
    });
};
var initState = {
    active: {},
    value: {
        power: 0,
        affinity: 0,
        mult: 1
    },
};
var skill = function (state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case TOGGLE_SKILL:
            var _a = skillNameHash[action.payload], name = _a.name, group = _a.group, effect = _a.effect;
            var prevSkillGroupValue = state.active[group];
            var active = __assign({}, state.active, (_b = {}, _b[group] = prevSkillGroupValue !== name ? name : null, _b));
            var value = prevSkillGroupValue == null ? effect(__assign({}, state.value)) : mapSkill(active);
            return __assign({}, state, { active: active,
                value: value });
    }
    return state;
    var _b;
};

var TOGGLE_SKILL_FILTER = 'TOGGLE_SKILL_FILTER';
var toggleSkillFilter = function () {
    return ({ type: TOGGLE_SKILL_FILTER });
};
var initState$1 = {
    skillFilter: false
};
var ranking = function (state, action) {
    if (state === void 0) { state = initState$1; }
    switch (action.type) {
        case TOGGLE_SKILL_FILTER:
            return __assign({}, state, { skillFilter: !state.skillFilter });
    }
    return state;
};

var lightbowgun = [
    ['ベルダーバレット', 'サージュバレット', [
            [80, 0],
            [90, 0],
            [100, 0],
            [110, 0],
            [130, 0],
            [150, 0],
            [190, 0],
            [210, 0],
        ]],
    ['クックアンガ―', 'クックカウンター', [
            [120, 0],
            [130, 0],
            [140, 0],
            [170, 0],
            [190, 0],
            [200, 0],
        ]],
    ['ド【烏】', 'ド【狼】', [
            [150, 5],
            [160, 5],
            [170, 5],
            [190, 5],
            [210, 5],
        ]],
    ['ド【兇】', '黒狼隊のショウド', [
            [190, 30],
            [200, 30],
            [210, 30],
        ]],
    ['テイルストリング', 'テイルカタパルト', [
            [130, 0],
            [160, 0],
            [170, 0],
            [190, 0],
            [200, 0],
        ]],
    ['ロンナークプシカ', 'ロンベルチャカリオ', [
            [170, 0],
            [190, 0],
            [200, 0],
            [210, 0],
        ]],
    ['テイルブリザード', 'テイルアヴァランチ', [
            [170, 10],
            [180, 10],
            [190, 10],
        ]],
    ['ヴァルキリーファイア', 'ヴァルキリーブレイズ', [
            [120, 0],
            [130, 0],
            [140, 0],
            [150, 0],
            [170, 0],
            [200, 0],
            [210, 0],
            [220, 0],
        ]],
    ['繚乱の対弩', '金華朧銀の対弩', [
            [210, 0],
            [220, 0],
            [230, 0],
        ]],
    ['ディオスブラスト', '爆弩コバルトブラスト', [
            [150, 0],
            [170, 0],
            [200, 0],
            [210, 0],
        ]],
    ['爆砕の光弩', '破岩弩バリスタイト', [
            [210, 0],
            [220, 0],
            [230, 0],
        ]],
    ['オブシドバレット', '歴耀弩デボニア', [
            [150, 0],
            [170, 0],
            [200, 0],
            [220, 0],
        ]],
    ['幻獣筒【三ツ角】', '幻獣筒【三界三禍】', [
            [140, 0],
            [160, 0],
            [180, 0],
            [200, 0],
        ]],
    ['飛雷弩', '撃雷弩【麒麟】', [
            [190, 0],
            [200, 0],
            [210, 0],
        ]],
    ['ハンターライフル', 'スナイプシューター', [
            [70, 0],
            [80, 0],
            [110, 0],
            [120, 0],
            [140, 0],
            [170, 0],
            [200, 0],
            [200, 0],
        ]],
    ['フルットシリンジ', 'フルーミィシリンジ', [
            [120, 0],
            [140, 0],
            [160, 0],
            [200, 0],
            [210, 0],
        ]],
    ['クゥイルバースト', 'キングルバースト', [
            [100, 0],
            [110, 0],
            [150, 0],
            [170, 0],
            [200, 0],
            [210, 0],
        ]],
    ['ショットボウガン・白', 'バレットシャワー・白', [
            [90, 10],
            [110, 10],
            [120, 10],
            [150, 10],
            [160, 10],
            [200, 10],
        ]],
    ['ショットボウガン・蛇', 'バレットシャワー・蛇', [
            [130, 0],
            [150, 0],
            [180, 0],
            [200, 0],
        ]],
    ['ショットボウガン・蒼', 'バレットシャワー・蒼', [
            [160, 20],
            [180, 20],
            [190, 20],
            [200, 20],
        ]],
    ['ショットボウガン・碧', 'バレットシャワー・碧', [
            [170, 0],
            [200, 0],
            [210, 0],
        ]],
    ['ショットボウガン・紅', 'バレットシャワー・紅', [
            [190, 0],
            [200, 0],
            [210, 0],
        ]],
    ['ウロコトルネード', '溶岩弩ウログルト', [
            [130, 0],
            [150, 0],
            [180, 0],
            [200, 0],
        ]],
    ['王弩ライカン', '王牙弩【野雷】', [
            [150, 10],
            [170, 10],
            [190, 10],
            [200, 10],
            [220, 10],
        ]],
    ['ラサーサアルシアラ', '叛弩アルシアラ', [
            [150, 10],
            [160, 10],
            [210, 10],
            [220, 10],
        ]],
    ['叛逆の旋弩', '叛逆弩ヴァルレギオン', [
            [220, 20],
            [230, 20],
            [240, 20],
        ]],
    ['ハーイゲヴァー', '口裂けハーイゲヴァー', [
            [190, 0],
            [200, 0],
            [210, 0],
        ]],
    ['ベルクーツ', 'ド級弩アルデバラン', [
            [200, 0],
            [210, 0],
            [220, 0],
        ]],
    ['クロスボウガン', 'クロスブリッツ', [
            [80, 0],
            [90, 0],
            [100, 0],
            [110, 0],
            [130, 0],
            [150, 0],
            [200, 0],
            [220, 0],
        ]],
    ['ストライプシェル', '蟹甲弩ラーバルザザミ', [
            [100, 0],
            [110, 0],
            [140, 0],
            [170, 0],
            [200, 0],
        ]],
    ['エビィーガン', 'キングエビィーガン', [
            [160, 0],
            [200, 0],
            [210, 0],
        ]],
    ['メイルシュトローム', 'ネビュラシュトローム', [
            [210, 0],
            [210, 0],
            [220, 0],
        ]],
    ['ロアルスリング', 'ロアルストリーム', [
            [120, 0],
            [140, 0],
            [150, 0],
            [190, 0],
            [200, 0],
        ]],
    ['ヒドゥンゲイズ', '夜行弩【梟ノ眼】', [
            [120, 40],
            [130, 40],
            [140, 40],
            [150, 40],
            [190, 40],
        ]],
    ['ヤクトバレット', '咬弾チェイサー', [
            [140, 10],
            [150, 10],
            [190, 10],
            [210, 10],
        ]],
    ['レックスタンク', '轟弩【戦虎】', [
            [170, -20],
            [180, -20],
            [200, -20],
            [220, -10],
        ]],
    ['シェルバレット', 'インセクヴァールカン', [
            [170, 0],
            [190, 0],
            [200, 0],
        ]],
    ['機銃ストラフィング', '機銃砲バタルビトリア', [
            [200, 0],
            [210, 0],
            [220, 0],
        ]],
    ['火竜砲', '鳳仙火竜砲', [
            [140, 0],
            [150, 0],
            [170, 0],
            [190, 0],
            [200, 0],
            [210, 0],
        ]],
    ['雷砲サンダークルス', '雷迅砲サンダークルス', [
            [180, 10],
            [190, 10],
            [200, 20],
        ]],
    ['デザートストーム', 'デザートテンペスト', [
            [170, 0],
            [190, 0],
            [210, 0],
        ]],
    ['ラヴァシュトローム', 'ラヴァストーム', [
            [190, 0],
            [200, 0],
            [210, 0],
        ]],
    ['ユクモノ弩', 'ユクモノバレット', [
            [110, 0],
            [120, 0],
            [140, 0],
            [180, 0],
            [200, 0],
        ]],
    ['真ユクモノ弩', 'ユクモ霊弩【弾雨】', [
            [180, 0],
            [200, 0],
            [210, 0],
        ]],
    ['アイルーラグドール', 'アイルーヘルドール', [
            [120, 0],
            [130, 0],
            [140, 0],
            [170, 0],
            [190, 0],
        ]],
    ['メラルーラグドール', 'メラルーヘルドール', [
            [120, 30],
            [130, 30],
            [150, 30],
            [180, 30],
            [190, 30],
        ]],
    ['吹吹茶釜', '吹吹チャガンマン', [
            [160, 0],
            [190, 0],
            [210, 0],
        ]],
    ['クロオビボウガン', 'シハンボウガン', [
            [130, 0],
            [150, 0],
            [190, 0],
            [210, 0],
        ]],
    ['フィオシダーレ', 'ノブレスオーダー', [
            [140, 10],
            [150, 10],
            [180, 15],
            [200, 15],
        ]],
    ['ビートスナイパー', 'ペネトレートビート', [
            [140, 0],
            [160, 0],
            [190, 0],
            [200, 0],
        ]],
    ['春夜鯉砲', '春夜鯉砲【滝登り】', [
            [130, 0],
            [150, 0],
            [180, 0],
            [200, 0],
        ]],
    ['気艦銃', '気艦銃バルヘリス', [
            [140, 0],
            [150, 0],
            [180, 0],
            [200, 0],
        ]],
    ['ビューベル', '高原のフリューベル', [
            [100, 10],
            [120, 10],
            [150, 10],
            [160, 10],
        ]],
    ['エルドラマスケット', '亡国の宝銃バイジン', [
            [130, 10],
            [150, 15],
            [190, 20],
            [210, 30],
        ]],
    ['狐水銃シズクトキユル', 'あまとぶや軽弩の水珠', [
            [150, 0],
            [170, 0],
            [200, 0],
            [210, 0],
        ]],
    ['電竜弩', 'サージ電竜砲', [
            [150, 0],
            [170, 0],
            [200, 0],
            [210, 0],
        ]],
    ['巨獣弩', '巨弾・弩ッ弩ッ弩ッ', [
            [160, 0],
            [180, 0],
            [220, 0],
            [240, 0],
        ]],
    ['灼炎のエンサー', '斬竜弩イクリール', [
            [150, 0],
            [170, 0],
            [210, 0],
            [220, 0],
        ]],
    ['レイofヴァイス', 'レイofインサニティ', [
            [140, 20],
            [150, 20],
            [180, 20],
            [200, 20],
        ]],
    ['THEオラクル', 'THEバニッシャー', [
            [190, 35],
            [200, 35],
            [210, 35],
        ]],
    ['ウラナイランプ', 'マジナイランプ', [
            [140, 30],
            [180, 30],
            [200, 30],
            [210, 30],
        ]],
    ['巨蟹といふ名の白骸', '白骸の怪弩', [
            [160, 0],
            [170, 0],
            [210, 0],
            [220, 0],
        ]],
    ['極星弩グラーグ', '驚嘆ナル弩星グラーグ', [
            [200, 10],
            [210, 10],
            [220, 10],
        ]],
    ['ブラックパラソル', 'クロノパラソル', [
            [150, 0],
            [170, 0],
            [190, 0],
            [200, 0],
        ]],
    ['パールフリルパラソル', 'パールセレブパラソル', [
            [190, 0],
            [200, 0],
            [210, 0],
        ]],
    ['ラージャンデグ', '金獅子筒【万雷】', [
            [210, -15],
            [220, -15],
            [220, -15],
        ]],
    ['鬼神筒', '鬼神筒【雷天】', [
            [220, -25],
            [230, -25],
            [240, -25],
        ]],
    ['イビルマシーン', 'マッドネスグリーフ', [
            [190, -10],
            [200, -10],
            [210, -10],
        ]],
    ['瓢弾', '瓢弾【千成】', [
            [180, 0],
            [190, 0],
            [200, 0],
            [210, 0],
        ]],
    ['業弩ダークデメント', '滅弩ダークデメント', [
            [220, -15],
            [230, -15],
            [240, -15],
        ]],
    ['鋼氷蜂弩', 'ホーネス＝ダオラ', [
            [210, 10],
            [220, 10],
            [230, 10],
        ]],
    ['シルバースパルタカス', '朧銀の連弩', [
            [210, -10],
            [220, -10],
            [230, -10],
        ]],
    ['ゴールドヴァルキリー', '金華の連弩', [
            [200, 0],
            [210, 0],
            [220, 0],
        ]],
    ['崩弩エイヌカムルバス', '崩天弩エイヌオンカム', [
            [240, -30],
            [250, -30],
            [260, -30],
        ]],
    ['凶針【水禍】', '天嵐ノ針【水天一色】', [
            [200, -10],
            [210, -10],
            [220, -10],
        ]],
    ['鬼ヶ島', '大鬼ヶ島', [
            [130, 0],
            [150, 0],
            [160, 0],
            [190, 0],
            [200, 0],
        ]],
    ['神ヶ島', '大神ヶ島【出雲】', [
            [200, 0],
            [210, 0],
            [220, 0],
        ]],
    ['レギーナファイア', 'レギーナフレイムロゼ', [
            [120, 0],
            [130, 0],
            [140, 0],
            [170, 0],
            [180, 0],
            [190, 0],
            [200, 0],
            [210, 0],
            [220, 0],
            [220, 0],
        ]],
    ['ラファガゲイズ', '黎明弩【鷹ノ眼】', [
            [160, 30],
            [160, 40],
            [170, 30],
            [170, 40],
            [180, 30],
            [180, 40],
            [190, 30],
            [190, 40],
            [200, 30],
            [200, 40],
        ]],
    ['ド【禍】', '隻眼隊のショウド', [
            [170, 20],
            [170, 30],
            [180, 20],
            [180, 30],
            [190, 20],
            [190, 30],
            [200, 20],
            [200, 30],
            [210, 20],
            [210, 30],
        ]],
    ['黒炎竜砲', '慟黒炎竜砲', [
            [180, 0],
            [180, 0],
            [190, 0],
            [190, 0],
            [200, 0],
            [200, 0],
            [210, 0],
            [210, 0],
            [220, 0],
            [220, 0],
        ]],
    ['金狼弩ライカン', '金狼牙弩【野雷】', [
            [180, 10],
            [190, 5],
            [190, 10],
            [200, 5],
            [210, 5],
            [210, 10],
            [220, 5],
            [220, 10],
            [230, 5],
            [230, 10],
        ]],
    ['ルドラゾフル', '鉤爪弩【荒虎掌】', [
            [190, -20],
            [190, -10],
            [200, -20],
            [200, -10],
            [210, -20],
            [210, -10],
            [220, -20],
            [220, -10],
            [230, -20],
            [230, -10],
        ]],
    ['爆焔のエンサー', '燼滅弩イクリール', [
            [170, 0],
            [180, 0],
            [190, 0],
            [200, 0],
            [200, 0],
            [210, 0],
            [210, 0],
            [220, 0],
            [220, 0],
            [230, 0],
        ]],
    ['アームキャノン', 'アームキャノンX', [
            [190, 0],
            [200, 0],
            [210, 0],
        ]]
];

var heavybowgun = [
    ['ベルダーキャノン', 'サージュキャノン', [
            [80, 0],
            [90, 0],
            [100, 0],
            [110, 0],
            [120, 0],
            [160, 0],
            [180, 0],
            [200, 0],
        ]],
    ['ガウプシカ', 'ヘビィガウプシカ', [
            [100, 0],
            [110, 0],
            [130, 0],
            [160, 0],
            [190, 0],
        ]],
    ['キャロムボール', '転弩エイトボール', [
            [130, 0],
            [150, 0],
            [180, 0],
            [200, 0],
        ]],
    ['アグナブロウ', '炎戈銃ブレイズヘル', [
            [200, 5],
            [210, 5],
            [220, 5],
        ]],
    ['サンドダイバー', 'デザートダイバー', [
            [90, 0],
            [100, 0],
            [120, 0],
            [150, 0],
            [180, 0],
            [190, 0],
        ]],
    ['ガノスプレッシャー', 'ガノバッシャーガン', [
            [180, 5],
            [190, 5],
            [210, 5],
        ]],
    ['ラピッドキャスト', 'ハイサイクルキャスト', [
            [150, 0],
            [180, 0],
            [190, 0],
        ]],
    ['バスタークラブ', 'ヘビィバスタークラブ', [
            [110, 0],
            [130, 0],
            [160, 0],
            [190, 0],
            [200, 0],
        ]],
    ['スレイペンギーゴ', 'スレイペンギング', [
            [110, 0],
            [120, 0],
            [140, 0],
            [180, 0],
            [200, 0],
        ]],
    ['ヒドゥンスナイパー', '夜砲【黒鳳】', [
            [110, 20],
            [120, 20],
            [150, 30],
            [180, 30],
            [190, 30],
        ]],
    ['ピアースクラブ', 'ウチヌキ', [
            [190, 0],
            [200, 0],
            [210, 0],
        ]],
    ['オブシドキャノン', '歴耀砲カボニフェル', [
            [140, 10],
            [180, 10],
            [190, 10],
            [210, 10],
        ]],
    ['チャージグリフサルト', '徹甲砲アルセルタス', [
            [160, 0],
            [200, 0],
            [220, 0],
        ]],
    ['妃竜砲【遠撃】', '妃竜砲【飛撃】', [
            [180, 0],
            [190, 0],
            [210, 0],
        ]],
    ['アルバレスト', 'S・アルバレスト', [
            [90, 0],
            [100, 0],
            [110, 0],
            [120, 0],
            [130, 0],
            [140, 0],
            [170, 0],
            [190, 0],
        ]],
    ['インジェクションガン', 'ゼクトインジェクト', [
            [100, 0],
            [110, 0],
            [130, 0],
            [170, 0],
            [190, 0],
        ]],
    ['ラストニードル', 'ハニーコーマー', [
            [150, 0],
            [170, 0],
            [180, 0],
        ]],
    ['メテオバズーカ', 'メテオフォール', [
            [100, 0],
            [110, 0],
            [120, 0],
            [150, 0],
            [190, 0],
        ]],
    ['バイトブラスター', 'バイティングブラスト', [
            [130, 0],
            [150, 0],
            [180, 0],
            [200, 0],
        ]],
    ['サイドアルシャマリ', '叛砲アルシャマリ', [
            [150, 10],
            [160, 10],
            [200, 10],
            [210, 10],
        ]],
    ['叛逆の怒砲', '叛逆砲イーラレギオン', [
            [210, 10],
            [220, 10],
            [230, 10],
        ]],
    ['討伐隊正式重砲', '近衛隊正式重砲', [
            [150, 0],
            [190, 0],
            [210, 0],
        ]],
    ['メテオバスター', 'メテオフォール', [
            [180, 0],
            [190, 0],
            [210, 0],
        ]],
    ['イャンクック砲', 'イャンクック大砲', [
            [120, 0],
            [140, 0],
            [150, 0],
            [180, 0],
            [200, 0],
        ]],
    ['カホウ【烏】', 'カホウ【狼】', [
            [140, 0],
            [160, 0],
            [200, 0],
            [210, 0],
        ]],
    ['バイナクルラ', '眠砲公爵コシュマル', [
            [120, 5],
            [130, 5],
            [170, 5],
            [190, 5],
        ]],
    ['タンクメイジ', 'タンクソーサラー', [
            [110, 0],
            [120, 0],
            [140, 0],
            [180, 0],
            [200, 0],
        ]],
    ['アイススロワー', 'エンバースロワー', [
            [120, 0],
            [140, 0],
            [180, 0],
            [200, 0],
        ]],
    ['クイックキャスト', 'クイックシャフト', [
            [170, 0],
            [180, 0],
            [190, 0],
        ]],
    ['レックスハウル', '轟砲【虎頭】', [
            [150, -10],
            [190, -10],
            [230, -10],
        ]],
    ['ボーンシューター', 'ボーンバスター', [
            [70, 0],
            [80, 0],
            [90, 0],
            [100, 0],
            [120, 0],
            [150, 0],
            [170, 0],
            [180, 0],
        ]],
    ['リノマリーノ', 'ディープリノマリーノ', [
            [80, 0],
            [100, 0],
            [140, 0],
            [180, 0],
            [200, 0],
        ]],
    ['青熊筒', '青熊筒【川漁】', [
            [160, 0],
            [190, 0],
            [200, 0],
        ]],
    ['荒縄鼓砲', '荒縄鼓砲【調緒】', [
            [160, 0],
            [190, 0],
            [200, 0],
        ]],
    ['モンテベルデ', '山穿ジガンラケーテ', [
            [210, 0],
            [220, 0],
            [230, 0],
        ]],
    ['46式潜伏重砲', '潜砲ハープール', [
            [110, 0],
            [120, 0],
            [140, 0],
            [180, 0],
            [200, 0],
        ]],
    ['ラギアブリッツ', '雷砲ラギアブリッツ', [
            [150, 0],
            [160, 0],
            [200, 0],
            [210, 0],
        ]],
    ['王砲ライド', '王牙砲【山雷】', [
            [150, 10],
            [190, 10],
            [210, 10],
        ]],
    ['ディオスキャノン', '爆砲アトミキャノン', [
            [150, 0],
            [200, 0],
            [210, 0],
        ]],
    ['爆砕の重砲', '破岩大砲シュライアー', [
            [210, 0],
            [220, 0],
            [230, 0],
        ]],
    ['ユクモノ重弩', 'ユクモノキャノン', [
            [100, 0],
            [110, 0],
            [130, 0],
            [170, 0],
            [190, 0],
        ]],
    ['真ユクモノ重弩', 'ユクモ連山重弩', [
            [140, 0],
            [150, 0],
            [200, 0],
            [210, 0],
        ]],
    ['ムーファイア', '霊砲ムーフレイム', [
            [110, 0],
            [120, 0],
            [130, 0],
            [170, 0],
            [190, 0],
        ]],
    ['炎妃龍の石重弩', '炎妃ガルグイユの叫喚', [
            [130, -30],
            [150, -30],
            [210, -30],
            [230, -30],
        ]],
    ['アイルー大砲', 'ネコ獣砲ニャノン', [
            [110, 0],
            [130, 0],
            [160, 0],
            [190, 0],
            [200, 0],
        ]],
    ['狐重砲ハライニケリナ', 'あしひきの山砲の御車', [
            [150, 0],
            [160, 0],
            [200, 0],
            [220, 0],
        ]],
    ['電竜砲【進撃】', '電竜砲【雷撃】', [
            [150, 10],
            [160, 10],
            [200, 10],
            [220, 10],
        ]],
    ['巨獣砲', '巨撃・爆砲ォー遠', [
            [160, -10],
            [180, -10],
            [230, -10],
            [240, -10],
        ]],
    ['灼炎のイグナー', '斬竜砲エクリプス', [
            [160, 0],
            [170, 0],
            [210, 0],
            [230, 0],
        ]],
    ['トリガーofハザード', 'トリガーofデマイズ', [
            [150, 20],
            [190, 20],
            [210, 20],
        ]],
    ['THEディザスター', 'THEフェイス', [
            [200, 30],
            [210, 30],
            [220, 30],
        ]],
    ['デルフ＝ダオラ', 'グラン＝ダオラ', [
            [150, 10],
            [160, 10],
            [210, 10],
            [230, 10],
        ]],
    ['天秤といふ名の白骸', '白骸の罪砲', [
            [160, 0],
            [200, 0],
            [210, 0],
            [220, 0],
        ]],
    ['極星砲ヴィズィ', '悲哀ナル砲星ヴィズィ', [
            [180, 10],
            [190, 10],
            [200, 15],
        ]],
    ['海造砲【火刃】', '海造砲【炎刃】', [
            [150, 0],
            [190, 0],
            [210, 0],
        ]],
    ['ブラックキャノン', 'クロノキャノン', [
            [140, 0],
            [150, 0],
            [200, 0],
            [210, 0],
        ]],
    ['ズッカカロッツァ', 'サンドリヨン', [
            [150, 0],
            [190, 0],
            [200, 0],
        ]],
    ['ブルームスター', 'ミーティア', [
            [180, 0],
            [190, 0],
            [200, 0],
        ]],
    ['ナナホシ大砲', 'ナナホシ天砲', [
            [180, 0],
            [190, 0],
            [200, 0],
        ]],
    ['暴食の重弩', 'アンフィニグラ', [
            [200, -10],
            [210, -10],
            [220, -10],
        ]],
    ['業重弩ファミン', '滅重弩ガジンファミン', [
            [220, -15],
            [230, -15],
            [240, -15],
        ]],
    ['ヒーローブラスター', 'マスターブラスター', [
            [160, 40],
            [180, 40],
            [190, 40],
        ]],
    ['カーマエレオーン', 'カーマヒトバーレ', [
            [210, 0],
            [220, 0],
            [230, 0],
        ]],
    ['テオ＝アーティレリ', 'テオ＝フランマルス', [
            [210, 5],
            [220, 5],
            [230, 5],
        ]],
    ['覇砲ユプカムトルム', '覇轟砲クーネユプカム', [
            [210, 40],
            [210, 40],
            [220, 40],
        ]],
    ['崩砲バセカムルバス', '崩天砲パセカオンカム', [
            [240, -30],
            [250, -30],
            [260, -30],
        ]],
    ['凶刻【時雨】', '天嵐ノ刻【刻露清秀】', [
            [210, -5],
            [220, -5],
            [230, -5],
        ]],
    ['カオスウイング', '神滅弩アル・エリア', [
            [210, 10],
            [220, 10],
            [230, 10],
        ]],
    ['紅熊轟筒', '紅熊大轟筒【怪腕】', [
            [90, 0],
            [100, 0],
            [110, 0],
            [130, 0],
            [140, 0],
            [170, 0],
            [180, 0],
            [190, 0],
            [200, 0],
            [210, 0],
        ]],
    ['エオストペンギーゴ', 'エオストペングルス', [
            [90, 0],
            [100, 0],
            [110, 0],
            [130, 0],
            [140, 0],
            [170, 0],
            [180, 0],
            [190, 0],
            [200, 0],
            [210, 0],
        ]],
    ['ウィルガバスター', '黒甲ウィルガバスター', [
            [90, 0],
            [100, 0],
            [110, 0],
            [130, 0],
            [140, 0],
            [170, 0],
            [180, 0],
            [190, 0],
            [200, 0],
            [210, 0],
        ]],
    ['紫毒姫竜砲', '紫毒姫竜砲【華撃】', [
            [90, 0],
            [100, 0],
            [110, 0],
            [130, 0],
            [140, 0],
            [160, 0],
            [170, 0],
            [180, 0],
            [190, 0],
            [200, 0],
        ]],
    ['黒縄鬼砲', '黒縄鬼砲【注連】', [
            [120, 0],
            [130, 0],
            [140, 0],
            [150, 0],
            [190, 0],
            [190, 0],
            [200, 0],
            [200, 0],
            [210, 0],
            [210, 0],
        ]],
    ['ラファガスナイパー', '暁砲【瑞風】', [
            [170, 20],
            [170, 30],
            [180, 20],
            [180, 30],
            [190, 20],
            [190, 30],
            [200, 20],
            [200, 30],
            [210, 20],
            [210, 30],
        ]],
    ['グロボ＝ショット', 'グロボ＝バールゼタ', [
            [180, -20],
            [180, -10],
            [190, -20],
            [190, -10],
            [200, -20],
            [200, -10],
            [210, -20],
            [210, -10],
            [220, -20],
            [220, -10],
        ]],
    ['カホウ【禍】', '隻眼公のカホウ', [
            [160, 0],
            [170, 0],
            [180, 0],
            [190, 0],
            [200, 0],
            [200, 0],
            [210, 0],
            [210, 0],
            [210, 0],
            [210, 0],
        ]],
    ['金狼砲ライド', '金狼牙砲【山雷】', [
            [160, 10],
            [170, 10],
            [180, 10],
            [190, 10],
            [200, 10],
            [200, 20],
            [210, 10],
            [210, 20],
            [220, 10],
            [220, 20],
        ]],
    ['ルドラハウル', '鉤爪砲【荒虎頭】', [
            [180, -20],
            [180, -10],
            [190, -20],
            [190, -10],
            [200, -20],
            [200, -10],
            [210, -20],
            [210, -10],
            [220, -20],
            [220, -10],
        ]],
    ['爆焔のイグナー', '燼滅砲エクリクス', [
            [180, 0],
            [190, 0],
            [200, 0],
            [200, 0],
            [210, 0],
            [210, 0],
            [220, 0],
            [220, 0],
            [230, 0],
            [230, 0],
        ]],
    ['海賊Ｊキャノン', '大海賊Jキャノン', [
            [190, 0],
            [200, 0],
            [210, 0],
        ]]
];

var translate = function (data) {
    return data.reduce(function (hash, _a) {
        var name = _a[0], lastName = _a[1], list = _a[2];
        var last = list.length - 1;
        return list.reduce(function (hash, _a, i) {
            var power = _a[0], affinity = _a[1];
            var isLast = (i === last);
            hash[(isLast ? lastName : name) + " LV" + (i + 1)] = { power: power, affinity: affinity, isLast: isLast };
            return hash;
        }, hash);
    }, {});
};
var weaponsData = {
    lightbowgun: {
        typeMult: 1.3,
        list: translate(lightbowgun)
    },
    heavybowgun: {
        typeMult: 1.48,
        list: translate(heavybowgun)
    }
};
function getWeaponList(type, filter) {
    var ref = weaponsData[type].list;
    var list = Object.keys(ref);
    return filter ? list.filter((filter === true) ? function (v) { return ref[v].isLast; } : function (v) { return filter(ref[v]); }) : list;
}
function getWeapon(type, name) {
    return weaponsData[type].list[name];
}

var SET_WEAPON_TYPE = 'SET_WEAPON_TYPE';
var SET_WEAPON_NAME = 'SET_WEAPON_NAME';
var SET_POWER = 'SET_POWER';
var SET_AFFINITY = 'SET_AFFINITY';
var TOGGLE_LAST_ONLY = 'TOGGLE_LAST_ONLY';
var setWeaponType = function (payload) {
    return ({
        type: SET_WEAPON_TYPE,
        payload: payload,
    });
};
var setWeaponName = function (payload) {
    return ({
        type: SET_WEAPON_NAME,
        payload: payload,
    });
};
var setPower = function (payload) {
    return ({
        type: SET_POWER,
        payload: payload,
    });
};
var setAffinity = function (payload) {
    return ({
        type: SET_AFFINITY,
        payload: payload,
    });
};
var toggleLastOnly = function () {
    return ({
        type: TOGGLE_LAST_ONLY,
    });
};
var initState$2 = {
    type: 'lightbowgun',
    name: 'サージュバレット LV8',
    power: 210,
    affinity: 0,
    isLastOnly: true,
};
var weapon = function (state, action) {
    if (state === void 0) { state = initState$2; }
    switch (action.type) {
        case SET_WEAPON_TYPE:
            return setState(state, action.payload, getWeaponList(action.payload, true)[0]);
        case SET_WEAPON_NAME:
            return setState(state, state.type, action.payload);
        case SET_POWER:
            return __assign({}, state, { name: searchWeapon(state.type, action.payload, state.affinity), power: action.payload });
        case SET_AFFINITY:
            return __assign({}, state, { name: searchWeapon(state.type, state.power, action.payload), affinity: action.payload });
        case TOGGLE_LAST_ONLY:
            var newState = getWeapon(state.type, state.name) ?
                state : setState(state, state.type, getWeaponList(state.type, true)[0]);
            return __assign({}, newState, { isLastOnly: !state.isLastOnly });
    }
    return state;
};
function setState(state, type, name) {
    var _a = getWeapon(type, name), power = _a.power, affinity = _a.affinity;
    return __assign({}, state, { type: type,
        name: name,
        power: power,
        affinity: affinity });
}
function searchWeapon(type, power, affinity) {
    var _loop_1 = function (isLast) {
        for (var _i = 0, _a = getWeaponList(type, function (v) { return v.isLast === isLast; }); _i < _a.length; _i++) {
            var name = _a[_i];
            var weapon = getWeapon(type, name);
            if (weapon.power === power && weapon.affinity === affinity) {
                return { value: name };
            }
        }
    };
    for (var _i = 0, _a = [true, false]; _i < _a.length; _i++) {
        var isLast = _a[_i];
        var state_1 = _loop_1(isLast);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return 'カスタマイズ';
}

var reducer = redux.combineReducers({
    skill: skill,
    ranking: ranking,
    weapon: weapon,
});

var mapStateToProps = function (state, ownProps) {
    var _a = skillNameHash[ownProps.name], label = _a.label, group = _a.group;
    return {
        label: label,
        isActive: (state.skill.active[group] === ownProps.name)
    };
};
var mapDispatchToProps = function (dispatch, ownProps) {
    return ({
        onClick: function () {
            dispatch(toggleSkill(ownProps.name));
        }
    });
};
var SkillButton = preactRedux.connect(mapStateToProps, mapDispatchToProps)(function (props) {
    return preact.h("div", { className: 'SkillButton' + (props.isActive ? ' checked' : ''), onClick: props.onClick }, props.label);
});

var SkillBox = function (props) {
    return preact.h("div", { className: "SkillBox" },
        preact.h("span", null, props.name),
        preact.h("ul", { className: "SkillBox-ul" }, props.items.map(function (item) {
            return preact.h(SkillButton, { key: item, name: item });
        })));
};

var SkillBoxList = function () {
    return preact.h("ul", { className: 'SkillBoxList' }, skillList.map(function (skill) {
        return preact.h("li", { className: 'SkillBoxList-li' },
            preact.h(SkillBox, { key: skill.name, name: skill.name, group: skill.group, items: skill.item.map(function (v) { return v.name; }) }));
    }));
};

var mapStateToProps$2 = function (_state, ownProps) { return ownProps; };
var mapDispatchToProps$2 = function (dispatch, ownProps) {
    return ({
        toggleSkill: function () {
            dispatch(toggleSkill(ownProps.item.name));
        }
    });
};
var TableRow = preactRedux.connect(mapStateToProps$2, mapDispatchToProps$2)(function (props) {
    return preact.h("tr", { className: props.isHide ? 'opacity0' : props.item.isActive ? 'checked' : undefined, style: props.rankUp ? { transform: "translateY(" + props.rankUp * 40 + "px)" } : undefined, onClick: props.toggleSkill },
        preact.h(SkillNameCell, { name: props.item.name, disappearance: props.item.disappearance }),
        preact.h(AddPowerCell, { power: props.item.plus }),
        preact.h("td", null, props.item.mult.toFixed(3)));
});
var SkillNameCell = function (props) {
    return preact.h("td", null,
        preact.h("div", { className: "skillName" },
            preact.h("span", null, props.name),
            preact.h("span", { className: "disappearance" + (props.disappearance ? '' : ' opacity0') }, props.disappearance ? '- ' + props.disappearance : '')));
};
var AddPowerCell = function (props) {
    var value = Math.min(Math.abs(props.power), 100);
    return preact.h("td", null,
        preact.h("div", { className: "AddPower" },
            preact.h("span", { className: "AddPower-graph" + (props.power < 0 ? ' minus' : ''), style: { transform: "scaleX(" + value / 100 + ")" } }),
            preact.h("span", { className: 'AddPower-value', style: { transform: "translateX(" + (value - 92) + "px)" } }, props.power)));
};

var mapStateToProps$1 = function (state) { return (__assign({}, state.ranking, { weapon: state.weapon, skill: state.skill })); };
var mapDispatchToProps$1 = function (dispatch) { return ({
    toggleSkillFilter: function () {
        dispatch(toggleSkillFilter());
    },
}); };
var SkillRanking = preactRedux.connect(mapStateToProps$1, mapDispatchToProps$1)((function (_super) {
    __extends(SkillRanking, _super);
    function SkillRanking() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAnimation = false;
        _this.state = {
            prevSkillRanking: getRanking(_this.props.weapon, _this.props.skill, false)
        };
        return _this;
    }
    SkillRanking.prototype.render = function (props) {
        var _this = this;
        var skillRanking;
        var isAnimation = this.isAnimation;
        if (!isAnimation) {
            this.isAnimation = true;
            skillRanking = this.state.prevSkillRanking;
        }
        else {
            skillRanking = getRanking(props.weapon, props.skill, props.skillFilter);
            clearTimeout(this.animationTimer);
            this.animationTimer = setTimeout(function () {
                _this.isAnimation = false;
                _this.setState({ prevSkillRanking: skillRanking });
            }, 200);
        }
        var skillRankingHash = skillRanking.reduce(function (h$$1, v) { return (h$$1[v.name] = v, h$$1); }, {});
        return preact.h("div", { className: 'SkillRanking' + (isAnimation ? ' animation' : '') },
            preact.h("table", null,
                preact.h("tr", null,
                    preact.h("th", null,
                        "\u30B9\u30AD\u30EB",
                        preact.h("br", null),
                        preact.h("label", null,
                            preact.h("input", { type: "checkbox", checked: !props.skillFilter, onChange: props.toggleSkillFilter }),
                            preact.h("small", null, "\u9632\u5177\u30B9\u30AD\u30EB\u306E\u307F"))),
                    preact.h("th", null, "\u4E0A\u6607\u5024"),
                    preact.h("th", null, "\u4E0A\u6607\u7387")),
                this.state.prevSkillRanking.map(function (skill, i) {
                    var item = skillRankingHash[skill.name] || skill;
                    return preact.h(TableRow, { key: item.name, item: item, rankUp: item.index - i, isHide: !skillRankingHash[skill.name] });
                })));
    };
    return SkillRanking;
}(preact.Component)));

var DelayInput = (function (_super) {
    __extends(DelayInput, _super);
    function DelayInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.refs = {};
        _this.update = function () {
            _this.props.update(_this.state.value);
        };
        _this.onInput = function (e) {
            clearTimeout(_this.timer);
            _this.timer = setTimeout(_this.update, 500);
            _this.setState({ value: e.currentTarget.value });
            // this.props.onInput && this.props.onInput(e)
        };
        _this.onChange = function () {
            clearTimeout(_this.timer);
            _this.update();
            // this.props.onChange && this.props.onChange(e)
        };
        _this.onBlur = function () {
            clearTimeout(_this.timer);
            var value = _this.props.value;
            if (_this.state.value === value)
                return;
            _this.setState({ value: value });
            // this.props.onBlur && this.props.onBlur(e)
        };
        return _this;
    }
    DelayInput.prototype.render = function () {
        var _this = this;
        return preact.h("input", __assign({}, this.props, { ref: function (input) { return _this.refs.input = input; }, value: (this.refs.input === null) ? this.state.value : this.props.value, onInput: this.onInput, onChange: this.onChange, onBlur: this.onBlur }));
    };
    return DelayInput;
}(preact.Component));

var mapStateToProps$3 = function (state) {
    return (__assign({}, state.weapon, { skillValue: state.skill.value }));
};
var mapDispatchToProps$3 = function (dispatch) {
    return ({
        setWeaponType: function (e) {
            dispatch(setWeaponType(e.currentTarget.value));
        },
        setWeaponName: function (e) {
            dispatch(setWeaponName(e.currentTarget.value));
        },
        setPower: function (textValue) {
            dispatch(setPower(+textValue));
        },
        setAffinity: function (textValue) {
            dispatch(setAffinity(+textValue));
        },
        toggleLastOnly: function () {
            dispatch(toggleLastOnly());
        },
    });
};
var Weapon = preactRedux.connect(mapStateToProps$3, mapDispatchToProps$3)(function (props) {
    var weaponList = getWeaponList(props.type, props.isLastOnly);
    var weaponOptions = weaponList.map(function (value) { return preact.h("option", { value: value }, value); });
    if (weaponList.indexOf(props.name) === -1) {
        weaponOptions.unshift(preact.h("option", { value: props.name }, "\uFF08" + props.name + "\uFF09"));
    }
    var _a = getAttackPower({ power: props.power, affinity: props.affinity, type: props.type }, props.skillValue), power = _a.power, weapon = _a.weapon;
    return preact.h("section", { className: "Weapon" },
        preact.h("h2", null, "Choose a Weapon"),
        preact.h("p", null,
            preact.h("select", { className: "weapon-type", value: props.type, onChange: props.setWeaponType },
                preact.h("option", { value: "lightbowgun" }, "\u30E9\u30A4\u30C8"),
                preact.h("option", { value: "heavybowgun" }, "\u30D8\u30D3\u30A3")),
            preact.h("select", { className: "weapon-name", value: props.name, onChange: props.setWeaponName }, weaponOptions),
            preact.h("br", null),
            preact.h("label", null,
                preact.h("input", { type: "checkbox", checked: props.isLastOnly, onChange: props.toggleLastOnly }),
                "\u6700\u7D42\u5F37\u5316\u306E\u307F\u3092\u8868\u793A")),
        preact.h("p", null,
            preact.h(DelayInput, { type: "number", pattern: "[0-9]*", step: "10", max: "1000", min: "10", value: props.power + '', update: props.setPower }),
            "/",
            preact.h(DelayInput, { type: "number", pattern: "-?[0-9]*", step: "5", max: "100", min: "-100", value: props.affinity + '', update: props.setAffinity })),
        preact.h("p", null,
            weapon.power | 0,
            " / ",
            weapon.affinity,
            "% => ",
            power | 0));
});

var App = function () {
    return preact.h("div", { className: "MHCalc" },
        preact.h(Weapon, null),
        preact.h("section", null,
            preact.h("h2", null, "Skill Ranking"),
            preact.h("div", { className: "skill" },
                preact.h(SkillBoxList, null),
                preact.h(SkillRanking, null))));
};

/// <reference path="../src/preact-redux.d.ts" />
var Provider = preactRedux.Provider;
var store = redux.createStore(reducer);
var html = render(preact.h(Provider, { store: store },
    preact.h(App, null)));
ejs.renderFile('buildHTML/index.ejs', { html: html }, {}, function (err, str) {
    var outputFile = fs.createWriteStream('index.html');
    outputFile.write(str);
});
