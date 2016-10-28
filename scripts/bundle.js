var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SkillButton = (function (_super) {
    __extends(SkillButton, _super);
    function SkillButton() {
        _super.apply(this, arguments);
    }
    SkillButton.prototype.render = function () {
        return React.createElement("li", {className: 'SkillButton' + (this.props.isChecked ? ' checked' : ''), onClick: this.props.action}, this.props.name);
    };
    return SkillButton;
}(React.Component));
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
        }
        else {
            skill[key] = hash[key];
        }
    }
    return skill;
};
var _skillList = [{
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
            attackUp(skill, val[0]);
            affinityUp(skill, val[1]);
            return skill;
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
        name: '狩猟笛【攻撃】',
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
    }];
var skillNameList = [];
for (var _i = 0, _skillList_1 = _skillList; _i < _skillList_1.length; _i++) {
    var skill = _skillList_1[_i];
    skill.group = skill.group || skill.name;
    for (var _a = 0, _b = skill.item; _a < _b.length; _a++) {
        var item = _b[_a];
        item.name = item.name || skill.name + (item.label || '');
        item.label = item.label || 'on';
        skillNameList.push({
            name: item.name,
            group: skill.group,
            value: item.value,
            effect: skill.effect
        });
    }
}
var skillList = _skillList;
/// <reference path="SkillButton.tsx" />
/// <reference path="SkillData.ts" />
var SkillBox = (function (_super) {
    __extends(SkillBox, _super);
    function SkillBox() {
        _super.apply(this, arguments);
    }
    SkillBox.prototype.render = function () {
        var _this = this;
        return React.createElement("div", {className: "SkillBox"}, 
            React.createElement("span", null, this.props.name), 
            React.createElement("ul", {className: "SkillBox-ul"}, this.props.skillButtonList.map(function (skillButton) {
                return React.createElement(SkillButton, {key: skillButton.label, name: skillButton.label, isChecked: _this.props.value == skillButton.name, action: _this.props.action.bind(null, skillButton.name)});
            })));
    };
    return SkillBox;
}(React.Component));
/// <reference path="SkillBox.tsx" />
/// <reference path="skillData.ts" />
var SkillBoxList = (function (_super) {
    __extends(SkillBoxList, _super);
    function SkillBoxList() {
        _super.apply(this, arguments);
    }
    SkillBoxList.prototype.render = function () {
        var _this = this;
        return React.createElement("ul", {className: 'SkillBoxList'}, skillList.map(function (skill) {
            return React.createElement("li", {className: 'SkillBoxList-li'}, 
                React.createElement(SkillBox, {key: skill.name, name: skill.name, value: _this.props.activeSkill[skill.group] || null, action: _this.props.setActiveSkill.bind(null, skill.group), skillButtonList: skill.item})
            );
        }));
    };
    return SkillBoxList;
}(React.Component));
var weaponList;
(function (weaponList) {
    weaponList.lightbowgun = {
        "ベルダーバレット": {
            lastName: 'サージュバレット',
            list: [
                [80, 0],
                [90, 0],
                [100, 0],
                [110, 0],
                [130, 0],
                [150, 0],
                [190, 0],
                [210, 0],
            ]
        },
        "クックアンガ―": {
            lastName: 'クックカウンター',
            list: [
                [120, 0],
                [130, 0],
                [140, 0],
                [170, 0],
                [190, 0],
                [200, 0],
            ]
        },
        "ド【烏】": {
            lastName: 'ド【狼】',
            list: [
                [150, 5],
                [160, 5],
                [170, 5],
                [190, 5],
                [210, 5],
            ]
        },
        "ド【兇】": {
            lastName: '黒狼隊のショウド',
            list: [
                [190, 30],
                [200, 30],
                [210, 30],
            ]
        },
        "テイルストリング": {
            lastName: 'テイルカタパルト',
            list: [
                [130, 0],
                [160, 0],
                [170, 0],
                [190, 0],
                [200, 0],
            ]
        },
        "ロンナークプシカ": {
            lastName: 'ロンベルチャカリオ',
            list: [
                [170, 0],
                [190, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "テイルブリザード": {
            lastName: 'テイルアヴァランチ',
            list: [
                [170, 10],
                [180, 10],
                [190, 10],
            ]
        },
        "ヴァルキリーファイア": {
            lastName: 'ヴァルキリーブレイズ',
            list: [
                [120, 0],
                [130, 0],
                [140, 0],
                [150, 0],
                [170, 0],
                [200, 0],
                [210, 0],
                [220, 0],
            ]
        },
        "繚乱の対弩": {
            lastName: '金華朧銀の対弩',
            list: [
                [210, 0],
                [220, 0],
                [230, 0],
            ]
        },
        "ディオスブラスト": {
            lastName: '爆弩コバルトブラスト',
            list: [
                [150, 0],
                [170, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "爆砕の光弩": {
            lastName: '破岩弩バリスタイト',
            list: [
                [210, 0],
                [220, 0],
                [230, 0],
            ]
        },
        "オブシドバレット": {
            lastName: '歴耀弩デボニア',
            list: [
                [150, 0],
                [170, 0],
                [200, 0],
                [220, 0],
            ]
        },
        "幻獣筒【三ツ角】": {
            lastName: '幻獣筒【三界三禍】',
            list: [
                [140, 0],
                [160, 0],
                [180, 0],
                [200, 0],
            ]
        },
        "飛雷弩": {
            lastName: '撃雷弩【麒麟】',
            list: [
                [190, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "ハンターライフル": {
            lastName: 'スナイプシューター',
            list: [
                [70, 0],
                [80, 0],
                [110, 0],
                [120, 0],
                [140, 0],
                [170, 0],
                [200, 0],
                [200, 0],
            ]
        },
        "フルットシリンジ": {
            lastName: 'フルーミィシリンジ',
            list: [
                [120, 0],
                [140, 0],
                [160, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "クゥイルバースト": {
            lastName: 'キングルバースト',
            list: [
                [100, 0],
                [110, 0],
                [150, 0],
                [170, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "ショットボウガン・白": {
            lastName: 'バレットシャワー・白',
            list: [
                [90, 10],
                [110, 10],
                [120, 10],
                [150, 10],
                [160, 10],
                [200, 10],
            ]
        },
        "ショットボウガン・蛇": {
            lastName: 'バレットシャワー・蛇',
            list: [
                [130, 0],
                [150, 0],
                [180, 0],
                [200, 0],
            ]
        },
        "ショットボウガン・蒼": {
            lastName: 'バレットシャワー・蒼',
            list: [
                [160, 20],
                [180, 20],
                [190, 20],
                [200, 20],
            ]
        },
        "ショットボウガン・碧": {
            lastName: 'バレットシャワー・碧',
            list: [
                [170, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "ショットボウガン・紅": {
            lastName: 'バレットシャワー・紅',
            list: [
                [190, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "ウロコトルネード": {
            lastName: '溶岩弩ウログルト',
            list: [
                [130, 0],
                [150, 0],
                [180, 0],
                [200, 0],
            ]
        },
        "王弩ライカン": {
            lastName: '王牙弩【野雷】',
            list: [
                [150, 10],
                [170, 10],
                [190, 10],
                [200, 10],
                [220, 10],
            ]
        },
        "ラサーサアルシアラ": {
            lastName: '叛弩アルシアラ',
            list: [
                [150, 10],
                [160, 10],
                [210, 10],
                [220, 10],
            ]
        },
        "叛逆の旋弩": {
            lastName: '叛逆弩ヴァルレギオン',
            list: [
                [220, 20],
                [230, 20],
                [240, 20],
            ]
        },
        "ハーイゲヴァー": {
            lastName: '口裂けハーイゲヴァー',
            list: [
                [190, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "ベルクーツ": {
            lastName: 'ド級弩アルデバラン',
            list: [
                [200, 0],
                [210, 0],
                [220, 0],
            ]
        },
        "クロスボウガン": {
            lastName: 'クロスブリッツ',
            list: [
                [80, 0],
                [90, 0],
                [100, 0],
                [110, 0],
                [130, 0],
                [150, 0],
                [200, 0],
                [220, 0],
            ]
        },
        "ストライプシェル": {
            lastName: '蟹甲弩ラーバルザザミ',
            list: [
                [100, 0],
                [110, 0],
                [140, 0],
                [170, 0],
                [200, 0],
            ]
        },
        "エビィーガン": {
            lastName: 'キングエビィーガン',
            list: [
                [160, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "メイルシュトローム": {
            lastName: 'ネビュラシュトローム',
            list: [
                [210, 0],
                [210, 0],
                [220, 0],
            ]
        },
        "ロアルスリング": {
            lastName: 'ロアルストリーム',
            list: [
                [120, 0],
                [140, 0],
                [150, 0],
                [190, 0],
                [200, 0],
            ]
        },
        "ヒドゥンゲイズ": {
            lastName: '夜行弩【梟ノ眼】',
            list: [
                [120, 40],
                [130, 40],
                [140, 40],
                [150, 40],
                [190, 40],
            ]
        },
        "ヤクトバレット": {
            lastName: '咬弾チェイサー',
            list: [
                [140, 10],
                [150, 10],
                [190, 10],
                [210, 10],
            ]
        },
        "レックスタンク": {
            lastName: '轟弩【戦虎】',
            list: [
                [170, -20],
                [180, -20],
                [200, -20],
                [220, -10],
            ]
        },
        "シェルバレット": {
            lastName: 'インセクヴァールカン',
            list: [
                [170, 0],
                [190, 0],
                [200, 0],
            ]
        },
        "機銃ストラフィング": {
            lastName: '機銃砲バタルビトリア',
            list: [
                [200, 0],
                [210, 0],
                [220, 0],
            ]
        },
        "火竜砲": {
            lastName: '鳳仙火竜砲',
            list: [
                [140, 0],
                [150, 0],
                [170, 0],
                [190, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "雷砲サンダークルス": {
            lastName: '雷迅砲サンダークルス',
            list: [
                [180, 10],
                [190, 10],
                [200, 20],
            ]
        },
        "デザートストーム": {
            lastName: 'デザートテンペスト',
            list: [
                [170, 0],
                [190, 0],
                [210, 0],
            ]
        },
        "ラヴァシュトローム": {
            lastName: 'ラヴァストーム',
            list: [
                [190, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "ユクモノ弩": {
            lastName: 'ユクモノバレット',
            list: [
                [110, 0],
                [120, 0],
                [140, 0],
                [180, 0],
                [200, 0],
            ]
        },
        "真ユクモノ弩": {
            lastName: 'ユクモ霊弩【弾雨】',
            list: [
                [180, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "アイルーラグドール": {
            lastName: 'アイルーヘルドール',
            list: [
                [120, 0],
                [130, 0],
                [140, 0],
                [170, 0],
                [190, 0],
            ]
        },
        "メラルーラグドール": {
            lastName: 'メラルーヘルドール',
            list: [
                [120, 30],
                [130, 30],
                [150, 30],
                [180, 30],
                [190, 30],
            ]
        },
        "吹吹茶釜": {
            lastName: '吹吹チャガンマン',
            list: [
                [160, 0],
                [190, 0],
                [210, 0],
            ]
        },
        "クロオビボウガン": {
            lastName: 'シハンボウガン',
            list: [
                [130, 0],
                [150, 0],
                [190, 0],
                [210, 0],
            ]
        },
        "フィオシダーレ": {
            lastName: 'ノブレスオーダー',
            list: [
                [140, 10],
                [150, 10],
                [180, 15],
                [200, 15],
            ]
        },
        "ビートスナイパー": {
            lastName: 'ペネトレートビート',
            list: [
                [140, 0],
                [160, 0],
                [190, 0],
                [200, 0],
            ]
        },
        "春夜鯉砲": {
            lastName: '春夜鯉砲【滝登り】',
            list: [
                [130, 0],
                [150, 0],
                [180, 0],
                [200, 0],
            ]
        },
        "気艦銃": {
            lastName: '気艦銃バルヘリス',
            list: [
                [140, 0],
                [150, 0],
                [180, 0],
                [200, 0],
            ]
        },
        "ビューベル": {
            lastName: '高原のフリューベル',
            list: [
                [100, 10],
                [120, 10],
                [150, 10],
                [160, 10],
            ]
        },
        "エルドラマスケット": {
            lastName: '亡国の宝銃バイジン',
            list: [
                [130, 10],
                [150, 15],
                [190, 20],
                [210, 30],
            ]
        },
        "狐水銃シズクトキユル": {
            lastName: 'あまとぶや軽弩の水珠',
            list: [
                [150, 0],
                [170, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "電竜弩": {
            lastName: 'サージ電竜砲',
            list: [
                [150, 0],
                [170, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "巨獣弩": {
            lastName: '巨弾・弩ッ弩ッ弩ッ',
            list: [
                [160, 0],
                [180, 0],
                [220, 0],
                [240, 0],
            ]
        },
        "灼炎のエンサー": {
            lastName: '斬竜弩イクリール',
            list: [
                [150, 0],
                [170, 0],
                [210, 0],
                [220, 0],
            ]
        },
        "レイofヴァイス": {
            lastName: 'レイofインサニティ',
            list: [
                [140, 20],
                [150, 20],
                [180, 20],
                [200, 20],
            ]
        },
        "THEオラクル": {
            lastName: 'THEバニッシャー',
            list: [
                [190, 35],
                [200, 35],
                [210, 35],
            ]
        },
        "ウラナイランプ": {
            lastName: 'マジナイランプ',
            list: [
                [140, 30],
                [180, 30],
                [200, 30],
                [210, 30],
            ]
        },
        "巨蟹といふ名の白骸": {
            lastName: '白骸の怪弩',
            list: [
                [160, 0],
                [170, 0],
                [210, 0],
                [220, 0],
            ]
        },
        "極星弩グラーグ": {
            lastName: '驚嘆ナル弩星グラーグ',
            list: [
                [200, 10],
                [210, 10],
                [220, 10],
            ]
        },
        "ブラックパラソル": {
            lastName: 'クロノパラソル',
            list: [
                [150, 0],
                [170, 0],
                [190, 0],
                [200, 0],
            ]
        },
        "パールフリルパラソル": {
            lastName: 'パールセレブパラソル',
            list: [
                [190, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "ラージャンデグ": {
            lastName: '金獅子筒【万雷】',
            list: [
                [210, -15],
                [220, -15],
                [220, -15],
            ]
        },
        "鬼神筒": {
            lastName: '鬼神筒【雷天】',
            list: [
                [220, -25],
                [230, -25],
                [240, -25],
            ]
        },
        "イビルマシーン": {
            lastName: 'マッドネスグリーフ',
            list: [
                [190, -10],
                [200, -10],
                [210, -10],
            ]
        },
        "瓢弾": {
            lastName: '瓢弾【千成】',
            list: [
                [180, 0],
                [190, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "業弩ダークデメント": {
            lastName: '滅弩ダークデメント',
            list: [
                [220, -15],
                [230, -15],
                [240, -15],
            ]
        },
        "鋼氷蜂弩": {
            lastName: 'ホーネス＝ダオラ',
            list: [
                [210, 10],
                [220, 10],
                [230, 10],
            ]
        },
        "シルバースパルタカス": {
            lastName: '朧銀の連弩',
            list: [
                [210, -10],
                [220, -10],
                [230, -10],
            ]
        },
        "ゴールドヴァルキリー": {
            lastName: '金華の連弩',
            list: [
                [200, 0],
                [210, 0],
                [220, 0],
            ]
        },
        "崩弩エイヌカムルバス": {
            lastName: '崩天弩エイヌオンカム',
            list: [
                [240, -30],
                [250, -30],
                [260, -30],
            ]
        },
        "凶針【水禍】": {
            lastName: '天嵐ノ針【水天一色】',
            list: [
                [200, -10],
                [210, -10],
                [220, -10],
            ]
        },
        "鬼ヶ島": {
            lastName: '大鬼ヶ島',
            list: [
                [130, 0],
                [150, 0],
                [160, 0],
                [190, 0],
                [200, 0],
            ]
        },
        "神ヶ島": {
            lastName: '大神ヶ島【出雲】',
            list: [
                [200, 0],
                [210, 0],
                [220, 0],
            ]
        },
        "レギーナファイア": {
            lastName: 'レギーナフレイムロゼ',
            list: [
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
            ]
        },
        "ラファガゲイズ": {
            lastName: '黎明弩【鷹ノ眼】',
            list: [
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
            ]
        },
        "ド【禍】": {
            lastName: '隻眼隊のショウド',
            list: [
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
            ]
        },
        "黒炎竜砲": {
            lastName: '慟黒炎竜砲',
            list: [
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
            ]
        },
        "金狼弩ライカン": {
            lastName: '金狼牙弩【野雷】',
            list: [
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
            ]
        },
        "ルドラゾフル": {
            lastName: '鉤爪弩【荒虎掌】',
            list: [
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
            ]
        },
        "爆焔のエンサー": {
            lastName: '燼滅弩イクリール',
            list: [
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
            ]
        },
        "アームキャノン": {
            lastName: 'アームキャノンX',
            list: [
                [190, 0],
                [200, 0],
                [210, 0],
            ]
        }
    };
})(weaponList || (weaponList = {}));
var weaponList;
(function (weaponList) {
    weaponList.heavybowgun = {
        "ベルダーキャノン": {
            lastName: 'サージュキャノン',
            list: [
                [80, 0],
                [90, 0],
                [100, 0],
                [110, 0],
                [120, 0],
                [160, 0],
                [180, 0],
                [200, 0],
            ]
        },
        "ガウプシカ": {
            lastName: 'ヘビィガウプシカ',
            list: [
                [100, 0],
                [110, 0],
                [130, 0],
                [160, 0],
                [190, 0],
            ]
        },
        "キャロムボール": {
            lastName: '転弩エイトボール',
            list: [
                [130, 0],
                [150, 0],
                [180, 0],
                [200, 0],
            ]
        },
        "アグナブロウ": {
            lastName: '炎戈銃ブレイズヘル',
            list: [
                [200, 5],
                [210, 5],
                [220, 5],
            ]
        },
        "サンドダイバー": {
            lastName: 'デザートダイバー',
            list: [
                [90, 0],
                [100, 0],
                [120, 0],
                [150, 0],
                [180, 0],
                [190, 0],
            ]
        },
        "ガノスプレッシャー": {
            lastName: 'ガノバッシャーガン',
            list: [
                [180, 5],
                [190, 5],
                [210, 5],
            ]
        },
        "ラピッドキャスト": {
            lastName: 'ハイサイクルキャスト',
            list: [
                [150, 0],
                [180, 0],
                [190, 0],
            ]
        },
        "バスタークラブ": {
            lastName: 'ヘビィバスタークラブ',
            list: [
                [110, 0],
                [130, 0],
                [160, 0],
                [190, 0],
                [200, 0],
            ]
        },
        "スレイペンギーゴ": {
            lastName: 'スレイペンギング',
            list: [
                [110, 0],
                [120, 0],
                [140, 0],
                [180, 0],
                [200, 0],
            ]
        },
        "ヒドゥンスナイパー": {
            lastName: '夜砲【黒鳳】',
            list: [
                [110, 20],
                [120, 20],
                [150, 30],
                [180, 30],
                [190, 30],
            ]
        },
        "ピアースクラブ": {
            lastName: 'ウチヌキ',
            list: [
                [190, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "オブシドキャノン": {
            lastName: '歴耀砲カボニフェル',
            list: [
                [140, 10],
                [180, 10],
                [190, 10],
                [210, 10],
            ]
        },
        "チャージグリフサルト": {
            lastName: '徹甲砲アルセルタス',
            list: [
                [160, 0],
                [200, 0],
                [220, 0],
            ]
        },
        "妃竜砲【遠撃】": {
            lastName: '妃竜砲【飛撃】',
            list: [
                [180, 0],
                [190, 0],
                [210, 0],
            ]
        },
        "アルバレスト": {
            lastName: 'S・アルバレスト',
            list: [
                [90, 0],
                [100, 0],
                [110, 0],
                [120, 0],
                [130, 0],
                [140, 0],
                [170, 0],
                [190, 0],
            ]
        },
        "インジェクションガン": {
            lastName: 'ゼクトインジェクト',
            list: [
                [100, 0],
                [110, 0],
                [130, 0],
                [170, 0],
                [190, 0],
            ]
        },
        "ラストニードル": {
            lastName: 'ハニーコーマー',
            list: [
                [150, 0],
                [170, 0],
                [180, 0],
            ]
        },
        "メテオバズーカ": {
            lastName: 'メテオフォール',
            list: [
                [100, 0],
                [110, 0],
                [120, 0],
                [150, 0],
                [190, 0],
            ]
        },
        "バイトブラスター": {
            lastName: 'バイティングブラスト',
            list: [
                [130, 0],
                [150, 0],
                [180, 0],
                [200, 0],
            ]
        },
        "サイドアルシャマリ": {
            lastName: '叛砲アルシャマリ',
            list: [
                [150, 10],
                [160, 10],
                [200, 10],
                [210, 10],
            ]
        },
        "叛逆の怒砲": {
            lastName: '叛逆砲イーラレギオン',
            list: [
                [210, 10],
                [220, 10],
                [230, 10],
            ]
        },
        "討伐隊正式重砲": {
            lastName: '近衛隊正式重砲',
            list: [
                [150, 0],
                [190, 0],
                [210, 0],
            ]
        },
        "メテオバスター": {
            lastName: 'メテオフォール',
            list: [
                [180, 0],
                [190, 0],
                [210, 0],
            ]
        },
        "イャンクック砲": {
            lastName: 'イャンクック大砲',
            list: [
                [120, 0],
                [140, 0],
                [150, 0],
                [180, 0],
                [200, 0],
            ]
        },
        "カホウ【烏】": {
            lastName: 'カホウ【狼】',
            list: [
                [140, 0],
                [160, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "バイナクルラ": {
            lastName: '眠砲公爵コシュマル',
            list: [
                [120, 5],
                [130, 5],
                [170, 5],
                [190, 5],
            ]
        },
        "タンクメイジ": {
            lastName: 'タンクソーサラー',
            list: [
                [110, 0],
                [120, 0],
                [140, 0],
                [180, 0],
                [200, 0],
            ]
        },
        "アイススロワー": {
            lastName: 'エンバースロワー',
            list: [
                [120, 0],
                [140, 0],
                [180, 0],
                [200, 0],
            ]
        },
        "クイックキャスト": {
            lastName: 'クイックシャフト',
            list: [
                [170, 0],
                [180, 0],
                [190, 0],
            ]
        },
        "レックスハウル": {
            lastName: '轟砲【虎頭】',
            list: [
                [150, -10],
                [190, -10],
                [230, -10],
            ]
        },
        "ボーンシューター": {
            lastName: 'ボーンバスター',
            list: [
                [70, 0],
                [80, 0],
                [90, 0],
                [100, 0],
                [120, 0],
                [150, 0],
                [170, 0],
                [180, 0],
            ]
        },
        "リノマリーノ": {
            lastName: 'ディープリノマリーノ',
            list: [
                [80, 0],
                [100, 0],
                [140, 0],
                [180, 0],
                [200, 0],
            ]
        },
        "青熊筒": {
            lastName: '青熊筒【川漁】',
            list: [
                [160, 0],
                [190, 0],
                [200, 0],
            ]
        },
        "荒縄鼓砲": {
            lastName: '荒縄鼓砲【調緒】',
            list: [
                [160, 0],
                [190, 0],
                [200, 0],
            ]
        },
        "モンテベルデ": {
            lastName: '山穿ジガンラケーテ',
            list: [
                [210, 0],
                [220, 0],
                [230, 0],
            ]
        },
        "46式潜伏重砲": {
            lastName: '潜砲ハープール',
            list: [
                [110, 0],
                [120, 0],
                [140, 0],
                [180, 0],
                [200, 0],
            ]
        },
        "ラギアブリッツ": {
            lastName: '雷砲ラギアブリッツ',
            list: [
                [150, 0],
                [160, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "王砲ライド": {
            lastName: '王牙砲【山雷】',
            list: [
                [150, 10],
                [190, 10],
                [210, 10],
            ]
        },
        "ディオスキャノン": {
            lastName: '爆砲アトミキャノン',
            list: [
                [150, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "爆砕の重砲": {
            lastName: '破岩大砲シュライアー',
            list: [
                [210, 0],
                [220, 0],
                [230, 0],
            ]
        },
        "ユクモノ重弩": {
            lastName: 'ユクモノキャノン',
            list: [
                [100, 0],
                [110, 0],
                [130, 0],
                [170, 0],
                [190, 0],
            ]
        },
        "真ユクモノ重弩": {
            lastName: 'ユクモ連山重弩',
            list: [
                [140, 0],
                [150, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "ムーファイア": {
            lastName: '霊砲ムーフレイム',
            list: [
                [110, 0],
                [120, 0],
                [130, 0],
                [170, 0],
                [190, 0],
            ]
        },
        "炎妃龍の石重弩": {
            lastName: '炎妃ガルグイユの叫喚',
            list: [
                [130, -30],
                [150, -30],
                [210, -30],
                [230, -30],
            ]
        },
        "アイルー大砲": {
            lastName: 'ネコ獣砲ニャノン',
            list: [
                [110, 0],
                [130, 0],
                [160, 0],
                [190, 0],
                [200, 0],
            ]
        },
        "狐重砲ハライニケリナ": {
            lastName: 'あしひきの山砲の御車',
            list: [
                [150, 0],
                [160, 0],
                [200, 0],
                [220, 0],
            ]
        },
        "電竜砲【進撃】": {
            lastName: '電竜砲【雷撃】',
            list: [
                [150, 10],
                [160, 10],
                [200, 10],
                [220, 10],
            ]
        },
        "巨獣砲": {
            lastName: '巨撃・爆砲ォー遠',
            list: [
                [160, -10],
                [180, -10],
                [230, -10],
                [240, -10],
            ]
        },
        "灼炎のイグナー": {
            lastName: '斬竜砲エクリプス',
            list: [
                [160, 0],
                [170, 0],
                [210, 0],
                [230, 0],
            ]
        },
        "トリガーofハザード": {
            lastName: 'トリガーofデマイズ',
            list: [
                [150, 20],
                [190, 20],
                [210, 20],
            ]
        },
        "THEディザスター": {
            lastName: 'THEフェイス',
            list: [
                [200, 30],
                [210, 30],
                [220, 30],
            ]
        },
        "デルフ＝ダオラ": {
            lastName: 'グラン＝ダオラ',
            list: [
                [150, 10],
                [160, 10],
                [210, 10],
                [230, 10],
            ]
        },
        "天秤といふ名の白骸": {
            lastName: '白骸の罪砲',
            list: [
                [160, 0],
                [200, 0],
                [210, 0],
                [220, 0],
            ]
        },
        "極星砲ヴィズィ": {
            lastName: '悲哀ナル砲星ヴィズィ',
            list: [
                [180, 10],
                [190, 10],
                [200, 15],
            ]
        },
        "海造砲【火刃】": {
            lastName: '海造砲【炎刃】',
            list: [
                [150, 0],
                [190, 0],
                [210, 0],
            ]
        },
        "ブラックキャノン": {
            lastName: 'クロノキャノン',
            list: [
                [140, 0],
                [150, 0],
                [200, 0],
                [210, 0],
            ]
        },
        "ズッカカロッツァ": {
            lastName: 'サンドリヨン',
            list: [
                [150, 0],
                [190, 0],
                [200, 0],
            ]
        },
        "ブルームスター": {
            lastName: 'ミーティア',
            list: [
                [180, 0],
                [190, 0],
                [200, 0],
            ]
        },
        "ナナホシ大砲": {
            lastName: 'ナナホシ天砲',
            list: [
                [180, 0],
                [190, 0],
                [200, 0],
            ]
        },
        "暴食の重弩": {
            lastName: 'アンフィニグラ',
            list: [
                [200, -10],
                [210, -10],
                [220, -10],
            ]
        },
        "業重弩ファミン": {
            lastName: '滅重弩ガジンファミン',
            list: [
                [220, -15],
                [230, -15],
                [240, -15],
            ]
        },
        "ヒーローブラスター": {
            lastName: 'マスターブラスター',
            list: [
                [160, 40],
                [180, 40],
                [190, 40],
            ]
        },
        "カーマエレオーン": {
            lastName: 'カーマヒトバーレ',
            list: [
                [210, 0],
                [220, 0],
                [230, 0],
            ]
        },
        "テオ＝アーティレリ": {
            lastName: 'テオ＝フランマルス',
            list: [
                [210, 5],
                [220, 5],
                [230, 5],
            ]
        },
        "覇砲ユプカムトルム": {
            lastName: '覇轟砲クーネユプカム',
            list: [
                [210, 40],
                [210, 40],
                [220, 40],
            ]
        },
        "崩砲バセカムルバス": {
            lastName: '崩天砲パセカオンカム',
            list: [
                [240, -30],
                [250, -30],
                [260, -30],
            ]
        },
        "凶刻【時雨】": {
            lastName: '天嵐ノ刻【刻露清秀】',
            list: [
                [210, -5],
                [220, -5],
                [230, -5],
            ]
        },
        "カオスウイング": {
            lastName: '神滅弩アル・エリア',
            list: [
                [210, 10],
                [220, 10],
                [230, 10],
            ]
        },
        "紅熊轟筒": {
            lastName: '紅熊大轟筒【怪腕】',
            list: [
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
            ]
        },
        "エオストペンギーゴ": {
            lastName: 'エオストペングルス',
            list: [
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
            ]
        },
        "ウィルガバスター": {
            lastName: '黒甲ウィルガバスター',
            list: [
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
            ]
        },
        "紫毒姫竜砲": {
            lastName: '紫毒姫竜砲【華撃】',
            list: [
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
            ]
        },
        "黒縄鬼砲": {
            lastName: '黒縄鬼砲【注連】',
            list: [
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
            ]
        },
        "ラファガスナイパー": {
            lastName: '暁砲【瑞風】',
            list: [
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
            ]
        },
        "グロボ＝ショット": {
            lastName: 'グロボ＝バールゼタ',
            list: [
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
            ]
        },
        "カホウ【禍】": {
            lastName: '隻眼公のカホウ',
            list: [
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
            ]
        },
        "金狼砲ライド": {
            lastName: '金狼牙砲【山雷】',
            list: [
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
            ]
        },
        "ルドラハウル": {
            lastName: '鉤爪砲【荒虎頭】',
            list: [
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
            ]
        },
        "爆焔のイグナー": {
            lastName: '燼滅砲エクリクス',
            list: [
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
            ]
        },
        "海賊Ｊキャノン": {
            lastName: '大海賊Jキャノン',
            list: [
                [190, 0],
                [200, 0],
                [210, 0],
            ]
        }
    };
})(weaponList || (weaponList = {}));
/// <reference path="weaponList/lightbowgun.ts" />
/// <reference path="weaponList/heavybowgun.ts" />
var weaponData = {
    lightbowgun: {
        typeMult: 1.3,
        list: weaponList.lightbowgun
    },
    heavybowgun: {
        typeMult: 1.48,
        list: weaponList.heavybowgun
    }
};
function getWeaponList(type) {
    return Object.keys(weaponData[type].list);
}
function getWeaponLevelList(weapon) {
    return weaponData[weapon.type].list[weapon.name].list;
}
function getWeapon(weapon) {
    return weaponData[weapon.type].list[weapon.name].list[weapon.level - 1];
}
function getWeaponLastName(type, name) {
    return weaponData[type].list[name].lastName;
}
/// <reference path="skillData.ts" />
/// <reference path="weaponData.ts" />
function calc(_weapon, activeSkillList) {
    var wep = getWeapon(_weapon);
    var weapon = {
        power: wep[0],
        affinity: wep[1],
        mult: _weapon.type === 'lightbowgun' ? 1.3 : 1.5
    };
    var skill = {
        power: 0,
        mult: 1,
        affinity: 0
    };
    activeSkillList.forEach(function (item) {
        item.effect(skill, item.value);
    });
    return getAttackPower(weapon, skill);
}
function getRanking(_weapon, activeSkill) {
    var activeSkillList = skillNameList.filter(function (item) {
        return activeSkill[item.group] === item.name;
    });
    var orgPower = calc(_weapon, activeSkillList);
    var trDataList = skillNameList.map(function (item, index) {
        var skill = {
            power: 0,
            mult: 1,
            affinity: 0
        };
        var isActiveSkill = activeSkill[item.group] === item.name;
        var activeSkillList = skillNameList.filter(function (_item) {
            return activeSkill[_item.group] === _item.name && _item.group !== item.group;
        });
        var trData = {
            name: item.name,
            isActive: isActiveSkill,
            // action: item.action,
            disappearance: (activeSkill[item.group] && !isActiveSkill) ? activeSkill[item.group] : null,
            plus: null,
            mult: null,
            index: index
        };
        if (activeSkill[item.group] !== item.name) {
            activeSkillList.push(item);
            var power = calc(_weapon, activeSkillList);
            trData.plus = (power - orgPower) | 0;
            trData.mult = power / orgPower;
        }
        else {
            var power = calc(_weapon, activeSkillList);
            trData.plus = (orgPower - power) | 0;
            trData.mult = orgPower / power;
        }
        return trData;
    }).sort(function (a, b) { return b.plus - a.plus || b.mult - a.mult || a.index - b.index; });
    // }).sort((a, b) => b.plus - a.plus || b.mult - a.mult || +b.isActive - +a.isActive)
    return trDataList;
}
function getAttackPower(weapon, skill) {
    var power = weapon.power, affinity = Math.min(Math.max(weapon.affinity + skill.affinity, -100), 100), superAffinity = 1.25 - 1;
    if (skill.parts) {
        power += Math.floor(power * (skill.parts - 1));
    }
    if (skill.superAffinity) {
        superAffinity = skill.superAffinity - 1;
    }
    return (power + skill.power) * skill.mult * (1 + affinity / 100 * superAffinity);
}
/// <reference path="skillData.ts" />
/// <reference path="weaponData.ts" />
/// <reference path="calc.ts" />
var SkillRanking = (function (_super) {
    __extends(SkillRanking, _super);
    function SkillRanking(props) {
        _super.call(this, props);
        this.skillActionList = {};
        for (var _i = 0, skillNameList_1 = skillNameList; _i < skillNameList_1.length; _i++) {
            var skill = skillNameList_1[_i];
            this.skillActionList[skill.name] = props.setActiveSkill.bind(null, skill.group, skill.name);
        }
    }
    SkillRanking.prototype.render = function () {
        var _this = this;
        var skillRanking = getRanking(this.props.weapon, this.props.activeSkill);
        return React.createElement("table", {className: "SkillRanking"}, 
            React.createElement("tr", null, 
                React.createElement("th", null, "スキル"), 
                React.createElement("th", null, "上昇値"), 
                React.createElement("th", null, "上昇率")), 
            skillRanking.map(function (item) {
                return React.createElement("tr", {key: item.name, onClick: _this.skillActionList[item.name], className: item.isActive ? 'checked' : ''}, 
                    React.createElement("td", null, 
                        React.createElement("span", {className: "skillName"}, item.name), 
                        (item.disappearance) ? React.createElement("span", {className: "disappearance"}, '- ' + item.disappearance) : null), 
                    React.createElement("td", null, 
                        React.createElement("span", {className: 'test' + (item.plus < 0 ? ' minus' : ''), style: { width: Math.abs(item.plus) + 'px' }}), 
                        ' ', 
                        item.plus), 
                    React.createElement("td", null, item.mult.toFixed(3)));
            }));
    };
    return SkillRanking;
}(React.Component));
/// <reference path="weaponData.ts" />
var Weapon = (function (_super) {
    __extends(Weapon, _super);
    function Weapon(props) {
        _super.call(this, props);
        this.state = { isLastName: true };
        this.toggleLastName = this.toggleLastName.bind(this);
    }
    Weapon.prototype.toggleLastName = function () {
        this.setState({ isLastName: !this.state.isLastName });
    };
    Weapon.prototype.setType = function () {
        var type = this.refs['type'].value;
        var name = getWeaponList(type)[0];
        var level = getWeaponLevelList({
            type: type, name: name, level: 1
        }).length;
        this.props.setWeapon({ type: type, name: name, level: level });
    };
    Weapon.prototype.setName = function () {
        var type = this.props.weapon.type;
        var name = this.refs['name'].value;
        var level = getWeaponLevelList({
            type: type, name: name, level: 1
        }).length;
        this.props.setWeapon({ type: type, name: name, level: level });
    };
    Weapon.prototype.setLevel = function () {
        var type = this.props.weapon.type;
        var name = this.props.weapon.name;
        var level = +this.refs['level'].value;
        this.props.setWeapon({ type: type, name: name, level: level });
    };
    Weapon.prototype.render = function () {
        var _this = this;
        var weapon = getWeapon(this.props.weapon);
        var activeSkillList = skillNameList.filter(function (item) { return _this.props.activeSkill[item.group] === item.name; });
        var power = calc(this.props.weapon, activeSkillList);
        return React.createElement("div", {className: "Weapon"}, 
            React.createElement("select", {ref: 'type', value: this.props.weapon.type, onChange: this.setType.bind(this)}, 
                React.createElement("option", {value: "lightbowgun"}, "ライト"), 
                React.createElement("option", {value: "heavybowgun"}, "ヘビィ")), 
            React.createElement("select", {ref: 'name', value: this.props.weapon.name, onChange: this.setName.bind(this)}, getWeaponList(this.props.weapon.type).map(function (value) {
                return React.createElement("option", {value: value}, _this.state.isLastName ? getWeaponLastName(_this.props.weapon.type, value) : value);
            })), 
            React.createElement("select", {ref: 'level', value: this.props.weapon.level + '', onChange: this.setLevel.bind(this)}, getWeaponLevelList(this.props.weapon).map(function (value, i) {
                return React.createElement("option", {value: i + 1}, 
                    "LV", 
                    i + 1);
            })), 
            React.createElement("br", null), 
            React.createElement("label", null, 
                React.createElement("input", {type: "checkbox", checked: this.state.isLastName, onChange: this.toggleLastName}), 
                React.createElement("small", null, "最終強化名で表示")), 
            React.createElement("p", {className: "weapon-power"}, weapon[0] + " / " + weapon[1] + "% => " + (power | 0)));
    };
    return Weapon;
}(React.Component));
/// <reference path="SkillBoxList.tsx" />
/// <reference path="SkillRanking.tsx" />
/// <reference path="Weapon.tsx" />
var MHCalc = (function (_super) {
    __extends(MHCalc, _super);
    function MHCalc() {
        _super.call(this);
        this.state = {
            weapon: {
                type: 'heavybowgun',
                name: 'ベルダーキャノン',
                level: 8
            },
            activeSkill: {}
        };
    }
    MHCalc.prototype.setWeapon = function (weapon) {
        this.setState({ weapon: weapon });
    };
    MHCalc.prototype.setActiveSkill = function (skillBoxName, value) {
        var activeSkill = this.state.activeSkill;
        if (activeSkill[skillBoxName] === value) {
            delete activeSkill[skillBoxName];
        }
        else {
            activeSkill[skillBoxName] = value;
        }
        this.setState({ activeSkill: activeSkill });
    };
    MHCalc.prototype.render = function () {
        return React.createElement("div", {className: "MHCalc"}, 
            React.createElement("div", {className: "input"}, 
                React.createElement(Weapon, {weapon: this.state.weapon, setWeapon: this.setWeapon.bind(this), activeSkill: this.state.activeSkill}), 
                React.createElement(SkillBoxList, {activeSkill: this.state.activeSkill, setActiveSkill: this.setActiveSkill.bind(this)})), 
            React.createElement("div", {className: "output"}, 
                React.createElement(SkillRanking, {activeSkill: this.state.activeSkill, setActiveSkill: this.setActiveSkill.bind(this), weapon: this.state.weapon})
            ));
    };
    return MHCalc;
}(React.Component));
/// <reference path="MHCalc.tsx" />
ReactDOM.render(React.createElement(MHCalc, null), document.getElementById('reactroot'));
//# sourceMappingURL=bundle.js.map