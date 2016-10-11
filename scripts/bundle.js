/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var MHCalc_1 = __webpack_require__(3);
	ReactDOM.render(React.createElement(MHCalc_1.MHCalc, null), document.body);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var SkillBoxList_1 = __webpack_require__(4);
	var Output_1 = __webpack_require__(8);
	var Weapon_1 = __webpack_require__(9);
	var MHCalc = (function (_super) {
	    __extends(MHCalc, _super);
	    function MHCalc() {
	        _super.call(this);
	        this.state = {
	            weapon: {
	                type: 'heavybowgun',
	                name: 'ベルダーキャノン',
	                level: 7
	            },
	            activeSkill: {}
	        };
	    }
	    MHCalc.prototype.setWeapon = function (type, name, level) {
	        this.setState({
	            weapon: { type: type, name: name, level: level }
	        });
	    };
	    MHCalc.prototype.setActiveSkill = function (skillBoxName, value) {
	        var activeSkill = this.state.activeSkill;
	        if (activeSkill[skillBoxName] === value) {
	            delete activeSkill[skillBoxName];
	        }
	        else {
	            activeSkill[skillBoxName] = value;
	        }
	        this.setState({
	            activeSkill: activeSkill
	        });
	    };
	    MHCalc.prototype.render = function () {
	        return React.createElement("div", {className: "MHCalc"}, React.createElement("div", {className: "input"}, React.createElement(Weapon_1.Weapon, {type: this.state.weapon.type, name: this.state.weapon.name, level: this.state.weapon.level, setWeapon: this.setWeapon.bind(this)}), React.createElement(SkillBoxList_1.SkillBoxList, {activeSkill: this.state.activeSkill, setActiveSkill: this.setActiveSkill.bind(this)})), React.createElement(Output_1.Output, {activeSkill: this.state.activeSkill, setActiveSkill: this.setActiveSkill.bind(this), weapon: this.state.weapon}));
	    };
	    return MHCalc;
	}(React.Component));
	exports.MHCalc = MHCalc;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var SkillBox_1 = __webpack_require__(5);
	var skilldata_1 = __webpack_require__(7);
	var SkillBoxList = (function (_super) {
	    __extends(SkillBoxList, _super);
	    function SkillBoxList() {
	        _super.apply(this, arguments);
	    }
	    SkillBoxList.prototype.render = function () {
	        var _this = this;
	        return React.createElement("ul", {className: 'SkillBoxList'}, skilldata_1.default.map(function (data) {
	            return React.createElement("li", {className: 'SkillBoxList-li'}, React.createElement(SkillBox_1.SkillBox, {key: data.name, name: data.name, value: _this.props.activeSkill[data.group] || null, action: _this.props.setActiveSkill.bind(null, data.group), skillButtonList: data.item}));
	        }));
	    };
	    return SkillBoxList;
	}(React.Component));
	exports.SkillBoxList = SkillBoxList;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var SkillButton_1 = __webpack_require__(6);
	var SkillBox = (function (_super) {
	    __extends(SkillBox, _super);
	    function SkillBox() {
	        _super.apply(this, arguments);
	    }
	    SkillBox.prototype.render = function () {
	        var _this = this;
	        return React.createElement("div", {className: "SkillBox"}, React.createElement("span", null, this.props.name), React.createElement("ul", {className: "SkillBox-ul"}, this.props.skillButtonList.map(function (skillButton) {
	            return React.createElement(SkillButton_1.SkillButton, {key: skillButton.label, name: skillButton.label, isChecked: _this.props.value == _this.props.name + skillButton.label, action: _this.props.action.bind(null, _this.props.name + skillButton.label)});
	        })));
	    };
	    return SkillBox;
	}(React.Component));
	exports.SkillBox = SkillBox;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
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
	exports.SkillButton = SkillButton;


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
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
	var skillData = [
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
	];
	skillData.forEach(function (value) {
	    value.group = value.group || value.name;
	});
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = skillData;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var skilldata_1 = __webpack_require__(7);
	var weaponData_1 = __webpack_require__(10);
	var Output = (function (_super) {
	    __extends(Output, _super);
	    function Output(props) {
	        var _this = this;
	        _super.call(this, props);
	        this.newArray = [];
	        skilldata_1.default.forEach(function (skill) {
	            skill.item.forEach(function (item) {
	                _this.newArray.push({
	                    name: skill.name + item.label,
	                    group: skill.group,
	                    value: item.value,
	                    effect: skill.effect,
	                    action: props.setActiveSkill.bind(null, skill.group, skill.name + item.label)
	                });
	            });
	        });
	    }
	    Output.prototype.render = function () {
	        var _this = this;
	        var wep = weaponData_1.default[this.props.weapon.type][this.props.weapon.name][this.props.weapon.level];
	        var weapon = {
	            power: wep[0],
	            affinity: wep[1],
	            mult: this.props.weapon.type === 'lightbowgun' ? 1.3 : 1.5
	        };
	        var skill = {
	            power: 0,
	            mult: 1,
	            affinity: 0
	        };
	        var activeSkillList = this.newArray.filter(function (item) {
	            return _this.props.activeSkill[item.group] === item.name;
	        });
	        activeSkillList.forEach(function (item) {
	            item.effect(skill, item.value);
	        });
	        var orgPower = getAttackPower(weapon, skill);
	        var a = this.newArray.map(function (item) {
	            var skill = {
	                power: 0,
	                mult: 1,
	                affinity: 0
	            };
	            activeSkillList.forEach(function (item_1) {
	                if (item_1.group === item.group)
	                    return;
	                item_1.effect(skill, item_1.value);
	            });
	            var group = _this.props.activeSkill[item.group];
	            var a = {
	                name: item.name,
	                isActive: group === item.name,
	                action: item.action,
	                disappearance: group && group !== item.name ? group : '',
	                plus: null,
	                mult: null
	            };
	            if (_this.props.activeSkill[item.group] !== item.name) {
	                item.effect(skill, item.value);
	                var power = getAttackPower(weapon, skill);
	                a.plus = (power - orgPower) | 0;
	                a.mult = power / orgPower;
	            }
	            else {
	                var power = getAttackPower(weapon, skill);
	                a.plus = (orgPower - power) | 0;
	                a.mult = orgPower / power;
	            }
	            return a;
	        }).sort(function (a, b) {
	            return b.plus - a.plus || b.mult - a.mult;
	        } // || +b.isActive - +a.isActive
	         // || +b.isActive - +a.isActive
	        );
	        return React.createElement("table", {className: "Output"}, React.createElement("tr", null, React.createElement("th", null, "スキル"), React.createElement("th", null, "上昇値"), React.createElement("th", null, "倍率")), a.map(function (item) {
	            return React.createElement("tr", {key: item.name, onClick: item.action, className: item.isActive ? 'checked' : ''}, React.createElement("td", null, item.name, React.createElement("small", {style: { float: "right" }}, item.disappearance)), React.createElement("td", null, React.createElement("span", {className: "test", style: {
	                width: (item.plus < 0 ? 0 : item.plus) + 'px'
	            }}), ' ', item.plus), React.createElement("td", null, item.mult.toFixed(3)));
	        }));
	    };
	    return Output;
	}(React.Component));
	exports.Output = Output;
	function getAttackPower(weapon, skill) {
	    var power = weapon.power, affinity = Math.min(Math.max(weapon.affinity + skill.affinity, -100), 100), superAffinity = 1.25 - 1;
	    if (skill.parts) {
	        power += Math.floor(power * (skill.parts - 1));
	    }
	    if (skill.superAffinity) {
	        superAffinity = skill.superAffinity - 1;
	    }
	    // return (power + skill.power) * weapon.mult * skill.mult * (1 + affinity / 100 * superAffinity);
	    return (power + skill.power) * skill.mult * (1 + affinity / 100 * superAffinity);
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var weaponData_1 = __webpack_require__(10);
	function getFirstKey(obj) {
	    for (var key in obj) {
	        if (obj.hasOwnProperty(key)) {
	            return key;
	        }
	    }
	    return null;
	}
	var Weapon = (function (_super) {
	    __extends(Weapon, _super);
	    function Weapon() {
	        _super.apply(this, arguments);
	    }
	    Weapon.prototype.setType = function () {
	        var type = this.refs['type'].value;
	        var name = getFirstKey(weaponData_1.default[type]);
	        var level = weaponData_1.default[type][name].length - 1;
	        this.props.setWeapon(type, name, level);
	    };
	    Weapon.prototype.setName = function () {
	        var type = this.props.type;
	        var name = this.refs['name'].value;
	        var level = weaponData_1.default[type][name].length - 1;
	        this.props.setWeapon(type, name, level);
	    };
	    Weapon.prototype.setLevel = function () {
	        var type = this.props.type;
	        var name = this.props.name;
	        var level = +this.refs['level'].value;
	        this.props.setWeapon(type, name, level);
	    };
	    Weapon.prototype.render = function () {
	        return React.createElement("div", {className: "Weapon"}, React.createElement("select", {ref: 'type', value: this.props.type, onChange: this.setType.bind(this)}, React.createElement("option", {value: "lightbowgun"}, "ライト"), React.createElement("option", {value: "heavybowgun"}, "ヘビィ")), React.createElement("select", {ref: 'name', value: this.props.name, onChange: this.setName.bind(this)}, Object.keys(weaponData_1.default[this.props.type]).map(function (value) {
	            return React.createElement("option", {value: value}, value);
	        })), React.createElement("select", {ref: 'level', value: this.props.level, onChange: this.setLevel.bind(this)}, weaponData_1.default[this.props.type][this.props.name].map(function (value, i) {
	            return React.createElement("option", {value: i}, "LV", i + 1);
	        })), React.createElement("p", null, weaponData_1.default[this.props.type][this.props.name][this.props.level][0], "/", weaponData_1.default[this.props.type][this.props.name][this.props.level][1], "%"));
	    };
	    return Weapon;
	}(React.Component));
	exports.Weapon = Weapon;


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    lightbowgun: {
	        "ベルダーバレット": [
	            [80, 0, "なし", "普通", "中", 0, 0, [4, 3, 4, 3, 3, -3, -3, -2, -2, -1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0]],
	            [90, 0, "なし", "普通", "中", 0, 0, [4, 4, 5, 3, 3, -3, -3, -2, -2, 1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0]],
	            [100, 0, "なし", "普通", "中", 0, 0, [5, 5, 6, 3, 3, -3, -3, -2, -2, 1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0]],
	            [110, 0, "なし", "普通", "中", 0, 0, [5, 5, 6, 4, 4, -3, -3, -2, -2, 1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0]],
	            [130, 0, "なし", "普通", "中", 0, 0, [5, 5, 6, 4, 4, -3, -3, -2, -2, 2, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 4, 0]],
	            [150, 0, "なし", "普通", "中", 0, 0, [6, 6, 7, 4, 4, -3, -4, -3, -3, 2, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 4, 0]],
	            [190, 0, "なし", "普通", "中", 0, 0, [6, 6, 7, 5, 5, -3, -4, -3, -3, 2, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 4, 0]],
	            [210, 0, "なし", "普通", "中", 0, 0, [6, 6, 7, 5, 5, 3, -4, -3, -3, 2, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 4, 0]]
	        ],
	        "ハンターライフル": [
	            [70, 0, "なし", "普通", "やや小", 0, 0, [4, 4, 5, 3, -3, -3, 3, -3, -3, -2, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 0, 0, 0]],
	            [80, 0, "なし", "普通", "やや小", 0, 0, [4, 4, 5, 3, -3, -3, 3, -3, -3, -2, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 0, 0, 0]],
	            [110, 0, "なし", "普通", "やや小", 0, 0, [5, 5, 6, 3, -3, -3, 3, -3, -3, -2, -1, -1, -1, -1, -1, 2, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 3, 3, 0, 0]],
	            [120, 0, "なし", "普通", "やや小", 0, 0, [5, 5, 6, 3, -3, -3, 3, -3, -3, -2, -1, -1, -2, -1, -1, 2, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 3, 3, 0, 0]],
	            [140, 0, "なし", "普通", "やや小", 0, 0, [5, 5, 6, 4, -3, -3, 4, -3, -3, -2, -1, -1, -2, -1, -1, 2, 0, 2, 0, 0, 0, 0, 0, 3, 0, 0, 4, 4, 0, 0]],
	            [170, 0, "なし", "普通", "やや小", 0, 0, [6, 6, 7, 4, 3, -3, 4, 3, -3, -2, -1, -1, -2, -1, -1, 2, 0, 2, 0, 0, 0, 0, 0, 3, 1, 0, 4, 4, 0, 0]],
	            [200, 0, "なし", "普通", "やや小", 0, 0, [6, 6, 7, 4, 3, -3, 4, 3, -3, -2, -1, -1, -2, -1, -1, 2, 0, 3, 1, 0, 0, 0, 0, 3, 1, 0, 4, 4, 0, 0]],
	            [200, 0, "なし", "普通", "やや小", 0, 0, [6, 6, 7, 4, 3, -3, 4, 3, -3, -2, -1, -1, -2, -1, -1, 2, 0, 3, 1, 0, 0, 0, 0, 3, 1, 0, 4, 4, 0, 0]]
	        ],
	        "クロスボウガン": [
	            [80, 0, "なし", "普通", "大", 0, 0, [4, 3, 4, -3, -3, -3, 3, -3, -3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [90, 0, "なし", "普通", "大", 0, 0, [4, 4, 5, -3, -3, -3, 3, -3, -3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [100, 0, "なし", "普通", "大", 0, 0, [5, 5, 6, -3, -3, -3, 4, -4, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [110, 0, "なし", "普通", "大", 0, 0, [5, 5, 6, -3, -3, -3, 4, -4, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [130, 0, "なし", "普通", "大", 0, 0, [5, 5, 6, -3, -3, -3, 5, 4, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [150, 0, "なし", "普通", "大", 0, 0, [6, 6, 7, 4, -4, -3, 5, 4, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 3, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [200, 0, "なし", "普通", "大", 0, 0, [6, 6, 7, 4, 4, -3, 6, 5, 4, -1, -1, -1, 1, 1, -1, 2, 0, 0, 0, 3, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [220, 0, "なし", "普通", "大", 0, 0, [6, 6, 7, 4, 4, 3, 6, 5, 4, -1, -1, -1, 1, 1, 1, 2, 0, 0, 0, 3, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0]]
	        ],
	        "ショットボウガン・白": [
	            [90, 10, "なし", "普通", "中", 0, 10, [5, 6, -6, 2, -2, -2, 4, 5, -5, 1, -1, -1, 1, -1, -1, 2, 1, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 3, 0]],
	            [110, 10, "なし", "普通", "中", 0, 10, [5, 6, -6, 3, -2, -2, 4, 5, -5, 1, -1, -1, 1, -1, -1, 2, 1, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 3, 0]],
	            [120, 10, "なし", "普通", "中", 0, 10, [6, 7, -7, 3, -2, -2, 4, 5, -5, 1, -1, -1, 1, -1, -1, 2, 1, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 3, 0]],
	            [150, 10, "なし", "普通", "中", 0, 10, [7, 8, -8, 4, -3, -3, 5, 6, -6, 2, -2, -2, 1, -1, -1, 2, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 4, 0]],
	            [160, 10, "なし", "普通", "中", 0, 10, [8, 9, -9, 5, -4, -4, 5, 6, -6, 2, -2, -2, 1, -1, -1, 2, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 4, 0]],
	            [200, 10, "なし", "普通", "中", 0, 10, [9, 9, -9, 5, -4, -4, 5, 6, -6, 2, -2, -2, 1, -1, -1, 2, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 4, 0]]
	        ],
	        "ストライプシェル": [
	            [100, 0, "左/小", "やや遅い", "やや小", 0, 10, [6, 5, -7, -3, -3, -3, 4, 4, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0]],
	            [110, 0, "左/小", "やや遅い", "やや小", 0, 10, [6, 5, -7, -3, -3, -3, 4, 5, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0]],
	            [140, 0, "左/小", "やや遅い", "やや小", 0, 20, [6, 5, -7, -3, -3, -3, 4, 6, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0]],
	            [170, 0, "左/小", "やや遅い", "やや小", 0, 20, [7, 6, 8, -4, -3, -3, 4, 6, 4, -2, -1, -1, 1, 1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0]],
	            [200, 0, "左/小", "やや遅い", "やや小", 0, 30, [7, 6, 8, -4, -3, -3, 4, 6, 5, -2, -1, -1, 1, 1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0]]
	        ],
	        "クゥイルバースト": [
	            [100, 0, "なし", "普通", "やや小", 0, 0, [4, 5, -2, 2, 3, -3, -3, -3, -3, -1, -2, -2, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [110, 0, "なし", "普通", "やや小", 0, 0, [4, 5, -2, 2, 3, -3, -3, -3, -3, -1, -2, -2, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [150, 0, "なし", "普通", "やや小", 0, 0, [5, 6, -2, 3, 4, 3, -4, -4, -4, 1, -2, -2, -1, -1, -1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [170, 0, "なし", "普通", "やや小", 0, 0, [5, 6, 2, 3, 4, 3, -4, -4, -4, 2, -2, -2, -1, -1, -1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [200, 0, "なし", "普通", "やや小", 0, 0, [5, 6, 3, 3, 6, 4, -4, -4, -4, 2, 2, -2, -1, -1, -1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [210, 0, "なし", "普通", "やや小", 0, 0, [5, 6, 3, 3, 6, 5, -4, -4, -4, 2, 2, 2, -1, -1, -1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0]]
	        ],
	        "クックアンガ―": [
	            [120, 0, "なし", "やや遅い", "中", 0, 8, [8, 8, 6, -3, 2, -2, -3, 3, -3, -2, 1, -1, -1, 1, -1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [130, 0, "なし", "やや遅い", "中", 0, 8, [9, 8, 6, -4, 3, -3, -3, 3, -3, -2, 1, -1, -1, 1, -1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [140, 0, "なし", "やや遅い", "中", 0, 8, [9, 9, 6, -5, 4, -4, -3, 3, -3, -2, 1, -1, -1, 1, -1, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [170, 0, "なし", "やや遅い", "中", 0, 10, [9, 9, 7, -6, 5, -5, -4, 4, -4, -2, 2, -2, -1, 1, -1, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [190, 0, "なし", "やや遅い", "中", 0, 10, [9, 9, 7, -6, 6, -6, -4, 4, -4, -2, 2, -2, -2, 2, -2, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [200, 0, "なし", "やや遅い", "中", 0, 12, [9, 9, 7, -6, 6, -6, -5, 5, -5, -2, 2, -2, -2, 2, -2, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
	        ],
	        "ユクモノ弩": [
	            [110, 0, "なし", "普通", "中", 0, 0, [4, 5, -4, 3, -2, -2, 2, -3, -3, 1, -1, -1, -1, -1, -1, 2, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0]],
	            [120, 0, "なし", "普通", "中", 0, 0, [5, 5, -5, 3, -2, -2, 2, -3, -3, 1, -1, -1, -1, -1, -1, 2, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0]],
	            [140, 0, "なし", "普通", "中", 0, 0, [5, 5, -5, 3, -2, -2, 2, -3, -3, 1, -1, -1, -1, -1, -1, 2, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0]],
	            [180, 0, "なし", "普通", "中", 0, 0, [6, 6, -6, 4, -3, -3, 3, -4, -4, 2, -2, -1, -1, -1, -1, 2, 0, 3, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0]],
	            [200, 0, "なし", "普通", "中", 0, 0, [7, 6, -7, 4, -3, -3, 3, -4, -4, 2, -2, -1, -1, -1, -1, 2, 0, 3, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0]]
	        ],
	        "ヤクトバレット": [
	            [140, 10, "なし", "普通", "中", 0, 0, [5, 6, 6, -4, -4, -4, 5, 4, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 3, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [150, 10, "なし", "普通", "中", 0, 0, [5, 6, 7, -4, -4, -4, 6, 4, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 3, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [190, 10, "なし", "普通", "中", 1, 0, [6, 6, 8, -5, -4, -4, 6, 5, 4, -2, -2, -2, 1, 1, -1, 2, 0, 0, 0, 3, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [210, 10, "なし", "普通", "中", 1, 0, [6, 6, 8, -5, -4, -4, 6, 5, 4, -2, -2, -2, 1, 1, 1, 2, 0, 0, 0, 3, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0]]
	        ],
	        "ショットボウガン・蛇": [
	            [130, 0, "なし", "やや遅い", "やや小", 0, 0, [5, 4, 5, 3, 3, -3, 4, 4, -4, -1, -1, -1, -1, -1, -1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [150, 0, "なし", "やや遅い", "やや小", 0, 0, [5, 4, 5, 3, 3, -3, 4, 4, -4, -1, -1, -1, -1, -1, -1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [180, 0, "なし", "やや遅い", "やや小", 0, 0, [6, 5, 6, 4, 4, -4, 5, 5, -5, -1, -1, -1, -1, -1, -1, 2, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [200, 0, "なし", "やや遅い", "やや小", 0, 0, [6, 5, 6, 4, 4, -4, 5, 5, -5, -1, -1, -1, -1, -1, -1, 2, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
	        ],
	        "ウロコトルネード": [
	            [130, 0, "右/小", "やや遅い", "中", 0, 0, [5, 4, 5, -2, -3, -4, 4, -4, -3, -1, 2, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [150, 0, "右/小", "やや遅い", "中", 0, 0, [6, 4, 6, -3, -4, -4, 4, 4, -3, -1, 2, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [180, 0, "右/小", "やや遅い", "中", 0, 0, [7, 5, 7, -4, -5, -4, 5, 4, 3, -1, 2, -1, -1, 1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [200, 0, "右/小", "やや遅い", "中", 0, 0, [8, 5, 8, -5, -6, -4, 6, 5, 3, -1, 2, -1, -1, 1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]]
	        ],
	        "フルットシリンジ": [
	            [120, 0, "なし", "極速", "中", 0, 0, [7, 6, 6, 3, 3, -3, 3, -3, -3, 2, 2, -1, -1, -1, -1, 2, 3, 0, 0, 3, 1, 3, 1, 0, 0, 0, 0, 2, 0, 0]],
	            [140, 0, "なし", "極速", "中", 0, 0, [7, 6, 6, 4, 3, -3, 3, -3, -3, 2, 2, -1, -1, -1, -1, 2, 3, 0, 0, 3, 1, 3, 1, 0, 0, 0, 0, 2, 0, 0]],
	            [160, 0, "なし", "極速", "中", 0, 0, [8, 7, 7, 4, 4, -4, 4, -4, -4, 2, 2, -1, -1, -1, -1, 2, 3, 0, 0, 3, 2, 3, 2, 0, 0, 0, 0, 4, 0, 0]],
	            [200, 0, "なし", "極速", "中", 0, 0, [8, 7, 7, 5, 4, -4, 4, -4, -4, 2, 2, -1, -1, -1, -1, 2, 3, 0, 0, 3, 2, 3, 2, 0, 0, 0, 0, 4, 0, 0]],
	            [210, 0, "なし", "極速", "中", 0, 0, [8, 8, 8, 6, 5, -5, 5, -5, -5, 2, 2, -1, -1, -1, -1, 2, 3, 0, 0, 3, 2, 3, 2, 0, 0, 0, 0, 4, 0, 0]]
	        ],
	        "ロアルスリング": [
	            [120, 0, "なし", "普通", "中", 0, 10, [4, 4, 4, 2, -2, -3, 5, -4, -4, -1, -1, -1, -1, -1, -1, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0]],
	            [140, 0, "なし", "普通", "中", 0, 10, [5, 4, 5, 3, -3, -3, 6, -5, -5, -1, -1, -1, -1, -1, -1, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0]],
	            [150, 0, "なし", "普通", "中", 0, 15, [6, 4, 6, 4, -4, -4, 6, -5, -5, -1, -1, -1, -1, -1, -1, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0]],
	            [190, 0, "なし", "普通", "中", 0, 15, [7, 5, 7, 5, -5, -4, 6, -6, -6, -1, -1, -1, -1, -1, -1, 3, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0]],
	            [200, 0, "なし", "普通", "中", 0, 15, [8, 5, 8, 6, -6, -4, 6, -6, -6, -1, -1, -1, -1, -1, -1, 3, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0]]
	        ],
	        "テイルストリング": [
	            [130, 0, "なし", "普通", "中", 0, 0, [9, 9, -9, 3, 2, -2, 4, -4, -4, -2, -1, -1, -1, -1, -1, 3, 3, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 4, 0]],
	            [160, 0, "なし", "普通", "中", 0, 0, [9, 9, -9, 3, 2, -2, 4, -4, -4, -2, -1, -1, -1, -1, -1, 3, 3, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 4, 0]],
	            [170, 0, "なし", "普通", "中", 0, 0, [9, 9, 9, 4, 3, -3, 5, -5, -5, -2, -1, -1, -1, -1, -1, 3, 3, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 5, 0]],
	            [190, 0, "なし", "普通", "中", 0, 0, [9, 9, 9, 4, 3, -3, 5, -5, -5, -2, -1, -1, -1, -1, -1, 3, 3, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 5, 0]],
	            [200, 0, "なし", "普通", "中", 0, 0, [9, 9, 9, 4, 3, -3, 5, -5, -5, -2, -1, -1, -1, -1, -1, 3, 3, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 5, 0]]
	        ],
	        "ヒドゥンゲイズ": [
	            [120, 40, "なし", "やや速い", "中", 1, 0, [4, 4, -5, 3, 3, 6, -3, -3, -3, -2, -1, -1, -2, -1, -1, 0, 0, 0, 0, 2, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0]],
	            [130, 40, "なし", "やや速い", "中", 1, 0, [5, 5, -6, 4, 4, 6, -3, -3, -3, -2, -1, -1, -2, -1, -1, 0, 0, 0, 0, 2, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0]],
	            [140, 40, "なし", "やや速い", "中", 1, 0, [5, 5, -6, 4, 5, 6, -4, -4, -4, -2, -1, -1, -2, -1, -1, 0, 0, 0, 0, 3, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0]],
	            [150, 40, "なし", "やや速い", "中", 1, 0, [6, 6, -7, 4, 6, 6, -4, -4, -4, -2, -1, -1, -2, -1, -1, 0, 0, 0, 0, 3, 1, 0, 0, 3, 2, 0, 0, 0, 0, 0]],
	            [190, 40, "なし", "やや速い", "中", 1, 0, [7, 6, -8, 4, 6, 6, -4, -4, -4, -2, -1, -1, -2, -1, -1, 0, 0, 0, 0, 3, 2, 0, 0, 3, 2, 0, 0, 0, 0, 0]]
	        ],
	        "鬼ヶ島": [
	            [130, 0, "なし", "普通", "やや小", 1, 0, [6, 3, 7, -2, -2, 2, -2, -3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 0, 0, 2, 1, 2, 1, 3, 2, 3, 0, 0, 0, 2]],
	            [150, 0, "なし", "普通", "やや小", 1, 0, [6, 3, 7, -2, -2, 2, -2, -3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 0, 0, 2, 1, 2, 1, 3, 2, 3, 0, 0, 0, 2]],
	            [160, 0, "なし", "普通", "やや小", 1, 0, [7, 4, 8, -2, -2, 3, -2, -3, 4, 3, 3, 3, 3, 3, 3, 2, 1, 0, 0, 2, 1, 2, 1, 3, 2, 4, 0, 0, 0, 2]],
	            [190, 0, "なし", "普通", "やや小", 1, 0, [7, 4, 8, -2, -2, 3, -2, -3, 4, 3, 3, 3, 3, 3, 3, 2, 1, 0, 0, 2, 1, 2, 1, 3, 2, 4, 0, 0, 0, 2]],
	            [200, 0, "なし", "普通", "やや小", 1, 0, [7, 4, 8, -2, -2, 3, -2, -3, 4, 3, 3, 3, 3, 3, 3, 2, 1, 0, 0, 2, 1, 2, 1, 3, 2, 4, 0, 0, 0, 2]]
	        ],
	        "アイルーラグドール": [
	            [120, 0, "左/大", "極速", "中", 3, 0, [3, 5, 7, 3, -3, -3, 4, -4, -4, 1, 1, 1, -1, -1, -1, 3, 3, 2, 1, 2, 1, 2, 1, 0, 0, 4, 0, 0, 0, 0]],
	            [130, 0, "左/大", "極速", "中", 3, 0, [3, 5, 8, 3, -3, -3, 4, -4, -4, 1, 1, 1, -1, -1, -1, 3, 3, 2, 1, 2, 1, 2, 1, 0, 0, 4, 0, 0, 0, 0]],
	            [140, 0, "左/大", "極速", "中", 3, 0, [4, 5, 8, 3, -3, -3, 4, -4, -4, 1, 1, 1, -1, -1, -1, 3, 3, 2, 1, 2, 1, 2, 1, 0, 0, 4, 0, 0, 0, 0]],
	            [170, 0, "左/大", "極速", "中", 3, 0, [5, 5, 8, 3, -3, -3, 4, -4, -4, 2, 2, 2, -2, -2, -2, 3, 3, 3, 1, 3, 1, 3, 1, 0, 0, 5, 0, 0, 0, 0]],
	            [190, 0, "左/大", "極速", "中", 3, 0, [6, 5, 9, 3, -3, -3, 4, -4, -4, 2, 2, 2, -2, -2, -2, 3, 3, 3, 1, 3, 1, 3, 1, 0, 0, 6, 0, 0, 0, 0]]
	        ],
	        "メラルーラグドール": [
	            [120, 30, "右/大", "極速", "中", 0, 0, [3, 5, 7, 3, -3, -3, 4, -4, -4, 1, 1, 1, -1, -1, -1, 3, 3, 2, 1, 2, 1, 2, 1, 0, 0, 4, 0, 0, 0, 0]],
	            [130, 30, "右/大", "極速", "中", 0, 0, [3, 5, 8, 3, -3, -3, 4, -4, -4, 1, 1, 1, -1, -1, -1, 3, 3, 2, 1, 2, 1, 2, 1, 0, 0, 4, 0, 0, 0, 0]],
	            [150, 30, "右/大", "極速", "中", 0, 0, [5, 5, 8, 3, -3, -3, 4, -4, -4, 2, 2, 2, -2, -2, -2, 3, 3, 3, 1, 3, 1, 3, 1, 0, 0, 5, 0, 0, 0, 0]],
	            [180, 30, "右/大", "極速", "中", 0, 0, [5, 5, 8, 3, -3, -3, 4, -4, -4, 2, 2, 2, -2, -2, -2, 3, 3, 3, 1, 3, 1, 3, 1, 0, 0, 5, 0, 0, 0, 0]],
	            [190, 30, "右/大", "極速", "中", 0, 0, [6, 5, 9, 3, -3, -3, 4, -4, -4, 2, 2, 2, -2, -2, -2, 3, 3, 3, 1, 3, 1, 3, 1, 0, 0, 6, 0, 0, 0, 0]]
	        ],
	        "吹吹茶釜": [
	            [160, 0, "なし", "やや速い", "中", 0, 0, [9, -5, -6, -2, 2, 3, 5, 5, 5, -1, 1, 1, -1, -1, 1, 2, 1, 3, 0, 3, 0, 3, 2, 1, 1, 0, 0, 0, 0, 0]],
	            [190, 0, "なし", "やや速い", "中", 0, 0, [9, -7, -8, -2, 3, 3, 6, 5, 5, -1, 1, 1, -1, -1, 1, 2, 1, 3, 0, 3, 0, 3, 2, 1, 1, 0, 0, 0, 0, 0]],
	            [210, 0, "なし", "やや速い", "中", 0, 0, [9, -8, -9, -2, 3, 4, 6, 6, 6, -2, 2, 2, -2, -2, 2, 2, 1, 4, 0, 4, 0, 4, 3, 2, 2, 0, 0, 0, 0, 0]]
	        ],
	        "エビィーガン": [
	            [160, 0, "なし", "普通", "中", 0, 0, [6, 6, 9, 3, 2, 2, 4, 2, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1, 3, 4, 0, 3, 0]],
	            [200, 0, "なし", "普通", "中", 0, 0, [7, 7, 9, 3, 3, 3, 5, 2, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1, 3, 4, 0, 3, 0]],
	            [210, 0, "なし", "普通", "中", 0, 0, [8, 8, 9, 4, 3, 3, 5, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1, 3, 4, 0, 3, 0]]
	        ],
	        "クロオビボウガン": [
	            [130, 0, "なし", "極速", "中", 1, 0, [7, 7, 9, 4, -4, -4, 5, -5, -5, 1, -1, -1, 1, -1, -1, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 2, 0, 0]],
	            [150, 0, "なし", "極速", "中", 1, 0, [8, 8, 9, 4, -4, -4, 5, -5, -5, 1, -1, -1, 1, -1, -1, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 2, 0, 0]],
	            [190, 0, "なし", "極速", "中", 1, 0, [9, 9, 9, 5, -5, -5, 6, -6, -6, 1, -1, -1, 1, -1, -1, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 2, 0, 0]],
	            [210, 0, "なし", "極速", "中", 1, 0, [9, 9, 9, 5, -5, -5, 6, -6, -6, 1, -1, -1, 1, -1, -1, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 2, 0, 0]]
	        ],
	        "フィオシダーレ": [
	            [140, 10, "左/小", "やや遅い", "やや小", 0, 0, [5, 5, 6, 4, 4, 3, -4, -4, -4, 1, -1, -1, -1, 1, -1, 2, 0, 2, 1, 0, 0, 2, 1, 2, 1, 0, 0, 0, 2, 0]],
	            [150, 10, "左/小", "やや遅い", "やや小", 0, 0, [6, 6, 7, 4, 4, 3, -4, -4, -4, 1, -1, -1, -1, 1, -1, 2, 0, 2, 1, 0, 0, 2, 1, 2, 1, 0, 0, 0, 2, 0]],
	            [180, 15, "左/小", "やや遅い", "やや小", 0, 0, [9, 9, 9, 5, 5, 4, -5, -4, -4, 1, -2, -1, -1, 1, -1, 2, 0, 2, 1, 0, 0, 2, 1, 3, 1, 0, 0, 0, 3, 0]],
	            [200, 15, "左/小", "やや遅い", "やや小", 0, 0, [9, 9, 9, 6, 6, 5, -5, -4, -4, 1, -2, -1, -1, 1, -1, 2, 0, 2, 1, 0, 0, 2, 1, 3, 1, 0, 0, 0, 3, 0]]
	        ],
	        "ビートスナイパー": [
	            [140, 0, "なし", "普通", "中", 0, 10, [4, 4, 6, 3, 3, 3, -4, 4, -4, 1, -1, -1, -1, -1, -1, 2, 1, 2, 1, 2, 1, 2, 1, 0, 0, 2, 2, 0, 0, 2]],
	            [160, 0, "なし", "普通", "中", 0, 20, [4, 5, 7, 4, 4, 4, -4, 4, -4, 1, -1, -1, -1, -1, -1, 2, 1, 2, 1, 2, 1, 2, 1, 0, 0, 3, 3, 0, 0, 3]],
	            [190, 0, "なし", "普通", "中", 0, 20, [4, 6, 8, 4, 4, 4, -4, 4, -4, 1, -1, -1, -1, -1, -1, 2, 1, 2, 1, 2, 1, 2, 1, 0, 0, 3, 3, 0, 0, 3]],
	            [200, 0, "なし", "普通", "中", 0, 20, [4, 6, 9, 4, 4, 4, -4, 4, -4, 1, -1, -1, -1, -1, -1, 2, 1, 2, 1, 2, 1, 2, 1, 0, 0, 3, 3, 0, 0, 3]]
	        ],
	        "春夜鯉砲": [
	            [130, 0, "左右/小", "普通", "やや小", 2, 0, [5, 4, 5, 3, 3, -3, 4, 4, 3, -1, -1, -1, -1, -1, -1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 0]],
	            [150, 0, "左右/小", "普通", "やや小", 2, 0, [6, 5, 6, 4, 4, -4, 5, 4, 3, -1, -1, -1, -1, -1, -1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 0]],
	            [180, 0, "左右/小", "普通", "やや小", 2, 0, [7, 6, 7, 4, 4, -4, 5, 5, 4, -1, -1, -1, -1, -1, -1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 3, 0]],
	            [200, 0, "左右/小", "普通", "やや小", 2, 0, [8, 6, 8, 5, 5, -5, 6, 5, 5, -1, -1, -1, -1, -1, -1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 3, 0]]
	        ],
	        "気艦銃": [
	            [140, 0, "左右/小", "やや速い", "大", 1, 0, [5, 5, 6, -3, -4, -4, 2, 6, 6, 1, 1, 1, 1, -1, -1, 2, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [150, 0, "左右/小", "やや速い", "大", 1, 0, [6, 6, 7, -3, -4, -4, 2, 6, 6, 1, 1, 1, 1, -1, -1, 2, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [180, 0, "左右/小", "やや速い", "大", 1, 0, [7, 7, 8, -3, -4, -4, 2, 6, 6, 2, 2, 2, 1, -1, -1, 2, 1, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0]],
	            [200, 0, "左右/小", "やや速い", "大", 1, 0, [8, 8, 9, -3, -4, -4, 2, 6, 6, 2, 2, 2, 1, -1, -1, 2, 1, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0]]
	        ],
	        "ビューベル": [
	            [100, 10, "なし", "やや速い", "やや小", 0, 0, [4, 4, 5, 6, 6, 6, -4, -4, -4, 1, -1, -1, -1, 1, -1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0]],
	            [120, 10, "なし", "やや速い", "やや小", 0, 0, [4, 4, 5, 7, 6, 6, -4, -4, -4, 1, -1, -1, -1, 1, -1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0]],
	            [150, 10, "なし", "やや速い", "やや小", 0, 0, [6, 5, 5, 8, 7, 7, -5, -5, -5, 1, -1, -1, -1, 1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0]],
	            [160, 10, "なし", "やや速い", "やや小", 0, 0, [6, 5, 5, 9, 8, 8, -5, -5, -5, 1, -1, -1, -1, 1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0]]
	        ],
	        "エルドラマスケット": [
	            [130, 10, "なし", "やや遅い", "中", 3, 0, [3, 3, 3, -3, 3, -3, 2, -2, -2, 3, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [150, 15, "なし", "やや遅い", "中", 3, 0, [4, 4, 3, -4, 4, -4, 3, -3, -3, 3, 2, 2, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [190, 20, "なし", "やや遅い", "中", 3, 0, [5, 5, 3, -5, 5, -5, 5, -5, -5, 4, 3, 3, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [210, 30, "なし", "やや遅い", "中", 3, 0, [6, 6, 3, -6, 6, -6, 5, -5, -5, 4, 4, 4, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
	        ],
	        "オブシドバレット": [
	            [150, 0, "なし", "やや遅い", "大", 0, 10, [6, 6, 7, -3, -3, -3, 5, 5, 4, 1, 1, 1, -1, 1, -2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1]],
	            [170, 0, "なし", "やや遅い", "大", 0, 15, [7, 6, 8, -4, -3, -4, 5, 5, 4, 1, 1, 1, -1, 1, -2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1]],
	            [200, 0, "なし", "やや遅い", "大", 0, 20, [8, 7, 9, -5, -4, -5, 6, 6, 4, 2, 1, 1, -1, 1, -2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2]],
	            [220, 0, "なし", "やや遅い", "大", 0, 20, [9, 8, 9, -6, -5, -6, 6, 6, 4, 2, 1, 1, -1, 1, -2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2]]
	        ],
	        "ド【烏】": [
	            [150, 5, "なし", "普通", "中", 0, 0, [5, 6, 7, -2, 3, -2, -3, 3, -3, -2, -2, 2, -1, -1, 2, 3, 1, 3, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [160, 5, "なし", "普通", "中", 0, 0, [5, 6, 7, -2, 3, -2, -3, 3, -3, -2, -2, 2, -1, -1, 2, 3, 1, 3, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [170, 5, "なし", "普通", "中", 0, 0, [7, 8, 9, -3, 4, -3, -4, 4, -4, -2, -2, 2, -1, -1, 2, 3, 1, 3, 1, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0]],
	            [190, 5, "なし", "普通", "中", 0, 0, [7, 8, 9, -3, 4, -3, -4, 4, -4, -2, -2, 2, -1, -1, 2, 3, 1, 3, 1, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0]],
	            [210, 5, "なし", "普通", "中", 0, 0, [7, 8, 9, -3, 4, -3, -4, 4, -4, -2, -2, 2, -1, -1, 2, 3, 1, 3, 1, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0]]
	        ],
	        "ヴァルキリーファイア": [
	            [120, 0, "なし", "普通", "中", 0, 0, [4, 4, 5, 2, -2, -2, 4, 5, -4, 2, -2, -2, 1, -1, -1, 2, 0, 2, 1, 2, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [130, 0, "なし", "普通", "中", 0, 0, [5, 5, 6, 3, -3, -3, 4, 5, -4, 2, -2, -2, 1, -1, -1, 2, 0, 2, 1, 2, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [140, 0, "なし", "普通", "中", 0, 0, [6, 6, 7, 4, -4, -4, 4, 5, -4, 2, -2, -2, 1, -1, -1, 2, 0, 2, 1, 2, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [150, 0, "なし", "普通", "中", 0, 0, [7, 7, 8, 5, -5, -5, 4, 5, -4, 2, -2, -2, 1, -1, -1, 2, 0, 2, 1, 2, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [170, 0, "なし", "普通", "中", 0, 0, [8, 8, 9, 5, -5, -5, 5, 5, -5, 2, -2, -2, 1, -1, -1, 2, 0, 3, 1, 3, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0]],
	            [200, 0, "なし", "普通", "中", 0, 0, [9, 9, 9, 5, -5, -5, 5, 5, -5, 2, -2, -2, 1, -1, -1, 2, 0, 3, 1, 3, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0]],
	            [210, 0, "なし", "普通", "中", 0, 0, [9, 9, 9, 5, -5, -5, 5, 5, -5, 2, -2, -2, 1, -1, -1, 2, 0, 3, 1, 3, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0]],
	            [220, 0, "なし", "普通", "中", 0, 0, [9, 9, 9, 5, -5, -5, 5, 5, -5, 2, -2, -2, 1, -1, -1, 2, 0, 3, 1, 3, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0]]
	        ],
	        "火竜砲": [
	            [140, 0, "なし", "普通", "中", 0, 0, [5, 5, 5, 3, 3, -3, 3, -3, -3, 1, 1, -1, 1, 1, -1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [150, 0, "なし", "普通", "中", 0, 0, [5, 5, 6, 3, 3, -3, 3, -3, -3, 1, 1, -1, 1, 1, -1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [170, 0, "なし", "普通", "中", 0, 0, [6, 6, 7, 4, 4, -4, 4, -4, -4, 1, 1, -1, 1, 1, -1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [190, 0, "なし", "普通", "中", 0, 0, [7, 7, 8, 4, 4, -4, 4, -4, -4, 1, 1, -1, 1, 1, -1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [200, 0, "なし", "普通", "中", 0, 0, [7, 7, 8, 4, 4, -4, 4, -4, -4, 1, 1, -1, 1, 1, -1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [210, 0, "なし", "普通", "中", 0, 0, [8, 8, 9, 5, 5, -5, 5, -5, -5, 1, 1, -1, 1, 1, 1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]]
	        ],
	        "王弩ライカン": [
	            [150, 10, "なし", "普通", "中", 1, 0, [6, 7, 8, -2, 5, -2, -3, 3, -3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0]],
	            [170, 10, "なし", "普通", "中", 1, 0, [6, 7, 8, -3, 6, -3, -3, 3, -3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0]],
	            [190, 10, "なし", "普通", "中", 1, 0, [7, 8, 9, -4, 6, -4, -4, 4, -4, -2, -2, -2, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0]],
	            [200, 10, "なし", "普通", "中", 1, 0, [7, 8, 9, -5, 6, -5, -4, 4, -4, -2, -2, -2, 1, -1, -1, 2, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0]],
	            [220, 10, "なし", "普通", "中", 1, 0, [8, 9, 9, -5, 6, -5, -4, 4, -4, -2, -2, -2, 1, -1, -1, 2, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0]]
	        ],
	        "狐水銃シズクトキユル": [
	            [150, 0, "なし", "普通", "小", 0, 0, [4, 4, 5, 4, 5, 4, 3, 6, -4, -1, 1, -1, -1, -1, -1, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0]],
	            [170, 0, "なし", "普通", "小", 0, 0, [4, 4, 5, 4, 5, 4, 3, 6, -4, -1, 1, -1, -1, -1, -1, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0]],
	            [200, 0, "なし", "普通", "小", 0, 0, [5, 5, 6, 5, 6, 6, 4, 6, -4, -2, 2, -1, -2, 2, -1, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0]],
	            [210, 0, "なし", "普通", "小", 0, 0, [5, 5, 7, 5, 6, 6, 4, 6, -4, -2, 2, -1, -2, 2, -1, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0]]
	        ],
	        "電竜弩": [
	            [150, 0, "なし", "やや速い", "やや小", 0, 0, [4, 6, -5, 4, -6, -4, -3, 4, -4, 2, 1, -3, -1, -1, -1, 2, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0]],
	            [170, 0, "なし", "やや速い", "やや小", 0, 0, [4, 6, -5, 4, -6, -4, -3, 4, -4, 2, 1, -3, -1, -1, -1, 2, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0]],
	            [200, 0, "なし", "やや速い", "やや小", 0, 0, [5, 6, -6, 5, 6, 5, -4, 5, -5, 3, 3, -3, -2, -2, -1, 2, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0]],
	            [210, 0, "なし", "やや速い", "やや小", 0, 0, [5, 6, -6, 5, 6, 5, -4, 5, -5, 3, 3, -3, -2, -2, -1, 2, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 5, 0, 0]]
	        ],
	        "巨獣弩": [
	            [160, 0, "左右/小", "やや遅い", "中", 0, 10, [4, 4, -5, -3, 3, -3, 3, 3, 3, -2, -1, -1, 1, 1, -2, 2, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 3, 0]],
	            [180, 0, "左右/小", "やや遅い", "中", 0, 15, [4, 5, -5, -3, 3, -3, 4, 4, 4, -2, -1, -1, 2, 2, -2, 2, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 3, 0]],
	            [220, 0, "左右/小", "やや遅い", "中", 0, 20, [5, 6, -5, -4, 4, -3, 4, 4, 4, -2, -2, -1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 3, 0]],
	            [240, 0, "左右/小", "やや遅い", "中", 0, 25, [5, 7, -5, -4, 4, -3, 5, 5, 5, -2, -2, -1, 3, 3, 2, 2, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 4, 0]]
	        ],
	        "灼炎のエンサー": [
	            [150, 0, "なし", "普通", "中", 0, 0, [6, 5, 6, -5, 4, -4, -5, 5, 3, 3, 3, 3, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 3, 0, 0, 0, 0]],
	            [170, 0, "なし", "普通", "中", 0, 0, [7, 6, 7, -6, 5, -5, -5, 6, 4, 3, 3, 3, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 3, 0, 0, 0, 0]],
	            [210, 0, "なし", "普通", "中", 0, 0, [8, 7, 8, -6, 5, -5, -5, 6, 4, 3, 3, 3, -2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 4, 0, 0, 0, 0]],
	            [220, 0, "なし", "普通", "中", 0, 0, [9, 8, 9, -6, 6, -6, -5, 6, 4, 3, 3, 3, -2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 4, 0, 0, 0, 0]]
	        ],
	        "レイofヴァイス": [
	            [140, 20, "なし", "普通", "中", 1, 0, [5, 6, 6, 3, 3, -3, 4, 3, -3, -2, -2, -1, 1, -1, -1, 2, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2]],
	            [150, 20, "なし", "普通", "中", 1, 0, [5, 6, 7, 3, 3, -3, 4, 3, -3, -2, -2, -1, 1, -1, -1, 2, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2]],
	            [180, 20, "なし", "普通", "中", 1, 0, [6, 6, 8, 3, 3, -3, 4, 3, -3, -2, -2, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2]],
	            [200, 20, "なし", "普通", "中", 1, 0, [6, 6, 9, 3, 3, -3, 4, 3, -3, -2, -2, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2]]
	        ],
	        "ラサーサアルシアラ": [
	            [150, 10, "なし", "やや速い", "大", 1, 0, [6, 2, 3, 4, 3, -3, 3, 3, 3, -1, -1, -1, -2, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [160, 10, "なし", "やや速い", "大", 1, 0, [7, 3, 4, 4, 3, -3, 4, 4, 4, -1, -1, -1, -2, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [210, 10, "なし", "やや速い", "大", 1, 0, [8, 4, 5, 5, 4, -4, 5, 5, 5, -1, -1, -1, -2, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [220, 10, "なし", "やや速い", "大", 1, 0, [9, 5, 6, 6, 5, -5, 6, 6, 6, -1, -1, -1, -2, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
	        ],
	        "レックスタンク": [
	            [170, -20, "左/小", "普通", "中", 0, 0, [6, 4, 8, -3, 3, 3, -4, 5, 5, 1, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2]],
	            [180, -20, "左/小", "普通", "中", 0, 0, [6, 5, 8, -3, 4, 4, -4, 5, 5, 1, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2]],
	            [200, -20, "左/小", "普通", "中", 0, 0, [7, 6, 8, -4, 4, 4, -5, 5, 5, 1, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2]],
	            [220, -10, "左/小", "普通", "中", 0, 0, [8, 6, 9, -4, 5, 4, -5, 6, 6, 1, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2]]
	        ],
	        "幻獣筒【三ツ角】": [
	            [140, 0, "なし", "普通", "中", 0, 0, [4, 4, 7, 3, 3, 3, -3, -3, -3, 1, -1, -1, 2, 2, 2, 3, 3, 2, 1, 2, 1, 2, 1, 2, 1, 3, 3, 3, 3, 0]],
	            [160, 0, "なし", "普通", "中", 0, 0, [5, 5, 7, 3, 3, 3, -3, -3, -3, 1, -1, -1, 2, 2, 2, 3, 3, 2, 1, 2, 1, 2, 1, 2, 1, 3, 3, 3, 3, 0]],
	            [180, 0, "なし", "普通", "中", 0, 0, [6, 6, 8, 4, 4, 4, -4, -4, -4, 1, -1, -1, 2, 2, 2, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1, 4, 4, 4, 4, 0]],
	            [200, 0, "なし", "普通", "中", 0, 0, [6, 6, 9, 4, 4, 4, -4, -4, -4, 1, -1, -1, 2, 2, 2, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1, 4, 4, 4, 4, 0]]
	        ],
	        "ディオスブラスト": [
	            [150, 0, "左/小", "やや速い", "中", 0, 0, [4, 4, -5, 4, 5, -4, 2, -2, -2, 1, 1, -1, -1, 1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 3, 0, 0, 0, 0]],
	            [170, 0, "左/小", "やや速い", "中", 0, 0, [5, 4, -6, 4, 5, -4, 3, -3, -3, 1, 1, -1, -1, 1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 3, 0, 0, 0, 0]],
	            [200, 0, "左/小", "やや速い", "中", 0, 0, [5, 5, -6, 5, 5, -5, 4, -4, -4, 1, 1, 1, -1, 1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1, 4, 0, 0, 0, 0]],
	            [210, 0, "左/小", "やや速い", "中", 0, 0, [6, 5, -7, 5, 5, -5, 5, -5, -5, 1, 1, 1, -1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 1, 4, 0, 0, 0, 0]]
	        ],
	        "ウラナイランプ": [
	            [140, 30, "なし", "やや速い", "中", 3, 0, [6, 6, 9, 3, 3, 3, 4, 4, 4, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 3, 1]],
	            [180, 30, "なし", "やや速い", "中", 3, 0, [6, 6, 9, 3, 3, 3, 4, 5, 4, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 3, 1]],
	            [200, 30, "なし", "やや速い", "中", 3, 0, [7, 7, 9, 3, 3, 3, 5, 6, 5, 2, 1, 1, 2, 1, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 4, 4, 4, 4, 1]],
	            [210, 30, "なし", "やや速い", "中", 3, 0, [8, 7, 9, 3, 3, 3, 6, 6, 5, 2, 2, 1, 2, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 4, 4, 4, 4, 1]]
	        ],
	        "巨蟹といふ名の白骸": [
	            [160, 0, "なし", "やや遅い", "やや小", 1, 0, [6, 6, 8, 5, 5, 4, -6, 6, -5, 1, 1, 1, -1, -1, 1, 2, 0, 0, 0, 3, 1, 0, 0, 3, 1, 0, 0, 0, 0, 2]],
	            [170, 0, "なし", "やや遅い", "やや小", 1, 0, [7, 6, 9, 5, 5, 4, -6, 6, -5, 2, 2, 1, -1, -1, 1, 2, 0, 0, 0, 3, 1, 0, 0, 3, 1, 0, 0, 0, 0, 2]],
	            [210, 0, "なし", "やや遅い", "やや小", 1, 0, [8, 7, 9, 6, 5, 5, -6, 6, -5, 3, 2, 1, -1, -1, 1, 2, 0, 0, 0, 3, 1, 0, 0, 3, 1, 0, 0, 0, 0, 3]],
	            [220, 0, "なし", "やや遅い", "やや小", 1, 0, [9, 8, 9, 6, 5, 5, -6, 6, -5, 3, 2, 1, -1, -1, 1, 2, 0, 0, 0, 3, 1, 0, 0, 3, 1, 0, 0, 0, 0, 3]]
	        ],
	        "ブラックパラソル": [
	            [150, 0, "左右/小", "やや速い", "中", 1, 10, [5, 3, 8, 3, -3, -3, 4, 4, 4, 1, 1, -1, 1, 1, -1, 3, 3, 3, 1, 3, 1, 3, 1, 0, 0, 2, 5, 0, 0, 1]],
	            [170, 0, "左右/小", "やや速い", "中", 1, 10, [5, 3, 8, 3, -3, -3, 4, 4, 4, 1, 1, -1, 1, 1, -1, 3, 3, 3, 1, 3, 1, 3, 1, 0, 0, 2, 5, 0, 0, 1]],
	            [190, 0, "左右/小", "やや速い", "中", 1, 10, [6, 4, 9, 3, -3, -3, 4, 5, 5, 2, 2, -2, 1, 1, -1, 3, 3, 3, 1, 3, 1, 3, 1, 0, 0, 3, 5, 0, 0, 1]],
	            [200, 0, "左右/小", "やや速い", "中", 1, 10, [6, 4, 9, 3, -3, -3, 4, 5, 5, 2, 2, -2, 1, 1, -1, 3, 3, 3, 1, 3, 1, 3, 1, 0, 0, 3, 5, 0, 0, 1]]
	        ],
	        "ショットボウガン・蒼": [
	            [160, 20, "なし", "やや遅い", "中", 0, 0, [6, 6, 6, 2, -3, -3, 6, 4, -4, 1, -1, -1, 1, -1, -1, 2, 2, 0, 0, 0, 0, 2, 1, 0, 0, 0, 3, 0, 0, 0]],
	            [180, 20, "なし", "やや遅い", "中", 0, 0, [7, 6, 7, 3, -4, -4, 6, 4, -4, 1, -1, -1, 1, -1, -1, 2, 2, 0, 0, 0, 0, 3, 1, 0, 0, 0, 4, 0, 0, 0]],
	            [190, 20, "なし", "やや遅い", "中", 0, 0, [8, 6, 8, 3, -4, -4, 6, 5, -5, 1, -1, -1, 1, -1, -1, 2, 2, 0, 0, 0, 0, 3, 1, 0, 0, 0, 4, 0, 0, 0]],
	            [200, 20, "なし", "やや遅い", "中", 0, 0, [9, 6, 9, 3, -4, -4, 6, 5, -5, 1, -1, -1, 1, -1, -1, 2, 2, 0, 0, 0, 0, 3, 1, 0, 0, 0, 4, 0, 0, 0]]
	        ],
	        "ショットボウガン・碧": [
	            [170, 0, "なし", "やや速い", "中", 2, 10, [6, 6, -6, 2, -3, -3, 4, 4, -4, 1, -1, -1, 1, -1, -1, 2, 1, 0, 0, 3, 2, 2, 1, 0, 0, 0, 0, 3, 0, 0]],
	            [200, 0, "なし", "やや速い", "中", 2, 10, [6, 6, -6, 2, -3, -3, 4, 4, -4, 1, -1, -1, 1, -1, -1, 2, 1, 0, 0, 3, 2, 2, 1, 0, 0, 0, 0, 3, 0, 0]],
	            [210, 0, "なし", "やや速い", "中", 2, 10, [6, 6, -6, 3, -4, -4, 5, 4, -4, 1, -1, -1, 1, -1, -1, 2, 1, 0, 0, 3, 2, 3, 1, 0, 0, 0, 0, 4, 0, 0]]
	        ],
	        "ショットボウガン・紅": [
	            [190, 0, "なし", "やや速い", "中", 2, 0, [6, 6, 6, 2, -3, -3, 5, 6, -6, 1, -1, -1, 1, -1, -1, 2, 2, 0, 0, 0, 0, 2, 1, 0, 0, 3, 0, 0, 0, 0]],
	            [200, 0, "なし", "やや速い", "中", 2, 0, [7, 6, 7, 3, -3, -3, 5, 6, -6, 1, -1, -1, 1, -1, -1, 2, 2, 0, 0, 0, 0, 2, 1, 0, 0, 3, 0, 0, 0, 0]],
	            [210, 0, "なし", "やや速い", "中", 2, 0, [7, 6, 7, 3, -3, -3, 5, 6, -6, 1, -1, -1, 1, -1, -1, 2, 2, 0, 0, 0, 0, 2, 1, 0, 0, 3, 0, 0, 0, 0]]
	        ],
	        "シェルバレット": [
	            [170, 0, "左右/大", "普通", "中", 0, 0, [1, 5, 6, -3, -4, -4, 2, 3, 3, -1, -1, -1, 1, -1, -1, 2, 0, 5, 0, 2, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0]],
	            [190, 0, "左右/大", "普通", "中", 0, 0, [1, 5, 7, -4, -4, -4, 2, 4, 4, -1, -1, -1, 1, -1, -1, 2, 0, 5, 0, 3, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0]],
	            [200, 0, "左右/大", "普通", "中", 0, 0, [1, 6, 8, -5, -4, -4, 2, 4, 4, -1, -1, -1, 1, -1, -1, 2, 0, 5, 0, 3, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0]]
	        ],
	        "デザートストーム": [
	            [170, 0, "なし", "極速", "中", 1, 0, [6, 6, 9, 3, 3, 3, 4, 4, 4, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 3, 1, 3, 1, 0, 0, 0, 3, 0, 0, 0]],
	            [190, 0, "なし", "極速", "中", 1, 0, [7, 6, 9, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 3, 1, 3, 1, 0, 0, 0, 4, 0, 0, 0]],
	            [210, 0, "なし", "極速", "中", 1, 0, [8, 6, 9, 4, 4, 4, 5, 5, 5, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 3, 1, 3, 1, 0, 0, 0, 5, 0, 0, 0]]
	        ],
	        "ロンナークプシカ": [
	            [170, 0, "なし", "普通", "中", 1, 0, [5, 5, 6, 3, -3, -3, 3, 3, -3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0]],
	            [190, 0, "なし", "普通", "中", 1, 0, [5, 5, 6, 4, -3, -3, 4, 4, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 2, 3, 0, 3, 0]],
	            [200, 0, "なし", "普通", "中", 1, 0, [6, 6, 7, 4, -3, -3, 5, 5, -5, -2, -2, -2, 1, -1, -1, 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 3, 0, 3, 0]],
	            [210, 0, "なし", "普通", "中", 1, 0, [7, 7, 8, 4, 4, 3, 5, 6, -6, -2, -2, -2, 1, -1, -1, 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 4, 0, 4, 0]]
	        ],
	        "ハーイゲヴァー": [
	            [190, 0, "なし", "普通", "中", 0, 0, [5, 5, -7, 4, 6, 5, -4, 4, -4, -2, 1, -1, -1, -1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0]],
	            [200, 0, "なし", "普通", "中", 0, 0, [5, 5, -7, 4, 6, 5, -5, 5, -5, -2, 1, -1, -1, -1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0]],
	            [210, 0, "なし", "普通", "中", 0, 0, [6, 5, -8, 4, 6, 5, -6, 6, -6, -2, 1, -1, -1, -1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0]]
	        ],
	        "テイルブリザード": [
	            [170, 10, "なし", "やや遅い", "中", 1, 0, [5, 4, 5, 5, 5, 5, -4, -4, -4, -2, -1, -1, -1, -1, -1, 3, 3, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 6, 0]],
	            [180, 10, "なし", "やや遅い", "中", 1, 0, [5, 4, 5, 5, 5, 5, -4, -4, -4, -2, -1, -1, -1, -1, -1, 3, 3, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 6, 0]],
	            [190, 10, "なし", "やや遅い", "中", 1, 0, [6, 5, 6, 6, 6, 6, -5, -5, -5, -2, -1, -1, -1, -1, -1, 3, 3, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 6, 0]]
	        ],
	        "真ユクモノ弩": [
	            [180, 0, "なし", "普通", "中", 1, 0, [5, 5, 6, 3, -2, -2, 2, -3, -3, 2, -2, -1, -1, -1, -1, 2, 1, 2, 1, 0, 0, 2, 1, 2, 1, 0, 0, 0, 0, 0]],
	            [200, 0, "なし", "普通", "中", 1, 0, [5, 5, 6, 3, -2, -2, 2, -3, -3, 2, -2, -1, -1, -1, -1, 2, 1, 2, 1, 0, 0, 2, 1, 2, 1, 0, 0, 0, 0, 0]],
	            [210, 0, "なし", "普通", "中", 1, 0, [5, 5, 6, 3, -2, -2, 2, -3, -3, 2, -2, -1, -1, -1, -1, 2, 1, 2, 1, 0, 0, 2, 1, 2, 1, 0, 0, 0, 0, 0]]
	        ],
	        "ラヴァシュトローム": [
	            [190, 0, "右/小", "普通", "中", 0, 0, [6, 4, -8, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 3, 0]],
	            [200, 0, "右/小", "普通", "中", 0, 0, [9, 6, -9, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 3, 0]],
	            [210, 0, "右/小", "普通", "中", 0, 0, [9, 6, -9, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1, 4, 4, 4, 4, 0]]
	        ],
	        "ド【兇】": [
	            [190, 30, "なし", "普通", "中", 1, 0, [6, 8, 9, -4, 3, -3, -4, 4, -4, -2, 2, -2, -1, 1, -2, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 2]],
	            [200, 30, "なし", "普通", "中", 1, 0, [7, 9, 9, -4, 3, -3, -4, 4, -4, -2, 2, -2, -1, 2, -2, 3, 3, 4, 2, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 2]],
	            [210, 30, "なし", "普通", "中", 1, 0, [8, 9, 9, -4, 3, -3, -4, 4, -4, -2, 2, -2, -1, 2, -2, 3, 3, 4, 3, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 2]]
	        ],
	        "雷砲サンダークルス": [
	            [180, 10, "左/小", "普通", "やや小", 2, 0, [6, 7, 7, 3, 4, -4, 5, 4, -4, 1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0]],
	            [190, 10, "左/小", "普通", "やや小", 2, 0, [7, 8, 8, 4, 4, -4, 5, 4, -4, 1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0]],
	            [200, 20, "左/小", "普通", "やや小", 2, 0, [8, 9, 9, 4, 5, -4, 5, 4, -4, 1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0]]
	        ],
	        "飛雷弩": [
	            [190, 0, "なし", "普通", "小", 1, 30, [6, 6, -7, 2, 2, -2, 3, 3, -3, -1, -1, -1, -2, -2, -2, 3, 1, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0]],
	            [200, 0, "なし", "普通", "小", 1, 30, [7, 6, -8, 3, 3, -3, 4, 4, -4, -1, -1, -1, -2, -2, -2, 3, 1, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0]],
	            [210, 0, "なし", "普通", "小", 1, 30, [7, 6, -8, 3, 3, -3, 4, 4, -4, -1, -1, -1, -2, -2, -2, 3, 1, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0]]
	        ],
	        "神ヶ島": [
	            [200, 0, "なし", "極速", "やや小", 0, 0, [4, 6, 9, -2, -2, 2, -2, -3, 4, 3, 3, 3, 3, 3, 3, 2, 2, 0, 0, 0, 2, 0, 2, 3, 2, 1, 0, 0, 0, 3]],
	            [210, 0, "なし", "極速", "やや小", 0, 0, [4, 6, 9, -2, -2, 2, -3, -4, 5, 3, 3, 3, 3, 3, 3, 2, 2, 0, 0, 0, 2, 0, 2, 3, 2, 1, 0, 0, 0, 3]],
	            [220, 0, "なし", "極速", "やや小", 0, 0, [4, 6, 9, -2, -2, 2, -3, -4, 5, 3, 3, 3, 3, 3, 3, 2, 2, 0, 0, 0, 2, 0, 2, 3, 2, 1, 0, 0, 0, 3]]
	        ],
	        "パールフリルパラソル": [
	            [190, 0, "なし", "やや速い", "中", 0, 10, [6, 4, 9, 3, 3, 3, 4, 5, 5, 2, 2, -2, 1, 1, -1, 3, 3, 3, 1, 3, 1, 0, 0, 3, 1, 0, 0, 5, 3, 1]],
	            [200, 0, "なし", "やや速い", "中", 0, 10, [6, 4, 9, 3, 3, 3, 4, 5, 5, 2, 2, -2, 1, 1, -1, 3, 3, 3, 1, 3, 1, 0, 0, 3, 1, 0, 0, 5, 3, 1]],
	            [210, 0, "なし", "やや速い", "中", 0, 10, [6, 4, 9, 3, 3, 3, 4, 5, 5, 2, 2, -2, 1, 1, -1, 3, 3, 3, 1, 3, 1, 0, 0, 3, 1, 0, 0, 5, 3, 1]]
	        ],
	        "メイルシュトローム": [
	            [210, 0, "なし", "やや速い", "やや小", 1, 10, [6, 5, -6, 3, 3, 3, 3, 3, 3, 1, 1, -1, 1, 1, -1, 3, 0, 0, 0, 3, 0, 0, 1, 2, 0, 0, 3, 0, 0, 0]],
	            [210, 0, "なし", "やや速い", "やや小", 1, 15, [7, 6, -7, 3, 3, 3, 3, 3, 3, 1, 1, -1, 1, 1, -1, 3, 0, 0, 0, 3, 0, 0, 1, 2, 0, 0, 3, 0, 0, 0]],
	            [220, 0, "なし", "やや速い", "やや小", 1, 20, [8, 7, -8, 3, 3, 3, 3, 3, 3, 1, 1, -1, 1, 1, -1, 3, 0, 0, 0, 3, 0, 0, 1, 2, 0, 0, 3, 0, 0, 0]]
	        ],
	        "機銃ストラフィング": [
	            [200, 0, "右/大", "普通", "中", 0, 10, [6, 6, 7, -3, -2, -2, 5, 5, 4, -1, -1, -1, 1, -2, -1, 2, 0, 3, 4, 2, 1, 0, 0, 0, 0, 0, 4, 0, 4, 0]],
	            [210, 0, "右/大", "普通", "中", 0, 15, [6, 6, 8, -4, -3, -3, 5, 5, 4, -1, -1, -1, 1, -2, -1, 2, 0, 3, 4, 3, 1, 0, 0, 0, 0, 0, 4, 0, 4, 0]],
	            [220, 0, "右/大", "普通", "中", 0, 20, [6, 6, 9, -5, -4, -4, 5, 5, 4, -1, -1, -1, 1, -2, -1, 2, 0, 3, 4, 3, 1, 0, 0, 0, 0, 0, 4, 0, 4, 0]]
	        ],
	        "叛逆の旋弩": [
	            [220, 20, "なし", "やや速い", "大", 2, 0, [8, 3, 4, 5, 4, -4, 4, 4, 4, -2, -2, -2, -2, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [230, 20, "なし", "やや速い", "大", 2, 0, [9, 4, 5, 5, 4, -4, 4, 4, 4, -2, -2, -2, -2, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [240, 20, "なし", "やや速い", "大", 2, 0, [9, 5, 6, 5, 4, -4, 5, 4, 4, -2, -2, -2, -2, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
	        ],
	        "ベルクーツ": [
	            [200, 0, "なし", "やや遅い", "やや小", 1, 0, [4, 4, 5, 2, 2, -2, 4, 5, 6, 1, 1, 1, 1, -1, -1, 2, 1, 0, 0, 0, 0, 2, 1, 3, 1, 0, 0, 0, 0, 0]],
	            [210, 0, "なし", "やや遅い", "やや小", 1, 0, [5, 5, 6, 2, 2, -2, 5, 6, 6, 2, 2, 2, 1, -1, -1, 2, 1, 0, 0, 0, 0, 2, 1, 3, 2, 0, 0, 0, 0, 0]],
	            [220, 0, "なし", "やや遅い", "やや小", 1, 0, [6, 6, 7, 2, 2, -2, 6, 6, 6, 3, 3, 3, 1, -1, -1, 2, 1, 0, 0, 0, 0, 2, 1, 3, 2, 0, 0, 0, 0, 0]]
	        ],
	        "爆砕の光弩": [
	            [210, 0, "左/小", "やや速い", "中", 1, 10, [4, 6, 8, 4, 5, -4, 3, -3, -3, 1, 1, -1, -1, 1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0]],
	            [220, 0, "左/小", "やや速い", "中", 1, 10, [5, 6, 8, 4, 5, -4, 4, -4, -4, 2, 2, -2, -2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0]],
	            [230, 0, "左/小", "やや速い", "中", 1, 10, [6, 6, 8, 4, 5, -4, 5, -5, -5, 3, 2, -2, -2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 5, 0, 0, 0, 0]]
	        ],
	        "THEオラクル": [
	            [190, 35, "なし", "普通", "中", 2, 0, [5, 7, 8, -3, 3, -3, 6, 3, -3, -2, -2, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3]],
	            [200, 35, "なし", "普通", "中", 2, 0, [6, 8, 9, -3, 3, -3, 6, 4, -4, -2, -2, -1, 1, 1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3]],
	            [210, 35, "なし", "普通", "中", 2, 0, [7, 9, 9, -3, 3, -3, 6, 4, -4, -2, -2, -1, 1, 1, 1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3]]
	        ],
	        "ラージャンデグ": [
	            [210, -15, "左右/大", "普通", "中", 0, 0, [8, 8, 8, 4, 4, 4, -3, -3, -3, 2, 2, 2, 1, -1, -1, 3, 3, 0, 0, 3, 1, 0, 0, 0, 0, 3, 0, 3, 1, 0]],
	            [220, -15, "左右/大", "普通", "中", 0, 0, [9, 9, 9, 4, 4, 4, -4, -4, -4, 2, 2, 2, 1, 1, -1, 3, 3, 0, 0, 3, 1, 0, 0, 0, 0, 4, 0, 4, 2, 0]],
	            [220, -15, "左右/大", "普通", "中", 0, 0, [9, 9, 9, 5, 5, 5, -5, -5, -5, 2, 2, 2, 1, 1, 1, 3, 3, 0, 0, 3, 2, 0, 0, 0, 0, 4, 0, 4, 2, 0]]
	        ],
	        "イビルマシーン": [
	            [190, -10, "左/大", "極遅", "小", 0, 0, [1, 4, 8, -3, -4, 4, -2, -3, 6, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 0, 0, 1, 3]],
	            [200, -10, "左/大", "極遅", "小", 0, 0, [1, 5, 9, -3, -4, 4, -2, -3, 6, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 1, 3]],
	            [210, -10, "左/大", "極遅", "小", 0, 0, [1, 5, 9, -3, -4, 5, -2, -3, 6, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 2, 3]]
	        ],
	        "瓢弾": [
	            [180, 0, "なし", "やや速い", "中", 2, 0, [5, 2, 6, 2, -3, -3, 3, -3, -3, -1, -1, -1, -1, -1, -1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0]],
	            [190, 0, "なし", "やや速い", "中", 2, 0, [6, 3, 7, 4, -5, -5, 4, -3, -3, -1, -1, -1, -1, -1, -1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0]],
	            [200, 0, "なし", "やや速い", "中", 2, 0, [7, 4, 8, 4, -5, -5, 4, -3, -3, -1, -1, -1, -1, -1, -1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0]],
	            [210, 0, "なし", "やや速い", "中", 2, 0, [8, 5, 9, 4, -5, -5, 4, -3, -3, -1, -1, -1, -1, -1, -1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0]]
	        ],
	        "鋼氷蜂弩": [
	            [210, 10, "左右/小", "やや遅い", "小", 1, 0, [5, 7, 6, -4, 4, 4, 3, 3, -3, 2, 2, 2, -1, 2, -1, 3, 1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0]],
	            [220, 10, "左右/小", "やや遅い", "小", 1, 0, [6, 7, 6, -4, 4, 4, 3, 3, -3, 2, 2, 2, -1, 2, -1, 3, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0]],
	            [230, 10, "左右/小", "やや遅い", "小", 1, 0, [7, 7, 7, -4, 4, 4, 4, 4, -4, 2, 2, 2, -1, 2, -1, 3, 1, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0]]
	        ],
	        "シルバースパルタカス": [
	            [210, -10, "なし", "普通", "中", 0, 0, [6, 6, 9, 3, 3, 6, 2, 2, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 3, 1, 0, 0, 0, 0, 3, 3, 0, 3, 0]],
	            [220, -10, "なし", "普通", "中", 0, 0, [7, 6, 9, 3, 4, 6, 3, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 3, 1, 0, 0, 0, 0, 4, 3, 0, 3, 0]],
	            [230, -10, "なし", "普通", "中", 0, 0, [8, 6, 9, 3, 5, 6, 4, 4, 4, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 3, 1, 0, 0, 0, 0, 5, 3, 0, 3, 0]]
	        ],
	        "ゴールドヴァルキリー": [
	            [200, 0, "なし", "やや速い", "中", 0, 0, [6, 6, 9, 4, 4, -4, 2, -3, -3, 2, 2, -2, 2, 2, -1, 3, 3, 2, 0, 4, 2, 0, 0, 0, 0, 4, 4, 2, 2, 2]],
	            [210, 0, "なし", "やや速い", "中", 0, 0, [7, 6, 9, 4, 4, -4, 3, -4, -4, 2, 2, -2, 2, 2, -1, 3, 3, 2, 0, 4, 2, 0, 0, 0, 0, 4, 4, 3, 2, 2]],
	            [220, 0, "なし", "やや速い", "中", 0, 0, [8, 6, 9, 5, 5, -5, 4, -5, -5, 2, 2, -2, 2, 2, -1, 3, 3, 2, 0, 4, 2, 0, 0, 0, 0, 5, 4, 3, 3, 2]]
	        ],
	        "繚乱の対弩": [
	            [210, 0, "なし", "普通", "中", 3, 0, [5, 6, 9, 3, 3, 3, 6, 6, 6, 2, 2, -2, 1, 1, 1, 2, 1, 4, 2, 2, 1, 0, 0, 0, 0, 6, 0, 0, 0, 0]],
	            [220, 0, "なし", "普通", "中", 3, 0, [6, 7, 9, 4, 4, 4, 6, 6, 6, 2, 2, -2, 1, 1, 1, 2, 1, 4, 2, 3, 1, 0, 0, 0, 0, 6, 0, 0, 0, 0]],
	            [230, 0, "なし", "普通", "中", 3, 0, [7, 8, 9, 5, 5, 5, 6, 6, 6, 2, 2, -2, 1, 1, 1, 2, 1, 4, 2, 3, 1, 0, 0, 0, 0, 6, 0, 0, 0, 0]]
	        ],
	        "鬼神筒": [
	            [220, -25, "左右/大", "普通", "中", 0, 0, [9, 9, 9, 5, 5, 5, -4, -4, -4, 2, 2, 2, 2, 2, 2, 3, 3, 0, 0, 3, 2, 0, 0, 0, 0, 4, 1, 4, 0, 0]],
	            [230, -25, "左右/大", "普通", "中", 0, 0, [9, 9, 9, 5, 5, 5, -4, -4, -4, 2, 2, 2, 2, 2, 2, 3, 3, 0, 0, 3, 2, 0, 0, 0, 0, 4, 1, 4, 0, 0]],
	            [240, -25, "左右/大", "普通", "中", 0, 0, [9, 9, 9, 5, 5, 5, -4, -4, -4, 2, 2, 2, 2, 2, 2, 3, 3, 0, 0, 3, 2, 0, 0, 0, 0, 4, 1, 4, 0, 0]]
	        ],
	        "業弩ダークデメント": [
	            [220, -15, "左/大", "普通", "小", 0, 0, [1, 3, 7, -3, 3, 5, -3, 3, 6, -1, -1, -1, 1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 1, 2]],
	            [230, -15, "左/大", "普通", "小", 0, 0, [1, 4, 8, -3, 3, 5, -3, 3, 6, -1, -1, -1, 1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 1, 2]],
	            [240, -15, "左/大", "普通", "小", 0, 0, [1, 4, 9, -3, 4, 6, -3, 3, 6, -1, -1, -1, 1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 1, 3]]
	        ],
	        "崩弩エイヌカムルバス": [
	            [240, -30, "左右/小", "やや遅い", "大", 2, 0, [6, 9, 9, -2, 3, 3, -2, 3, 3, -1, 2, 2, -1, 1, 2, 2, 1, 0, 0, 0, 0, 2, 1, 2, 1, 0, 3, 0, 5, 0]],
	            [250, -30, "左右/小", "やや遅い", "大", 2, 0, [7, 9, 9, -2, 3, 3, -2, 3, 3, -1, 2, 2, -1, 1, 2, 2, 1, 0, 0, 0, 0, 2, 1, 2, 1, 0, 4, 0, 5, 0]],
	            [260, -30, "左右/小", "やや遅い", "大", 2, 0, [8, 9, 9, -2, 3, 3, -2, 3, 3, -1, 2, 2, -1, 1, 2, 2, 1, 0, 0, 0, 0, 2, 1, 2, 1, 0, 5, 0, 5, 0]]
	        ],
	        "凶針【水禍】": [
	            [200, -10, "なし", "普通", "中", 0, 0, [6, 7, 8, 3, 3, -3, 3, 3, -3, 2, 2, -2, 2, -1, -1, 3, 2, 2, 1, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3]],
	            [210, -10, "なし", "普通", "中", 0, 0, [7, 7, 9, 3, 3, -3, 3, 3, -3, 2, 2, -2, 2, -1, -1, 3, 2, 2, 1, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3]],
	            [220, -10, "なし", "普通", "中", 0, 0, [8, 8, 9, 3, 3, -3, 3, 3, -3, 2, 2, -2, 2, -1, -1, 3, 2, 2, 1, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3]]
	        ],
	        "極星弩グラーグ": [
	            [200, 10, "なし", "やや速い", "小", 2, 0, [5, 6, 6, 4, 5, 5, -5, 5, -5, 1, 1, 1, -1, -1, 1, 2, 0, 0, 0, 3, 1, 0, 0, 3, 1, 0, 0, 0, 0, 2]],
	            [210, 10, "なし", "やや速い", "小", 2, 0, [6, 6, 7, 4, 5, 5, -5, 5, -5, 1, 1, 1, -1, -1, 1, 2, 0, 0, 0, 3, 1, 0, 0, 3, 1, 0, 0, 0, 0, 2]],
	            [220, 10, "なし", "やや速い", "小", 2, 0, [7, 6, 8, 5, 5, 5, -5, 5, -5, 2, 2, 2, -1, -1, 1, 2, 0, 0, 0, 3, 1, 0, 0, 3, 1, 0, 0, 0, 0, 2]]
	        ],
	        "レギーナファイア": [
	            [120, 0, "なし", "普通", "中", 0, 0, [3, 3, 4, 2, -2, -2, 2, 3, -2, 1, -1, -1, 1, -1, -1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0]],
	            [130, 0, "なし", "普通", "中", 0, 0, [4, 3, 4, 2, -2, -2, 3, 3, -2, 1, -1, -1, 1, -1, -1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0]],
	            [140, 0, "なし", "普通", "中", 0, 0, [4, 4, 5, 2, -2, -2, 3, 4, -2, 1, -1, -1, 1, -1, -1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0]],
	            [170, 0, "なし", "普通", "中", 0, 0, [5, 5, 5, 3, -2, -2, 4, 4, -2, 1, -1, -1, 1, -1, -1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [180, 0, "なし", "普通", "中", 0, 0, [6, 5, 5, 4, -3, -3, 4, 4, -2, 1, -1, -1, 1, -1, -1, 1, 0, 2, 1, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [190, 0, "なし", "普通", "中", 0, 0, [6, 5, 5, 4, -3, -3, 4, 4, -3, 1, -1, -1, 1, -1, -1, 1, 0, 2, 1, 2, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [200, 0, "なし", "普通", "中", 0, 0, [6, 5, 6, 4, -3, -3, 4, 4, -3, 1, -1, -1, 1, -1, -1, 1, 0, 2, 1, 2, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [210, 0, "なし", "普通", "中", 0, 0, [7, 6, 6, 5, -4, -4, 4, 4, -3, 1, -1, -1, 1, -1, -1, 1, 0, 2, 1, 2, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [220, 0, "なし", "普通", "中", 0, 0, [7, 6, 6, 6, -4, -4, 4, 4, -3, 1, -1, -1, 1, -1, -1, 1, 0, 2, 1, 2, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [220, 0, "なし", "普通", "中", 0, 0, [7, 7, 7, 6, -4, -4, 4, 4, -3, 2, -1, -1, 1, -1, -1, 2, 0, 2, 1, 2, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0]]
	        ],
	        "ラファガゲイズ": [
	            [160, 30, "なし", "やや速い", "中", 0, 0, [4, 4, -4, 3, 5, 5, -3, -2, -2, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 0, 0, 0]],
	            [160, 40, "なし", "やや速い", "中", 0, 0, [5, 4, -4, 3, 5, 5, -3, -2, -2, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 0, 0, 0]],
	            [170, 30, "なし", "やや速い", "中", 0, 0, [5, 5, -4, 3, 5, 5, -3, -2, -2, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 0, 0, 0]],
	            [170, 40, "なし", "やや速い", "中", 0, 0, [5, 5, -5, 4, 5, 5, -3, -2, -2, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 0, 0, 0]],
	            [180, 30, "なし", "やや速い", "中", 0, 0, [5, 5, -5, 4, 5, 5, -3, -2, -2, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 0, 0, 0]],
	            [180, 40, "なし", "やや速い", "中", 0, 0, [5, 5, -5, 4, 5, 5, -3, -2, -2, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 0, 0, 0]],
	            [190, 30, "なし", "やや速い", "中", 0, 0, [5, 5, -5, 4, 5, 5, -3, -2, -2, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 0, 0, 0]],
	            [190, 40, "なし", "やや速い", "中", 0, 0, [6, 5, -5, 5, 5, 5, -3, -2, -2, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 0, 0, 0]],
	            [200, 30, "なし", "やや速い", "中", 0, 0, [7, 5, -5, 5, 5, 5, -3, -2, -2, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0]],
	            [200, 40, "なし", "やや速い", "中", 0, 0, [7, 6, -5, 5, 6, 5, -3, -2, -2, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0]]
	        ],
	        "ド【禍】": [
	            [170, 20, "なし", "普通", "中", 0, 0, [5, 5, 5, -2, 2, -2, -1, 3, -2, -1, 1, -1, -1, 1, -1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1]],
	            [170, 30, "なし", "普通", "中", 0, 0, [6, 5, 5, -2, 2, -2, -1, 3, -2, -1, 1, -1, -1, 1, -1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1]],
	            [180, 20, "なし", "普通", "中", 0, 0, [6, 5, 6, -2, 2, -2, -1, 3, -2, -1, 1, -1, -1, 1, -1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1]],
	            [180, 30, "なし", "普通", "中", 0, 0, [6, 5, 6, -2, 2, -2, -2, 4, -3, -1, 1, -1, -1, 1, -1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1]],
	            [190, 20, "なし", "普通", "中", 0, 0, [6, 5, 6, -2, 2, -2, -2, 4, -3, -1, 1, -1, -1, 1, -1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1]],
	            [190, 30, "なし", "普通", "中", 0, 0, [7, 5, 6, -2, 2, -2, -2, 4, -3, -1, 1, -1, -1, 1, -1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1]],
	            [200, 20, "なし", "普通", "中", 0, 0, [7, 6, 7, -2, 2, -2, -2, 4, -3, -1, 1, -1, -1, 1, -1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1]],
	            [200, 30, "なし", "普通", "中", 0, 0, [7, 6, 7, -2, 2, -2, -3, 4, -3, -1, 1, -1, -1, 1, -1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1]],
	            [210, 20, "なし", "普通", "中", 0, 0, [7, 6, 7, -2, 2, -2, -3, 4, -3, -1, 1, -1, -1, 1, -1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1]],
	            [210, 30, "なし", "普通", "中", 0, 0, [8, 7, 8, -2, 2, -2, -3, 4, -3, -1, 2, -1, -1, 1, -1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 2]]
	        ],
	        "黒炎竜砲": [
	            [180, 0, "なし", "普通", "中", 0, 0, [4, 4, 4, 3, 3, -3, 2, -2, -2, 1, 1, -1, 1, 1, -1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [180, 0, "なし", "普通", "中", 0, 0, [5, 5, 5, 3, 3, -3, 3, -3, -3, 1, 1, -1, 1, 1, -1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [190, 0, "なし", "普通", "中", 0, 0, [6, 5, 5, 4, 3, -4, 3, -3, -4, 1, 1, -1, 1, 1, -1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [190, 0, "なし", "普通", "中", 0, 0, [6, 6, 6, 4, 4, -4, 4, -4, -4, 1, 1, -1, 1, 1, -1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [200, 0, "なし", "普通", "中", 0, 0, [6, 6, 6, 4, 4, -4, 4, -4, -4, 1, 1, -1, 1, 1, -1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [200, 0, "なし", "普通", "中", 0, 0, [7, 6, 7, 4, 4, -4, 4, -4, -4, 1, 1, -1, 1, 1, -1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [210, 0, "なし", "普通", "中", 0, 0, [7, 7, 7, 4, 4, -4, 4, -4, -4, 1, 1, -1, 1, 1, -1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [210, 0, "なし", "普通", "中", 0, 0, [7, 7, 8, 5, 4, -4, 4, -4, -4, 1, 1, -1, 1, 1, -1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [220, 0, "なし", "普通", "中", 0, 0, [8, 7, 8, 6, 4, -4, 4, -5, -4, 1, 1, -1, 1, 1, -1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [220, 0, "なし", "普通", "中", 0, 0, [8, 7, 9, 6, 5, -4, 5, -5, -4, 2, 2, -1, 1, 1, -1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]]
	        ],
	        "金狼弩ライカン": [
	            [180, 10, "なし", "普通", "中", 0, 0, [5, 5, 7, -3, 3, -3, -4, 3, -3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0]],
	            [190, 5, "なし", "普通", "中", 0, 0, [6, 5, 7, -3, 3, -3, -4, 3, -3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0]],
	            [190, 10, "なし", "普通", "中", 0, 0, [6, 5, 7, -3, 4, -3, -4, 4, -3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0]],
	            [200, 5, "なし", "普通", "中", 0, 0, [6, 5, 7, -3, 4, -3, -4, 4, -3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0]],
	            [210, 5, "なし", "普通", "中", 0, 0, [6, 5, 7, -4, 4, -3, -4, 4, -3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0]],
	            [210, 10, "なし", "普通", "中", 0, 0, [7, 5, 7, -4, 4, -3, -4, 4, -3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0]],
	            [220, 5, "なし", "普通", "中", 0, 0, [7, 5, 8, -4, 4, -3, -4, 4, -3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0]],
	            [220, 10, "なし", "普通", "中", 0, 0, [7, 6, 8, -4, 4, -3, -4, 4, -3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0]],
	            [230, 5, "なし", "普通", "中", 0, 0, [8, 6, 9, -4, 4, -3, -4, 4, -3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 5, 0, 0]],
	            [230, 10, "なし", "普通", "中", 0, 0, [8, 7, 9, -4, 4, -3, -4, 4, -3, -2, -1, -1, 2, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 5, 0, 0]]
	        ],
	        "ルドラゾフル": [
	            [190, -20, "左/小", "普通", "中", 0, 0, [5, 2, 6, -3, 4, 3, -3, 3, 3, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1]],
	            [190, -10, "左/小", "普通", "中", 0, 0, [5, 2, 7, -3, 4, 3, -3, 3, 3, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1]],
	            [200, -20, "左/小", "普通", "中", 0, 0, [6, 2, 7, -3, 4, 3, -3, 3, 4, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1]],
	            [200, -10, "左/小", "普通", "中", 0, 0, [6, 2, 8, -3, 4, 4, -4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1]],
	            [210, -20, "左/小", "普通", "中", 0, 0, [6, 2, 8, -3, 4, 4, -4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1]],
	            [210, -10, "左/小", "普通", "中", 0, 0, [7, 2, 8, -4, 5, 4, -4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1]],
	            [220, -20, "左/小", "普通", "中", 0, 0, [7, 2, 8, -4, 5, 5, -4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1]],
	            [220, -10, "左/小", "普通", "中", 0, 0, [7, 2, 9, -4, 5, 5, -4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2]],
	            [230, -20, "左/小", "普通", "中", 0, 0, [8, 2, 9, -4, 6, 5, -4, 4, 4, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2]],
	            [230, -10, "左/小", "普通", "中", 0, 0, [8, 3, 9, -4, 6, 6, -4, 4, 4, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2]]
	        ],
	        "爆焔のエンサー": [
	            [170, 0, "なし", "普通", "中", 0, 0, [6, 5, 6, -4, 4, -4, -3, 3, 3, 1, 1, 1, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]],
	            [180, 0, "なし", "普通", "中", 0, 0, [7, 5, 6, -4, 4, -4, -4, 4, 3, 1, 1, 1, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0]],
	            [190, 0, "なし", "普通", "中", 0, 0, [7, 5, 7, -4, 4, -4, -5, 5, 3, 1, 1, 1, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0]],
	            [200, 0, "なし", "普通", "中", 0, 0, [7, 5, 7, -4, 4, -4, -5, 5, 4, 1, 1, 1, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0]],
	            [200, 0, "なし", "普通", "中", 0, 0, [7, 5, 7, -4, 4, -4, -5, 5, 4, 1, 1, 1, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0]],
	            [210, 0, "なし", "普通", "中", 0, 0, [7, 6, 7, -4, 4, -4, -6, 6, 4, 1, 1, 1, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0]],
	            [210, 0, "なし", "普通", "中", 0, 0, [7, 6, 8, -5, 4, -4, -6, 6, 5, 1, 1, 1, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 0, 0, 0, 0]],
	            [220, 0, "なし", "普通", "中", 0, 0, [7, 6, 8, -5, 4, -4, -7, 7, 5, 2, 2, 2, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 0, 0, 0, 0]],
	            [220, 0, "なし", "普通", "中", 0, 0, [7, 6, 9, -5, 5, -4, -7, 7, 5, 2, 2, 2, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 0, 0, 0, 0]],
	            [230, 0, "なし", "普通", "中", 0, 0, [8, 6, 9, -5, 5, -4, -8, 8, 5, 2, 2, 2, -2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 0, 0, 0, 0]]
	        ],
	        "アームキャノン": [
	            [190, 0, "なし", "普通", "中", 3, 10, [7, -6, 5, -3, 3, 3, -4, 2, 2, 1, 1, -1, -1, 1, 1, 2, 2, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0, 3, 2, 1]],
	            [200, 0, "なし", "普通", "中", 3, 15, [8, -7, 6, -3, 3, 3, -4, 2, 3, 2, 1, -1, -1, 1, 1, 2, 3, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0, 3, 3, 1]],
	            [210, 0, "なし", "普通", "中", 3, 20, [9, -8, 7, -3, 3, 3, -4, 3, 3, 2, 2, -1, -1, 1, 1, 2, 3, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0, 4, 3, 1]]
	        ]
	    },
	    heavybowgun: {
	        "ベルダーキャノン": [
	            [80, 0, "なし", "やや遅い", "中", 0, 0, [4, 3, 4, 3, 3, -3, -3, -2, -2, -1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0]],
	            [90, 0, "なし", "やや遅い", "中", 0, 0, [4, 4, 5, 3, 3, -3, -3, -2, -2, 1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0]],
	            [100, 0, "なし", "やや遅い", "中", 0, 0, [5, 5, 6, 3, 3, -3, -3, -2, -2, 1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0]],
	            [110, 0, "なし", "やや遅い", "中", 0, 0, [5, 5, 6, 4, 4, -3, -3, -2, -2, 1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0]],
	            [120, 0, "なし", "やや遅い", "中", 0, 0, [5, 5, 6, 4, 4, -3, -3, -2, -2, 2, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 4, 0]],
	            [160, 0, "なし", "やや遅い", "中", 0, 0, [6, 6, 7, 4, 4, -3, -4, -3, -3, 2, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 4, 0]],
	            [180, 0, "なし", "やや遅い", "中", 0, 0, [6, 6, 7, 5, 5, -3, -4, -3, -3, 2, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 4, 0]],
	            [200, 0, "なし", "やや遅い", "中", 0, 0, [6, 6, 7, 5, 5, -3, -4, -3, -3, 2, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 4, 0]]
	        ],
	        "アルバレスト": [
	            [90, 0, "なし", "普通", "中", 0, 0, [4, 3, 5, 3, -3, -3, 3, -3, -3, 2, -1, -1, -1, -1, -1, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [100, 0, "なし", "普通", "中", 0, 0, [4, 3, 5, 3, -3, -3, 3, -3, -3, 2, -1, -1, -1, -1, -1, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [110, 0, "なし", "普通", "中", 0, 0, [5, 4, 6, 3, -3, -3, 3, -3, -3, 2, 1, -1, -1, -1, -1, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [120, 0, "なし", "普通", "中", 0, 0, [5, 4, 6, 3, -3, -3, 3, -3, -3, 2, 1, -1, -2, -1, -1, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [130, 0, "なし", "普通", "中", 0, 0, [5, 5, 6, 4, -3, -3, 4, -3, -3, 2, 1, 1, -2, -1, -1, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [140, 0, "なし", "普通", "中", 0, 0, [6, 5, 7, 4, 3, -3, 4, 3, -3, 2, 1, 1, -2, -1, -1, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [170, 0, "なし", "普通", "中", 0, 0, [6, 6, 7, 4, 3, -3, 4, 3, -3, 2, 1, 1, -2, -1, -1, 2, 0, 3, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [190, 0, "なし", "普通", "中", 0, 0, [6, 6, 7, 4, 3, -3, 4, 3, -3, 2, 1, 1, -2, -1, -1, 2, 0, 3, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]]
	        ],
	        "ボーンシューター": [
	            [70, 0, "なし", "普通", "大", 0, 0, [3, 3, 4, 3, -3, -3, 3, -3, -3, -1, -1, -1, 1, -1, -1, 2, 1, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0]],
	            [80, 0, "なし", "普通", "大", 0, 0, [3, 4, 5, 3, -3, -3, 3, -3, -3, -1, -1, -1, 1, -1, -1, 2, 1, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0]],
	            [90, 0, "なし", "普通", "大", 0, 0, [4, 5, 6, 3, -3, -3, 4, -4, -4, -1, -1, -1, 1, -1, -1, 2, 1, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0]],
	            [100, 0, "なし", "普通", "大", 0, 0, [4, 5, 6, 3, -3, -3, 4, -4, -4, -1, -1, -1, 1, -1, -1, 2, 1, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0]],
	            [120, 0, "なし", "普通", "大", 0, 0, [5, 5, 6, 3, -3, -3, 5, 4, -4, -1, -1, -1, 1, -1, -1, 2, 1, 0, 0, 3, 0, 0, 0, 0, 0, 4, 0, 3, 0, 0]],
	            [150, 0, "なし", "普通", "大", 0, 0, [6, 6, 7, 4, -4, -3, 5, 4, -4, -1, -1, -1, 1, -1, -1, 2, 1, 0, 0, 3, 1, 0, 0, 0, 0, 4, 0, 3, 0, 0]],
	            [170, 0, "なし", "普通", "大", 0, 0, [6, 6, 7, 4, -4, -3, 6, 5, 4, -1, -1, -1, 1, 1, -1, 2, 1, 0, 0, 3, 1, 0, 0, 0, 0, 4, 0, 3, 0, 0]],
	            [180, 0, "なし", "普通", "大", 0, 0, [6, 6, 7, 4, -4, -3, 6, 5, 4, -1, -1, -1, 1, 1, 1, 2, 1, 0, 0, 3, 1, 0, 0, 0, 0, 4, 0, 3, 0, 0]]
	        ],
	        "インジェクションガン": [
	            [100, 0, "なし", "やや遅い", "中", 0, 5, [4, 4, 5, 3, -3, -3, 4, 3, 3, -1, -1, -1, 1, -1, -1, 3, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0]],
	            [110, 0, "なし", "やや遅い", "中", 0, 5, [4, 4, 5, 3, -3, -3, 4, 3, 3, -1, -1, -1, 1, -1, -1, 3, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0]],
	            [130, 0, "なし", "やや遅い", "中", 0, 5, [5, 5, 9, 4, -3, -3, 5, 4, 4, -1, -1, -1, 1, -1, -1, 3, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 4, 0, 2]],
	            [170, 0, "なし", "やや遅い", "中", 0, 10, [6, 6, 9, 4, -3, -3, 6, 5, 5, -1, -1, -1, 2, -1, -1, 3, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 4, 0, 2]],
	            [190, 0, "なし", "やや遅い", "中", 0, 10, [7, 6, 9, 5, -3, -3, 6, 5, 5, -1, -1, -1, 2, -1, -1, 3, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 4, 0, 2]]
	        ],
	        "サンドダイバー": [
	            [90, 0, "なし", "やや速い", "中", 0, 0, [5, 5, -6, 3, -3, -3, 3, -3, -3, 1, -1, -1, 1, -1, -1, 3, 3, 0, 0, 3, 1, 3, 1, 3, 1, 4, 4, 4, 0, 0]],
	            [100, 0, "なし", "やや速い", "中", 0, 0, [5, 5, -6, 3, -3, -3, 3, -3, -3, 1, -1, -1, 1, -1, -1, 3, 3, 0, 0, 3, 1, 3, 1, 3, 1, 4, 4, 4, 0, 0]],
	            [120, 0, "なし", "やや速い", "中", 0, 0, [5, 5, -6, 3, -3, -3, 3, -3, -3, 1, -1, -1, 1, -1, -1, 3, 3, 0, 0, 3, 1, 3, 1, 3, 1, 4, 4, 4, 0, 0]],
	            [150, 0, "なし", "やや速い", "中", 0, 0, [6, 6, -7, 4, -3, -3, 4, -3, -3, 1, -1, -1, 1, -1, -1, 3, 3, 0, 0, 3, 1, 3, 1, 3, 1, 4, 4, 4, 0, 0]],
	            [180, 0, "なし", "やや速い", "中", 0, 0, [7, 6, -7, 4, -3, -3, 4, -3, -3, 2, -1, -1, 2, -1, -1, 3, 3, 0, 0, 3, 1, 3, 1, 3, 1, 4, 4, 4, 0, 0]],
	            [190, 0, "なし", "やや速い", "中", 0, 0, [8, 6, -7, 4, -3, -3, 4, -3, -3, 2, -1, -1, 2, -1, -1, 3, 3, 0, 0, 3, 1, 3, 1, 3, 1, 4, 4, 4, 0, 0]]
	        ],
	        "ガウプシカ": [
	            [100, 0, "なし", "やや速い", "中", 0, 10, [4, 4, 5, -4, -4, -3, 4, 3, 3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 4, 0]],
	            [110, 0, "なし", "やや速い", "中", 0, 10, [4, 4, 5, -4, -4, -3, 4, 3, 3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 4, 0]],
	            [130, 0, "なし", "やや速い", "中", 0, 10, [4, 4, 5, -4, -4, -3, 4, 3, 3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 4, 0]],
	            [160, 0, "なし", "やや速い", "中", 0, 10, [5, 5, 6, -4, -4, -3, 4, 3, 3, -2, -2, -1, 1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 4, 0]],
	            [190, 0, "なし", "やや速い", "中", 0, 10, [5, 5, 6, -4, -4, -3, 4, 3, 3, -2, -2, -1, 1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 4, 0]]
	        ],
	        "リノマリーノ": [
	            [80, 0, "左/小", "やや遅い", "中", 0, 0, [4, 5, -5, -2, -3, -3, -3, 3, -3, 1, 1, 1, 1, -1, -1, 2, 1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0]],
	            [100, 0, "左/小", "やや遅い", "中", 0, 0, [5, 5, -5, -3, -3, -3, -3, 3, -3, 1, 1, 1, 1, -1, -1, 2, 1, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0]],
	            [140, 0, "左/小", "やや遅い", "中", 0, 0, [6, 5, -5, -4, -3, -3, -4, 4, -4, 2, 1, 1, 1, -1, -1, 2, 1, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0]],
	            [180, 0, "左/小", "やや遅い", "中", 0, 0, [7, 7, -8, -4, -3, -3, -5, 5, -5, 2, 2, 1, 1, -1, -1, 2, 1, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0]],
	            [200, 0, "左/小", "やや遅い", "中", 0, 0, [8, 7, -8, -4, -3, -3, -5, 5, -5, 2, 2, 2, 1, -1, -1, 2, 1, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0]]
	        ],
	        "ユクモノ重弩": [
	            [100, 0, "なし", "極速", "中", 0, 0, [4, 4, 5, -2, -1, -3, 2, -3, -4, -1, -1, -1, -1, -1, -1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0]],
	            [110, 0, "なし", "極速", "中", 0, 0, [5, 5, 5, -2, -1, -3, 2, -3, -4, -1, -1, -1, -1, -1, -1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0]],
	            [130, 0, "なし", "極速", "中", 0, 0, [5, 5, 6, -3, -2, -4, 3, -4, -4, -1, -1, -1, -1, -1, -1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0]],
	            [170, 0, "なし", "極速", "中", 0, 0, [6, 6, 6, -3, -2, -4, 4, -4, -4, -1, -1, -1, -1, -1, -1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0]],
	            [190, 0, "なし", "極速", "中", 0, 0, [7, 7, 7, -4, -3, -5, 5, -4, -4, -1, -1, -1, -1, -1, -1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0]]
	        ],
	        "メテオバズーカ": [
	            [100, 0, "なし", "やや遅い", "中", 2, 0, [4, 5, 7, 3, 3, -3, 5, 4, -3, 3, 2, 2, -1, -1, -1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 2, 2]],
	            [110, 0, "なし", "やや遅い", "中", 2, 0, [4, 5, 7, 3, 3, -3, 5, 4, -3, 3, 2, 2, -1, -1, -1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 2, 2]],
	            [120, 0, "なし", "やや遅い", "中", 2, 0, [4, 5, 7, 3, 3, -3, 5, 4, -3, 3, 3, 2, -1, -1, -1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 2, 2]],
	            [150, 0, "なし", "やや遅い", "中", 3, 0, [5, 6, 8, 4, 3, -3, 5, 5, -3, 3, 3, 3, -1, -1, -1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 2, 2]],
	            [190, 0, "なし", "やや遅い", "中", 3, 0, [5, 6, 8, 4, 3, -3, 5, 5, -3, 3, 3, 3, -1, -1, -1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 2, 2]]
	        ],
	        "イャンクック砲": [
	            [120, 0, "なし", "極遅", "中", 1, 5, [5, 5, 8, 3, 3, 3, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [140, 0, "なし", "極遅", "中", 1, 5, [7, 7, 8, 3, 3, 3, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [150, 0, "なし", "極遅", "中", 1, 10, [9, 9, 8, 3, 3, 3, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [180, 0, "なし", "極遅", "中", 1, 10, [9, 9, 9, 4, 4, 4, 5, 5, 5, 1, 1, 1, 1, 1, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [200, 0, "なし", "極遅", "中", 1, 15, [9, 9, 9, 4, 4, 4, 5, 5, 5, 1, 1, 1, 1, 1, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]]
	        ],
	        "スレイペンギーゴ": [
	            [110, 0, "なし", "普通", "中", 0, 0, [4, 3, -5, 3, 3, -3, -3, -3, -2, -1, -1, -1, -1, -1, -1, 3, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 3, 0]],
	            [120, 0, "なし", "普通", "中", 0, 0, [5, 3, -6, 3, 3, -3, -3, -3, -2, -1, -1, -1, -1, -1, -1, 3, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 3, 0]],
	            [140, 0, "なし", "普通", "中", 0, 0, [6, 4, -7, 4, 3, -3, -3, -3, -2, -1, -1, -1, -1, -1, -1, 3, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 3, 0]],
	            [180, 0, "なし", "普通", "中", 0, 0, [7, 4, -8, 5, 4, -3, -3, -3, -2, -1, -1, -1, -1, -1, -1, 3, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 3, 0, 4, 0]],
	            [200, 0, "なし", "普通", "中", 0, 0, [7, 4, -8, 5, 4, -3, -3, -3, -2, -1, -1, -1, -1, -1, -1, 3, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 3, 0, 4, 0]]
	        ],
	        "タンクメイジ": [
	            [110, 0, "なし", "やや遅い", "中", 0, 0, [6, 6, -8, 3, -3, -3, 4, 4, 4, 1, -1, -1, 1, 1, -1, 0, 0, 3, 1, 3, 1, 3, 1, 0, 0, 3, 0, 0, 0, 0]],
	            [120, 0, "なし", "やや遅い", "中", 0, 0, [7, 7, -8, 3, -3, -3, 5, 4, 4, 1, -1, -1, 1, 1, -1, 0, 0, 3, 1, 3, 1, 3, 1, 0, 0, 3, 0, 0, 0, 0]],
	            [140, 0, "なし", "やや遅い", "中", 0, 0, [8, 8, -9, 3, -3, -3, 6, 5, 5, 1, -1, -1, 1, 1, -1, 0, 0, 3, 1, 3, 1, 3, 1, 0, 0, 3, 0, 0, 0, 0]],
	            [180, 0, "なし", "やや遅い", "中", 0, 0, [9, 9, -9, 4, -3, -3, 6, 6, 5, 1, -1, -1, 2, 1, -1, 0, 0, 3, 1, 3, 1, 3, 1, 0, 0, 4, 0, 0, 0, 0]],
	            [200, 0, "なし", "やや遅い", "中", 0, 0, [9, 9, -9, 4, -3, -3, 6, 6, 5, 1, -1, -1, 2, 1, -1, 0, 0, 3, 1, 3, 1, 3, 1, 0, 0, 4, 0, 0, 0, 0]]
	        ],
	        "バスタークラブ": [
	            [110, 0, "なし", "やや遅い", "中", 1, 10, [4, 4, 5, 3, 4, 3, 3, -2, -2, -2, -1, -1, -1, 1, -1, 2, 0, 2, 1, 0, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0]],
	            [130, 0, "なし", "やや遅い", "中", 1, 10, [4, 4, 6, 3, 4, 3, 3, -2, -2, -2, -1, -1, -1, 1, -1, 2, 0, 2, 1, 0, 0, 2, 0, 0, 0, 0, 3, 0, 3, 0]],
	            [160, 0, "なし", "やや遅い", "中", 2, 20, [5, 5, 7, 3, 5, 3, 4, -2, -2, -2, -1, -1, -1, 1, -1, 3, 0, 3, 1, 0, 0, 2, 1, 0, 0, 0, 3, 0, 3, 0]],
	            [190, 0, "なし", "やや遅い", "中", 2, 20, [6, 5, 7, 5, 5, 3, 4, -2, -2, -2, -1, -1, -1, 1, -1, 3, 0, 3, 1, 0, 0, 2, 1, 0, 0, 0, 3, 0, 3, 0]],
	            [200, 0, "なし", "やや遅い", "中", 2, 30, [7, 6, 7, 5, 5, 3, 4, -2, -2, -2, -1, -1, -1, 1, -1, 3, 0, 3, 1, 0, 0, 2, 1, 0, 0, 0, 3, 0, 3, 0]]
	        ],
	        "キャロムボール": [
	            [130, 0, "右/小", "やや遅い", "中", 0, 10, [4, 4, 5, -4, -4, -3, -4, 4, -3, 1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [150, 0, "右/小", "やや遅い", "中", 0, 10, [5, 4, 5, -4, -4, -3, -4, 4, -3, 1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [180, 0, "右/小", "やや遅い", "中", 0, 20, [6, 5, 5, -4, -4, -3, -4, 4, -3, 1, 1, -1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [200, 0, "右/小", "やや遅い", "中", 0, 20, [7, 5, 5, -4, -4, -3, -4, 4, -3, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]]
	        ],
	        "バイナクルラ": [
	            [120, 5, "左右/小", "やや遅い", "やや小", 0, 0, [5, 5, 7, -3, 3, -3, -4, 4, 4, -1, -1, -1, -1, 1, -1, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 0, 0, 0, 0, 0]],
	            [130, 5, "左右/小", "やや遅い", "やや小", 0, 0, [6, 6, 8, -3, 3, -3, -4, 4, 4, -1, -1, -1, -1, 1, -1, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 0, 0, 0, 0, 0]],
	            [170, 5, "左右/小", "やや遅い", "やや小", 1, 0, [7, 7, 9, -3, 4, -3, -4, 5, 5, -1, -1, -1, -1, 2, -1, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 0, 0, 0, 0, 0]],
	            [190, 5, "左右/小", "やや遅い", "やや小", 1, 0, [8, 8, 9, -3, 4, -3, -4, 5, 5, -1, -1, -1, -1, 2, -1, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 0, 0, 0, 0, 0]]
	        ],
	        "４６式潜伏重砲": [
	            [110, 0, "なし", "やや遅い", "中", 1, 0, [5, 4, 6, 2, 2, -2, 3, -3, -3, -1, -1, -1, -1, -1, -1, 0, 0, 2, 1, 2, 0, 0, 0, 1, 1, 0, 4, 0, 0, 0]],
	            [120, 0, "なし", "やや遅い", "中", 1, 0, [6, 5, 7, 2, 2, -2, 3, -3, -3, -1, -1, -1, -1, -1, -1, 0, 0, 2, 1, 2, 0, 0, 0, 1, 1, 0, 4, 0, 0, 0]],
	            [140, 0, "なし", "やや遅い", "中", 1, 0, [7, 6, 8, 3, 3, -3, 4, -4, -4, -1, -1, -1, -1, -1, -1, 0, 0, 2, 1, 2, 0, 0, 0, 2, 2, 0, 5, 0, 0, 0]],
	            [180, 0, "なし", "やや遅い", "中", 1, 0, [8, 7, 9, 3, 3, -3, 4, -4, -4, -1, -1, -1, -1, -1, -1, 0, 0, 3, 2, 3, 0, 0, 0, 2, 2, 0, 5, 0, 0, 0]],
	            [200, 0, "なし", "やや遅い", "中", 1, 0, [9, 8, 9, 4, 4, -4, 5, -5, -5, -1, -1, -1, -1, -1, -1, 0, 0, 3, 2, 3, 0, 0, 0, 2, 2, 0, 5, 0, 0, 0]]
	        ],
	        "アイススロワー": [
	            [120, 0, "なし", "普通", "中", 1, 0, [7, 7, 9, 3, 2, 2, 4, 2, 2, -1, -1, -1, -2, -1, -1, 3, 3, 0, 0, 0, 0, 3, 1, 0, 0, 0, 3, 3, 3, 0]],
	            [140, 0, "なし", "普通", "中", 1, 0, [7, 7, 9, 3, 2, 2, 4, 2, 2, -1, -1, -1, -2, -1, -1, 3, 3, 0, 0, 0, 0, 3, 1, 0, 0, 0, 3, 3, 3, 0]],
	            [180, 0, "なし", "普通", "中", 1, 0, [9, 9, 9, 4, 3, 3, 4, 3, 3, -1, -1, -1, -2, -1, -1, 3, 3, 0, 0, 0, 0, 3, 1, 0, 0, 0, 4, 4, 4, 0]],
	            [200, 0, "なし", "普通", "中", 1, 0, [9, 9, 9, 4, 3, 3, 4, 3, 3, -1, -1, -1, -2, -1, -1, 3, 3, 0, 0, 0, 0, 3, 1, 0, 0, 0, 4, 4, 4, 0]]
	        ],
	        "バイトブラスター": [
	            [130, 0, "なし", "やや速い", "やや小", 1, 10, [6, 7, 8, 3, -3, -4, 4, 5, 5, -1, -1, -1, 3, -1, -1, 3, 3, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [150, 0, "なし", "やや速い", "やや小", 1, 10, [6, 7, 9, 3, -3, -4, 4, 5, 5, -1, -1, -1, 3, -1, -1, 3, 3, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [180, 0, "なし", "やや速い", "やや小", 2, 10, [7, 7, 9, 4, -3, -4, 5, 5, 6, -1, -1, -1, 3, -1, -1, 3, 3, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [200, 0, "なし", "やや速い", "やや小", 2, 10, [8, 8, 9, 5, -3, -4, 5, 5, 6, -1, -1, -1, 3, -1, -1, 3, 3, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
	        ],
	        "ヒドゥンスナイパー": [
	            [110, 20, "なし", "やや速い", "やや小", 0, 0, [4, 4, -5, 2, 4, -3, -2, -2, -2, 2, -1, -1, -2, -1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [120, 20, "なし", "やや速い", "やや小", 0, 0, [4, 4, -5, 2, 4, -3, -2, -2, -2, 2, -1, -1, -2, -1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [150, 30, "なし", "やや速い", "やや小", 0, 0, [5, 5, -6, 4, 5, -4, -3, -3, -2, 2, -1, -1, -2, -1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [180, 30, "なし", "やや速い", "やや小", 0, 0, [5, 5, -6, 4, 5, -4, -3, -3, -2, 2, -1, -1, -2, -1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [190, 30, "なし", "やや速い", "やや小", 0, 0, [5, 5, -6, 4, 5, -4, -3, -3, -2, 2, -1, -1, -2, -1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
	        ],
	        "ムーファイア": [
	            [110, 0, "左右/小", "やや遅い", "小", 0, 0, [4, 4, 5, 3, 3, 3, 3, 3, 3, 1, 1, -1, 1, 1, -1, 3, 2, 0, 0, 0, 0, 2, 1, 2, 1, 0, 0, 0, 2, 0]],
	            [120, 0, "左右/小", "やや遅い", "小", 0, 0, [5, 4, 6, 3, 3, 3, 3, 3, 3, 1, 1, -1, 1, 1, -1, 3, 2, 0, 0, 0, 0, 2, 1, 2, 1, 0, 0, 0, 3, 0]],
	            [130, 0, "左右/小", "やや遅い", "小", 0, 0, [5, 4, 8, 4, 4, 4, 3, 3, 4, 1, 1, 1, 1, 1, 1, 3, 2, 0, 0, 0, 0, 3, 1, 3, 1, 0, 0, 0, 3, 0]],
	            [170, 0, "左右/小", "やや遅い", "小", 0, 0, [6, 4, 8, 5, 4, 5, 4, 4, 4, 2, 1, 1, 2, 1, 1, 3, 2, 0, 0, 0, 0, 3, 2, 3, 2, 0, 0, 0, 4, 0]],
	            [190, 0, "左右/小", "やや遅い", "小", 0, 0, [7, 4, 8, 5, 4, 5, 5, 4, 4, 2, 1, 1, 2, 1, 1, 3, 2, 0, 0, 0, 0, 3, 2, 3, 2, 0, 0, 0, 4, 0]]
	        ],
	        "炎妃龍の石重弩": [
	            [130, -30, "左右/小", "やや遅い", "中", 0, 10, [5, 6, 8, 4, -3, -4, 3, 3, 3, 1, 1, -1, 1, 1, -1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [150, -30, "左右/小", "やや遅い", "中", 0, 10, [5, 6, 8, 4, -3, -4, 4, 3, 3, 1, 1, -1, 1, 1, -1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [210, -30, "左右/小", "やや遅い", "中", 0, 10, [6, 6, 8, 5, -4, -4, 4, 4, 4, 1, 1, -1, 1, 1, -1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [230, -30, "左右/小", "やや遅い", "中", 0, 10, [6, 6, 8, 5, -4, -4, 5, 4, 4, 1, 1, -1, 1, 1, -1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]]
	        ],
	        "アイルー大砲": [
	            [110, 0, "右/大", "やや遅い", "中", 1, 0, [4, 4, 4, -3, -3, -3, 3, 3, -4, -1, -1, -1, 1, -1, -1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [130, 0, "右/大", "やや遅い", "中", 1, 0, [4, 4, 4, -3, -3, -3, 3, 3, -4, -1, -1, -1, 1, -1, -1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [160, 0, "右/大", "やや遅い", "中", 1, 0, [5, 5, 5, -4, -4, -4, 3, 3, -4, -1, -1, -1, 1, -1, -1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [190, 0, "右/大", "やや遅い", "中", 1, 0, [5, 5, 5, -4, -4, -4, 3, 3, -4, -1, -1, -1, 2, -2, -2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [200, 0, "右/大", "やや遅い", "中", 1, 0, [6, 6, 6, -4, -4, -4, 3, 3, -4, -1, -1, -1, 2, -2, -2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
	        ],
	        "オブシドキャノン": [
	            [140, 10, "なし", "やや遅い", "大", 0, 0, [6, 6, 7, 4, 4, 3, -4, -3, -3, 2, -1, -1, 1, -1, -1, 2, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 4, 0]],
	            [180, 10, "なし", "やや遅い", "大", 0, 0, [7, 6, 8, 5, 5, 3, -4, -3, -3, 2, -1, -1, 1, -1, -1, 2, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 4, 0]],
	            [190, 10, "なし", "やや遅い", "大", 0, 0, [8, 7, 9, 6, 5, 3, -4, -3, -3, 2, -1, -1, 1, -1, -1, 2, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 4, 0]],
	            [210, 10, "なし", "やや遅い", "大", 0, 0, [9, 7, 9, 6, 5, 3, -4, -3, -3, 2, -1, -1, 1, -1, -1, 2, 3, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 4, 0]]
	        ],
	        "カホウ【烏】": [
	            [140, 0, "なし", "やや遅い", "中", 0, 0, [6, 6, 9, 3, 3, 3, 4, 4, 4, 1, 1, 1, 1, 1, 1, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0]],
	            [160, 0, "なし", "やや遅い", "中", 0, 0, [7, 7, 9, 3, 3, 3, 4, 4, 4, 1, 1, 1, 1, 1, 1, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0]],
	            [200, 0, "なし", "やや遅い", "中", 0, 0, [8, 8, 9, 3, 3, 3, 4, 4, 4, 1, 1, 1, 1, 1, 1, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0]],
	            [210, 0, "なし", "やや遅い", "中", 0, 0, [9, 9, 9, 3, 3, 3, 4, 4, 4, 1, 1, 1, 1, 1, 1, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0]]
	        ],
	        "ラギアブリッツ": [
	            [150, 0, "右/小", "普通", "やや小", 0, 0, [5, 5, -6, 2, -2, -2, 5, 5, -4, 1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0]],
	            [160, 0, "右/小", "普通", "やや小", 0, 0, [5, 5, -7, 2, -2, -2, 5, 5, -4, 1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0]],
	            [200, 0, "右/小", "普通", "やや小", 0, 0, [6, 6, -8, 3, -3, -3, 6, 6, -4, 1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 5, 0, 0]],
	            [210, 0, "右/小", "普通", "やや小", 0, 0, [6, 6, -9, 3, -3, -3, 6, 6, -4, 1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 5, 0, 0]]
	        ],
	        "王砲ライド": [
	            [150, 10, "なし", "普通", "中", 0, 0, [5, 6, -7, 3, 3, -3, 3, 4, -4, -2, -1, -1, -2, -1, -1, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0]],
	            [190, 10, "なし", "普通", "中", 0, 0, [6, 7, -8, 3, 3, -3, 3, 4, -4, -2, -1, -1, -2, -1, -1, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0]],
	            [210, 10, "なし", "普通", "中", 0, 0, [7, 8, -9, 3, 3, -3, 3, 4, -4, -2, -2, -2, -2, -2, -2, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 5, 0, 0]]
	        ],
	        "狐重砲ハライニケリナ": [
	            [150, 0, "なし", "やや速い", "やや小", 1, 0, [5, 5, -7, 4, 4, 4, 4, -3, -3, -1, 1, -1, -1, -1, -1, 2, 1, 0, 0, 0, 0, 0, 0, 3, 2, 0, 3, 0, 0, 0]],
	            [160, 0, "なし", "やや速い", "やや小", 1, 0, [6, 5, -7, 5, 5, 4, 4, -3, -3, -1, 1, -1, -1, -1, -1, 2, 1, 0, 0, 0, 0, 0, 0, 3, 2, 0, 4, 0, 0, 0]],
	            [200, 0, "なし", "やや速い", "やや小", 1, 0, [6, 5, -7, 5, 5, 5, 4, -3, -3, -1, 1, -1, -1, -1, -1, 2, 1, 0, 0, 0, 0, 0, 0, 3, 2, 0, 4, 0, 0, 0]],
	            [220, 0, "なし", "やや速い", "やや小", 1, 0, [7, 6, -8, 6, 6, 5, 4, -3, -3, -1, 1, -1, -1, -1, -1, 2, 1, 0, 0, 0, 0, 0, 0, 4, 2, 0, 4, 0, 0, 0]]
	        ],
	        "電竜砲【進撃】": [
	            [150, 10, "なし", "普通", "中", 2, 0, [5, 5, 8, 5, 6, 6, -3, 3, -3, 1, -1, -1, -2, -1, -1, 2, 1, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0]],
	            [160, 10, "なし", "普通", "中", 2, 0, [6, 5, 8, 5, 6, 6, -3, 3, -3, 1, -1, -1, -2, -1, -1, 2, 1, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 4, 0, 0]],
	            [200, 10, "なし", "普通", "中", 2, 0, [6, 6, 9, 6, 6, 6, -3, 3, -3, 2, -1, -1, -2, -1, -1, 2, 1, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 4, 0, 0]],
	            [220, 10, "なし", "普通", "中", 2, 0, [7, 6, 9, 6, 6, 6, -4, 4, -3, 2, -1, -1, -2, -1, -1, 2, 1, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 5, 0, 0]]
	        ],
	        "巨獣砲": [
	            [160, -10, "なし", "極遅", "中", 0, 15, [6, 6, 6, -5, 6, -5, 5, 5, 5, -2, 2, -2, 3, 2, 2, 2, 1, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 4, 0]],
	            [180, -10, "なし", "極遅", "中", 0, 20, [8, 6, 8, -5, 6, -5, 6, 5, 5, -2, 2, -2, 3, 2, 2, 2, 1, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 4, 0]],
	            [230, -10, "なし", "極遅", "中", 0, 25, [9, 8, 9, -6, 6, -6, 6, 6, 6, -2, 2, -2, 3, 2, 2, 2, 1, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 5, 0]],
	            [240, -10, "なし", "極遅", "中", 0, 30, [9, 8, 9, -6, 6, -6, 6, 6, 6, -2, 2, -2, 3, 2, 2, 2, 1, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 5, 0]]
	        ],
	        "灼炎のイグナー": [
	            [160, 0, "なし", "やや遅い", "中", 2, 0, [6, 6, 7, 3, 3, 4, 4, 3, 3, 2, 1, 1, 1, -1, -1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [170, 0, "なし", "やや遅い", "中", 2, 0, [6, 7, 7, 3, 3, 4, 4, 4, 4, 2, 2, 1, 2, -1, -1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [210, 0, "なし", "やや遅い", "中", 2, 0, [7, 7, 8, 4, 4, 5, 5, 5, 5, 2, 2, 2, 2, -1, -1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [230, 0, "なし", "やや遅い", "中", 2, 0, [8, 7, 8, 4, 4, 5, 5, 5, 5, 2, 2, 2, 2, -1, -1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]]
	        ],
	        "サイドアルシャマリ": [
	            [150, 10, "なし", "やや速い", "大", 1, 0, [6, 4, 2, 6, 4, -2, 5, 5, 2, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [160, 10, "なし", "やや速い", "大", 1, 0, [6, 5, 3, 6, 4, -2, 5, 5, 3, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [200, 10, "なし", "やや速い", "大", 1, 0, [6, 6, 3, 6, 4, -2, 6, 6, 3, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [210, 10, "なし", "やや速い", "大", 1, 0, [6, 6, 3, 6, 4, -2, 6, 6, 3, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
	        ],
	        "レックスハウル": [
	            [150, -10, "右/大", "やや遅い", "大", 0, 0, [4, 4, 5, -4, -3, 3, -3, -3, 3, 3, 3, 2, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1]],
	            [190, -10, "右/大", "やや遅い", "大", 0, 0, [5, 5, 6, -5, -4, 4, -4, -4, 4, 3, 3, 2, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1]],
	            [230, -10, "右/大", "やや遅い", "大", 0, 0, [6, 6, 7, -6, -5, 5, -5, -5, 5, 3, 3, 2, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1]]
	        ],
	        "ディオスキャノン": [
	            [150, 0, "なし", "普通", "やや小", 1, 0, [3, 3, 3, -3, 3, 3, 3, 4, 4, 2, 1, 1, 1, 1, -1, 2, 0, 2, 1, 0, 0, 0, 0, 2, 1, 3, 0, 0, 0, 0]],
	            [200, 0, "なし", "普通", "やや小", 1, 0, [4, 4, 3, -3, 4, 4, 3, 4, 4, 2, 1, 1, 1, 1, -1, 2, 0, 3, 1, 0, 0, 0, 0, 2, 1, 4, 0, 0, 0, 0]],
	            [210, 0, "なし", "普通", "やや小", 1, 0, [4, 4, 3, -3, 4, 4, 3, 4, 4, 2, 1, 1, 1, 1, -1, 2, 0, 3, 2, 0, 0, 0, 0, 2, 1, 4, 0, 0, 0, 0]]
	        ],
	        "トリガーofハザード": [
	            [150, 20, "なし", "普通", "中", 1, 0, [5, 6, 6, -2, 2, -2, 5, 3, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2]],
	            [190, 20, "なし", "普通", "中", 1, 0, [5, 6, 6, -3, 3, -3, 5, 4, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2]],
	            [210, 20, "なし", "普通", "中", 1, 0, [6, 6, 6, -3, 3, -3, 6, 4, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2]]
	        ],
	        "デルフ＝ダオラ": [
	            [150, 10, "左/小", "やや速い", "中", 1, 0, [4, 5, 6, 2, 4, 4, 3, -3, -3, 2, -1, -1, 1, 1, -1, 2, 1, 3, 1, 3, 1, 0, 0, 0, 0, 0, 2, 0, 3, 0]],
	            [160, 10, "左/小", "やや速い", "中", 1, 0, [5, 6, 6, 2, 4, 4, 3, -3, -3, 2, -1, -1, 1, 1, -1, 2, 1, 3, 1, 3, 1, 0, 0, 0, 0, 0, 2, 0, 3, 0]],
	            [210, 10, "左/小", "やや速い", "中", 1, 0, [6, 7, 6, 3, 5, 4, 4, -4, -4, 3, -1, -1, 2, 1, -1, 2, 1, 3, 1, 3, 1, 0, 0, 0, 0, 0, 3, 0, 3, 0]],
	            [230, 10, "左/小", "やや速い", "中", 1, 0, [6, 7, 6, 3, 5, 5, 4, -4, -4, 3, -1, -1, 2, 1, -1, 2, 1, 3, 1, 3, 1, 0, 0, 0, 0, 0, 4, 0, 4, 0]]
	        ],
	        "天秤といふ名の白骸": [
	            [160, 0, "右/小", "やや遅い", "やや小", 1, 0, [6, 6, 8, 5, 6, 4, -6, 6, -5, 1, 1, 1, -1, -1, 1, 2, 0, 0, 0, 3, 1, 0, 0, 3, 1, 0, 0, 0, 0, 2]],
	            [200, 0, "右/小", "やや遅い", "やや小", 1, 0, [7, 6, 9, 5, 6, 4, -6, 6, -5, 2, 2, 1, -1, -1, 1, 2, 0, 0, 0, 3, 1, 0, 0, 3, 1, 0, 0, 0, 0, 2]],
	            [210, 0, "右/小", "やや遅い", "やや小", 1, 0, [8, 7, 9, 6, 6, 5, -6, 6, -5, 3, 2, 1, -1, -1, 1, 2, 0, 0, 0, 3, 1, 0, 0, 3, 1, 0, 0, 0, 0, 2]],
	            [220, 0, "右/小", "やや遅い", "やや小", 1, 0, [9, 8, 9, 6, 6, 5, -6, 6, -5, 3, 2, 1, -1, -1, 1, 2, 0, 0, 0, 3, 1, 0, 0, 3, 1, 0, 0, 0, 0, 2]]
	        ],
	        "海造砲【火刃】": [
	            [150, 0, "左右/小", "やや遅い", "やや小", 0, 0, [8, 5, -5, -3, 3, -3, 3, 3, -4, 1, 1, 1, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0]],
	            [190, 0, "左右/小", "やや遅い", "やや小", 0, 0, [8, 5, -5, -3, 3, -3, 3, 3, -4, 1, 1, 1, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0]],
	            [210, 0, "左右/小", "やや遅い", "やや小", 0, 0, [8, 5, -5, -4, 4, -3, 4, 4, -4, 1, 1, 1, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0]]
	        ],
	        "真ユクモノ重弩": [
	            [140, 0, "なし", "やや遅い", "中", 2, 0, [5, 6, 8, 2, -2, -3, 3, -3, -3, 2, -1, -1, 1, 1, -1, 2, 0, 2, 1, 2, 1, 0, 0, 2, 0, 3, 3, 0, 0, 0]],
	            [150, 0, "なし", "やや遅い", "中", 2, 0, [6, 7, 8, 2, -2, -3, 3, -3, -3, 2, -1, -1, 1, 1, -1, 2, 0, 2, 1, 2, 1, 0, 0, 2, 0, 3, 3, 0, 0, 0]],
	            [200, 0, "なし", "やや遅い", "中", 2, 0, [7, 7, 9, 3, -2, -3, 4, -4, -4, 2, -1, -1, 1, 1, -1, 2, 0, 3, 1, 3, 1, 0, 0, 2, 0, 3, 3, 0, 0, 0]],
	            [210, 0, "なし", "やや遅い", "中", 2, 0, [8, 8, 9, 3, -2, -3, 4, -4, -4, 2, -1, -1, 1, 1, -1, 2, 0, 3, 2, 3, 2, 0, 0, 2, 0, 3, 3, 0, 0, 0]]
	        ],
	        "ブラックキャノン": [
	            [140, 0, "なし", "やや遅い", "中", 1, 0, [6, 6, 9, 3, 3, 3, -4, -4, -4, 1, 1, 1, 1, 1, 1, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 3, 3, 0, 0]],
	            [150, 0, "なし", "やや遅い", "中", 1, 0, [7, 7, 9, 3, 3, 3, -4, -4, -4, 2, 1, 1, 2, 1, 1, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 3, 5, 0, 0]],
	            [200, 0, "なし", "やや遅い", "中", 1, 0, [8, 7, 9, 3, 3, 3, -4, -4, -4, 2, 1, 1, 2, 1, 1, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 3, 5, 0, 0]],
	            [210, 0, "なし", "やや遅い", "中", 1, 0, [8, 8, 9, 3, 3, 3, -4, -4, -4, 2, 1, 1, 2, 1, 1, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 3, 5, 0, 0]]
	        ],
	        "ラピッドキャスト": [
	            [150, 0, "なし", "極速", "中", 0, 0, [6, 6, 9, 3, -3, -3, 4, -2, -2, 1, -1, -1, 1, -1, -1, 3, 0, 3, 0, 3, 0, 3, 0, 2, 0, 0, 0, 0, 3, 0]],
	            [180, 0, "なし", "極速", "中", 0, 0, [6, 6, 9, 3, -3, -3, 4, -2, -2, 1, -1, -1, 1, -1, -1, 3, 0, 3, 0, 3, 0, 3, 0, 2, 0, 0, 0, 0, 3, 0]],
	            [190, 0, "なし", "極速", "中", 0, 0, [7, 6, 9, 4, -3, -3, 4, -2, -2, 1, -1, -1, 1, -1, -1, 3, 0, 3, 0, 3, 0, 3, 0, 2, 0, 0, 0, 0, 3, 0]]
	        ],
	        "ラストニードル": [
	            [150, 0, "なし", "普通", "中", 0, 10, [6, 5, 7, 4, -3, -3, 5, 4, 3, -1, -1, -1, 1, 1, 1, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 3, 0, 0]],
	            [170, 0, "なし", "普通", "中", 0, 10, [6, 5, 7, 4, -3, -3, 5, 4, 3, -1, -1, -1, 1, 1, 1, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 3, 0, 0]],
	            [180, 0, "なし", "普通", "中", 0, 10, [6, 5, 7, 4, -3, -3, 6, 4, 3, -1, -1, -1, 2, 1, 1, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 3, 0, 0]]
	        ],
	        "討伐隊正式重砲": [
	            [150, 0, "なし", "普通", "中", 1, 0, [5, 5, 8, 3, 3, -4, 4, 3, 3, -2, 1, -1, 2, -1, -1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0]],
	            [190, 0, "なし", "普通", "中", 1, 0, [6, 6, 8, 4, 3, -4, 5, 3, 3, -2, 1, -1, 2, -1, -1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0]],
	            [210, 0, "なし", "普通", "中", 1, 0, [7, 7, 8, 4, 4, -4, 6, 4, 3, -2, 1, -1, 2, -1, -1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0]]
	        ],
	        "青熊筒": [
	            [160, 0, "なし", "普通", "中", 1, 5, [5, 6, -7, 2, 2, -2, 3, 3, -3, -1, -1, -1, 2, -1, -1, 2, 0, 2, 0, 2, 0, 2, 0, 3, 0, 3, 0, 0, 0, 0]],
	            [190, 0, "なし", "普通", "中", 1, 10, [6, 7, -8, 3, 3, -3, 4, 4, -4, -1, -1, -1, 2, -1, -1, 2, 0, 2, 0, 2, 0, 2, 0, 3, 0, 4, 0, 0, 0, 0]],
	            [200, 0, "なし", "普通", "中", 1, 15, [7, 8, -9, 3, 3, -3, 5, 5, -5, -1, -1, -1, 3, -1, -1, 2, 0, 3, 0, 3, 0, 3, 0, 3, 0, 5, 0, 0, 0, 0]]
	        ],
	        "荒縄鼓砲": [
	            [160, 0, "なし", "普通", "中", 1, 5, [3, 5, -5, 4, -3, -3, 4, 5, -4, -1, -1, -1, 3, -1, -1, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0]],
	            [190, 0, "なし", "普通", "中", 1, 10, [4, 6, -6, 4, -3, -3, 5, 5, -4, -1, -1, -1, 3, -1, -1, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 4, 0]],
	            [200, 0, "なし", "普通", "中", 1, 15, [5, 7, -7, 4, -3, -3, 6, 6, -4, -1, -1, -1, 3, -1, -1, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 0]]
	        ],
	        "ズッカカロッツァ": [
	            [150, 0, "なし", "やや遅い", "やや小", 2, 0, [5, 5, 5, 2, -3, -3, 5, 6, -4, 1, -1, -1, 1, -1, -1, 2, 1, 0, 0, 2, 0, 2, 1, 2, 1, 0, 3, 0, 0, 0]],
	            [190, 0, "なし", "やや遅い", "やや小", 2, 0, [6, 6, 6, 3, -3, -3, 5, 6, -4, 1, -1, -1, 1, -1, -1, 2, 1, 0, 0, 2, 0, 2, 1, 2, 1, 0, 3, 0, 0, 0]],
	            [200, 0, "なし", "やや遅い", "やや小", 2, 0, [7, 7, 7, 4, -3, -3, 6, 6, -4, 1, -1, -1, 1, -1, -1, 2, 1, 0, 0, 3, 0, 3, 1, 3, 1, 0, 3, 0, 0, 0]]
	        ],
	        "ピアースクラブ": [
	            [190, 0, "なし", "普通", "中", 1, 0, [6, 6, 9, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 0, 0, 3, 1, 0, 0, 0, 3, 0, 3, 0]],
	            [200, 0, "なし", "普通", "中", 1, 0, [7, 7, 9, 5, 4, 4, 3, 3, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 0, 0, 3, 1, 0, 0, 0, 3, 0, 3, 0]],
	            [210, 0, "なし", "普通", "中", 1, 0, [8, 8, 9, 6, 4, 4, 4, 3, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 0, 0, 3, 1, 0, 0, 0, 3, 0, 3, 0]]
	        ],
	        "ガノスプレッシャー": [
	            [180, 5, "なし", "やや速い", "やや小", 0, 10, [5, 5, -6, 2, 2, -3, 2, 3, 4, 1, -1, -1, 1, -1, -1, 2, 0, 2, 0, 1, 0, 3, 1, 2, 0, 0, 4, 0, 0, 0]],
	            [190, 5, "なし", "やや速い", "やや小", 0, 10, [5, 5, -6, 2, 2, -3, 2, 3, 4, 1, -1, -1, 1, -1, -1, 2, 0, 2, 0, 1, 0, 3, 1, 2, 0, 0, 4, 0, 0, 0]],
	            [210, 5, "なし", "やや速い", "やや小", 0, 10, [5, 5, -6, 2, 2, -3, 2, 3, 4, 1, -1, -1, 1, -1, -1, 2, 0, 2, 0, 1, 0, 3, 1, 2, 0, 0, 4, 0, 0, 0]]
	        ],
	        "メテオバスター": [
	            [180, 0, "なし", "やや速い", "中", 2, 0, [6, 6, 9, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 0, 0, 0]],
	            [190, 0, "なし", "やや速い", "中", 2, 0, [7, 7, 9, 4, 4, 4, 3, 3, 2, 2, 1, 1, 2, 1, 1, 3, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 0, 0, 0]],
	            [210, 0, "なし", "やや速い", "中", 2, 0, [7, 7, 9, 4, 4, 4, 4, 3, 2, 2, 2, 1, 2, 2, 1, 3, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 0, 0, 0]]
	        ],
	        "チャージグリフサルト": [
	            [160, 0, "左/小", "やや遅い", "中", 0, 0, [7, 5, -8, -5, -5, -5, 4, 3, 3, -2, -1, -1, 1, -1, -1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]],
	            [200, 0, "左/小", "やや遅い", "中", 0, 0, [7, 6, -9, -5, -5, -5, 4, 3, 3, -2, -1, -1, 1, -1, -1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]],
	            [220, 0, "左/小", "やや遅い", "中", 0, 0, [8, 7, -9, -5, -5, -5, 4, 3, 3, -2, -1, -1, 1, -1, -1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]]
	        ],
	        "妃竜砲【遠撃】": [
	            [180, 0, "なし", "やや遅い", "中", 2, 0, [7, 8, 9, 2, 3, -3, 3, 4, -3, -1, -1, -1, 1, 1, -1, 2, 0, 3, 2, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [190, 0, "なし", "やや遅い", "中", 2, 0, [8, 8, 9, 3, 4, -3, 3, 4, -3, -1, -1, -1, 1, 1, -1, 2, 0, 3, 2, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [210, 0, "なし", "やや遅い", "中", 2, 0, [9, 8, 9, 4, 5, -3, 3, 4, -3, -2, -1, -1, 1, 1, -1, 2, 0, 3, 2, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0]]
	        ],
	        "アグナブロウ": [
	            [200, 5, "なし", "やや遅い", "大", 0, 0, [5, 6, -6, 3, 3, -3, -4, 3, -3, 2, 2, -1, -1, 1, -1, 2, 1, 2, 0, 1, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0]],
	            [210, 5, "なし", "やや遅い", "大", 0, 0, [5, 6, -6, 4, 4, -3, -4, 3, -3, 2, 2, -1, -1, 1, -1, 2, 1, 2, 0, 1, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0]],
	            [220, 5, "なし", "やや遅い", "大", 0, 0, [6, 6, -6, 4, 4, -3, -4, 4, -3, 2, 2, -1, -1, 1, -1, 2, 1, 3, 0, 2, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0]]
	        ],
	        "クイックキャスト": [
	            [170, 0, "なし", "極速", "中", 0, 0, [6, 6, 9, 3, 3, 3, 4, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 2, 2, 3, 2, 0]],
	            [180, 0, "なし", "極速", "中", 0, 0, [7, 6, 9, 4, 3, 3, 4, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0]],
	            [190, 0, "なし", "極速", "中", 0, 0, [8, 7, 9, 5, 4, 3, 4, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0]]
	        ],
	        "ブルームスター": [
	            [180, 0, "なし", "やや遅い", "中", 1, 0, [4, 5, -7, 4, 3, -3, -3, -3, -3, 2, 2, -1, -1, -1, -1, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0, 2]],
	            [190, 0, "なし", "やや遅い", "中", 1, 0, [4, 5, -7, 5, 3, -3, -4, -3, -3, 2, 2, -1, -1, -1, -1, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0, 2]],
	            [200, 0, "なし", "やや遅い", "中", 1, 0, [4, 5, -7, 6, 3, -3, -4, -3, -3, 2, 2, -1, -1, -1, -1, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 4, 0, 2]]
	        ],
	        "ナナホシ大砲": [
	            [180, 0, "右/大", "極遅", "中", 3, 20, [9, 9, 9, 3, 3, 3, 4, 4, 4, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1, 0, 0, 4, 0, 0]],
	            [190, 0, "右/大", "極遅", "中", 3, 20, [9, 9, 9, 4, 3, 3, 4, 4, 4, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1, 0, 0, 4, 0, 0]],
	            [200, 0, "右/大", "極遅", "中", 3, 20, [9, 9, 9, 4, 4, 4, 5, 5, 5, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1, 0, 0, 4, 0, 0]]
	        ],
	        "叛逆の怒砲": [
	            [210, 10, "なし", "やや速い", "大", 1, 0, [6, 4, 2, 6, 4, -2, 5, 5, 2, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [220, 10, "なし", "やや速い", "大", 1, 0, [6, 5, 3, 6, 4, -2, 5, 5, 3, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [230, 10, "なし", "やや速い", "大", 1, 0, [6, 6, 3, 6, 4, -2, 6, 6, 3, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
	        ],
	        "モンテベルデ": [
	            [210, 0, "なし", "普通", "大", 0, 10, [2, 3, 2, 6, 6, 5, 4, 4, 4, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 3, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0]],
	            [220, 0, "なし", "普通", "大", 0, 20, [2, 3, 2, 6, 6, 5, 5, 5, 4, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 3, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0]],
	            [230, 0, "なし", "普通", "大", 0, 25, [2, 3, 2, 6, 6, 5, 6, 5, 4, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 3, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0]]
	        ],
	        "爆砕の重砲": [
	            [210, 0, "なし", "普通", "やや小", 1, 0, [4, 4, 3, -3, 4, 4, 3, 4, 4, 2, 2, 1, 1, 1, -1, 2, 0, 3, 2, 0, 0, 0, 0, 2, 1, 4, 0, 0, 0, 0]],
	            [220, 0, "なし", "普通", "やや小", 1, 0, [4, 4, 3, -3, 4, 4, 3, 4, 4, 2, 2, 1, 1, 1, -1, 2, 0, 3, 2, 0, 0, 0, 0, 2, 1, 4, 0, 0, 0, 0]],
	            [230, 0, "なし", "普通", "やや小", 1, 0, [5, 4, 3, -3, 5, 4, 3, 4, 4, 2, 2, 1, 1, 1, -1, 2, 0, 3, 2, 0, 0, 0, 0, 2, 1, 4, 0, 0, 0, 0]]
	        ],
	        "THEディザスター": [
	            [200, 30, "なし", "普通", "中", 1, 0, [5, 7, 7, -3, 2, -3, 5, 3, -3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 2]],
	            [210, 30, "なし", "普通", "中", 1, 0, [6, 7, 8, -3, 2, -3, 5, 3, -3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 2]],
	            [220, 30, "なし", "普通", "中", 1, 0, [7, 8, 9, -3, 2, -3, 5, 3, -3, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 2]]
	        ],
	        "暴食の重弩": [
	            [200, -10, "左/大", "やや遅い", "中", 0, 0, [5, 5, 9, -3, 4, 4, -3, 4, 5, -1, -1, -1, -1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 3]],
	            [210, -10, "左/大", "やや遅い", "中", 0, 0, [6, 5, 9, -3, 4, 4, -4, 5, 6, -1, -1, -1, -1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 3]],
	            [220, -10, "左/大", "やや遅い", "中", 0, 0, [7, 5, 9, -4, 5, 5, -5, 5, 6, -1, -1, -1, -1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 4, 0, 0, 0, 3]]
	        ],
	        "ヒーローブラスター": [
	            [160, 40, "なし", "やや遅い", "中", 2, 0, [6, 6, 8, 4, 5, 6, 4, 5, 5, 1, 1, 1, 1, 1, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [180, 40, "なし", "やや遅い", "中", 2, 0, [6, 6, 8, 4, 5, 6, 4, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [190, 40, "なし", "やや遅い", "中", 2, 0, [7, 6, 8, 4, 5, 6, 4, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]]
	        ],
	        "カーマエレオーン": [
	            [210, 0, "左右/小", "やや速い", "中", 2, 30, [6, 6, 9, 3, 3, -3, 4, 4, -4, 1, 1, 1, 2, -1, -1, 3, 3, 2, 1, 2, 1, 2, 1, 2, 1, 4, 0, 0, 0, 2]],
	            [220, 0, "左右/小", "やや速い", "中", 2, 30, [7, 7, 9, 3, 3, -3, 4, 4, -4, 1, 1, 1, 2, -1, -1, 3, 3, 3, 2, 2, 1, 3, 1, 3, 1, 4, 0, 0, 0, 2]],
	            [230, 0, "左右/小", "やや速い", "中", 2, 30, [8, 8, 9, 3, 3, -3, 4, 4, -4, 1, 1, 1, 2, -1, -1, 3, 3, 4, 3, 2, 1, 3, 2, 3, 2, 4, 0, 0, 0, 2]]
	        ],
	        "テオ＝アーティレリ": [
	            [210, 5, "右/大", "やや遅い", "中", 0, 0, [6, 6, 9, 3, 3, 4, 3, -3, -3, 2, 2, 2, 2, -1, -1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [220, 5, "右/大", "やや遅い", "中", 0, 0, [7, 7, 9, 4, 4, 4, 3, -4, -4, 2, 2, 2, 2, -1, -1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [230, 5, "右/大", "やや遅い", "中", 0, 0, [8, 8, 9, 5, 5, 4, 4, -4, -4, 2, 2, 2, 2, -1, -1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0]]
	        ],
	        "業重弩ファミン": [
	            [220, -15, "左/大", "普通", "中", 0, 0, [6, 5, 9, -3, 4, 4, -3, 4, 5, -1, -1, -1, -1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 2]],
	            [230, -15, "左/大", "普通", "中", 0, 0, [6, 5, 9, -3, 4, 4, -4, 4, 6, -1, -1, -1, -1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 2]],
	            [240, -15, "左/大", "普通", "中", 0, 0, [7, 5, 9, -4, 5, 4, -5, 5, 6, -1, -1, -1, -1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 2]]
	        ],
	        "覇砲ユプカムトルム": [
	            [210, 40, "左/小", "やや遅い", "中", 0, 0, [4, 4, 5, 2, 3, 3, 2, -2, -2, -1, 1, 1, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2]],
	            [210, 40, "左/小", "やや遅い", "中", 0, 0, [5, 5, 6, 2, 3, 3, 2, -2, -2, -1, 1, 1, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 2]],
	            [220, 40, "左/小", "やや遅い", "中", 0, 0, [6, 5, 6, 3, 4, 3, 3, -3, -3, -1, 1, 1, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 2]]
	        ],
	        "崩砲バセカムルバス": [
	            [240, -30, "左右/小", "やや遅い", "大", 1, 20, [5, 6, 9, 3, 3, 4, 3, 3, -4, -1, -1, -1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 4, 0, 4, 0]],
	            [250, -30, "左右/小", "やや遅い", "大", 1, 20, [6, 7, 9, 3, 3, 4, 4, 4, -4, -1, -1, -1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 4, 0, 4, 0]],
	            [260, -30, "左右/小", "やや遅い", "大", 1, 20, [7, 8, 9, 4, 4, 5, 4, 4, -4, -1, -1, -1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 5, 0, 4, 0]]
	        ],
	        "凶刻【時雨】": [
	            [210, -5, "なし", "やや速い", "やや小", 1, 0, [7, 8, 9, 2, 2, 3, -2, 3, -3, 1, 1, 1, -1, -1, -1, 0, 2, 0, 2, 0, 1, 0, 1, 0, 2, 0, 3, 3, 0, 0]],
	            [220, -5, "なし", "やや速い", "やや小", 1, 0, [8, 8, 9, 2, 2, 3, -2, 3, -3, 1, 1, 1, -1, -1, -1, 0, 2, 0, 2, 0, 1, 0, 1, 0, 2, 0, 4, 4, 0, 0]],
	            [230, -5, "なし", "やや速い", "やや小", 1, 0, [9, 8, 9, 2, 2, 3, -2, 3, -3, 1, 1, 1, -1, -1, -1, 0, 2, 0, 3, 0, 1, 0, 1, 0, 2, 0, 4, 4, 0, 0]]
	        ],
	        "極星砲ヴィズィ": [
	            [180, 10, "なし", "やや速い", "小", 3, 0, [6, 6, 8, 4, 5, -5, -5, 5, -5, 1, 1, 1, -1, -1, 1, 2, 0, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 0, 0, 2]],
	            [190, 10, "なし", "やや速い", "小", 3, 0, [6, 6, 8, 4, 5, -5, -5, 5, -5, 2, 1, 1, -1, -1, 1, 2, 0, 0, 0, 3, 1, 0, 0, 3, 1, 0, 0, 0, 0, 2]],
	            [200, 15, "なし", "やや速い", "小", 3, 0, [7, 7, 8, 5, 6, -6, -6, 6, -5, 2, 2, 1, -1, -1, 1, 2, 0, 0, 0, 3, 1, 0, 0, 3, 1, 0, 0, 0, 0, 2]]
	        ],
	        "カオスウイング": [
	            [210, 10, "なし", "やや遅い", "中", 0, 0, [5, 5, 6, -3, 3, -3, -3, 3, -3, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 2]],
	            [220, 10, "なし", "やや遅い", "中", 0, 0, [5, 5, 6, -3, 3, -3, -3, 3, -3, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 2]],
	            [230, 10, "なし", "やや遅い", "中", 0, 0, [6, 6, 7, -3, 3, -3, -3, 3, -3, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 2]]
	        ],
	        "紅熊轟筒": [
	            [90, 0, "なし", "普通", "中", 0, 0, [4, 3, -7, 2, 2, -2, 3, 3, -3, -1, -1, -1, 1, -1, -1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0]],
	            [100, 0, "なし", "普通", "中", 0, 0, [4, 3, -7, 2, 2, -2, 3, 3, -3, -1, -1, -1, 1, -1, -1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0]],
	            [110, 0, "なし", "普通", "中", 0, 0, [5, 4, -7, 2, 2, -2, 3, 3, -3, -1, -1, -1, 1, -1, -1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0]],
	            [130, 0, "なし", "普通", "中", 0, 0, [5, 5, -7, 2, 2, -2, 3, 3, -3, -1, -1, -1, 1, -1, -1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 0, 0, 0, 0]],
	            [140, 0, "なし", "普通", "中", 0, 0, [5, 5, -7, 2, 2, -2, 3, 3, -3, -1, -1, -1, 1, -1, -1, 2, 0, 2, 0, 1, 0, 1, 0, 1, 0, 2, 0, 0, 0, 0]],
	            [170, 0, "なし", "普通", "中", 0, 0, [5, 5, -7, 2, 2, -2, 3, 3, -3, -1, -1, -1, 1, -1, -1, 2, 0, 2, 0, 1, 0, 1, 0, 2, 0, 2, 0, 0, 0, 0]],
	            [180, 0, "なし", "普通", "中", 0, 0, [5, 6, -7, 3, 2, -2, 4, 3, -3, -1, -1, -1, 1, -1, -1, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0]],
	            [190, 0, "なし", "普通", "中", 0, 0, [5, 6, -7, 3, 2, -2, 4, 3, -3, -1, -1, -1, 1, -1, -1, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 3, 0, 0, 0, 0]],
	            [200, 0, "なし", "普通", "中", 0, 0, [6, 6, -7, 4, 3, -2, 4, 3, -3, -1, -1, -1, 2, -1, -1, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 4, 0, 0, 0, 0]],
	            [210, 0, "なし", "普通", "中", 0, 0, [7, 6, -7, 4, 3, -2, 4, 4, -3, -1, -1, -1, 2, -1, -1, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 4, 0, 0, 0, 0]]
	        ],
	        "エオストペンギーゴ": [
	            [90, 0, "なし", "普通", "中", 0, 0, [4, 2, -6, 3, 3, -3, -3, -3, -2, -1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0]],
	            [100, 0, "なし", "普通", "中", 0, 0, [4, 2, -6, 3, 3, -3, -3, -3, -2, -1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0]],
	            [110, 0, "なし", "普通", "中", 0, 0, [4, 2, -6, 3, 3, -3, -3, -3, -2, -1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0]],
	            [130, 0, "なし", "普通", "中", 0, 0, [5, 3, -6, 4, 3, -3, -3, -3, -2, -1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0]],
	            [140, 0, "なし", "普通", "中", 0, 0, [5, 4, -6, 4, 4, -3, -3, -3, -2, -1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 2, 0]],
	            [170, 0, "なし", "普通", "中", 0, 0, [5, 4, -6, 4, 4, -3, -3, -3, -2, -1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 2, 0]],
	            [180, 0, "なし", "普通", "中", 0, 0, [6, 4, -6, 5, 4, -3, -3, -3, -2, -1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 2, 0]],
	            [190, 0, "なし", "普通", "中", 0, 0, [6, 5, -6, 5, 5, -3, -3, -3, -2, -1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 2, 0]],
	            [200, 0, "なし", "普通", "中", 0, 0, [6, 5, -6, 5, 5, -3, -3, -3, -2, -1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 4, 0, 2, 0]],
	            [210, 0, "なし", "普通", "中", 0, 0, [7, 6, -6, 5, 5, -3, -3, -3, -2, -1, -1, -1, -1, -1, -1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 4, 0, 2, 0]]
	        ],
	        "ウィルガバスター": [
	            [90, 0, "なし", "やや遅い", "中", 0, 0, [3, 2, 2, 3, 3, 3, 3, -2, -2, -2, -1, -1, -1, 1, -1, 2, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 2, 0, 2, 0]],
	            [100, 0, "なし", "やや遅い", "中", 0, 0, [4, 2, 3, 4, 4, 3, 3, -2, -2, -2, -1, -1, -1, 1, -1, 2, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 2, 0, 2, 0]],
	            [110, 0, "なし", "やや遅い", "中", 0, 0, [4, 3, 4, 4, 4, 4, 3, -2, -2, -2, -1, -1, -1, 1, -1, 2, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 2, 0, 2, 0]],
	            [130, 0, "なし", "やや遅い", "中", 0, 0, [4, 4, 4, 5, 4, 4, 3, -2, -2, -2, -1, -1, -1, 1, -1, 2, 0, 2, 1, 0, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0]],
	            [140, 0, "なし", "やや遅い", "中", 0, 0, [5, 4, 4, 5, 4, 4, 3, -2, -2, -2, -1, -1, -1, 1, -1, 2, 0, 2, 1, 0, 0, 2, 1, 0, 0, 0, 2, 0, 2, 0]],
	            [170, 0, "なし", "やや遅い", "中", 0, 0, [5, 4, 4, 5, 4, 4, 3, -2, -2, -2, -1, -1, -1, 1, -1, 2, 0, 2, 1, 0, 0, 2, 1, 0, 0, 0, 2, 0, 2, 0]],
	            [180, 0, "なし", "やや遅い", "中", 0, 0, [5, 5, 5, 5, 4, 4, 3, -2, -2, -2, -1, -1, -1, 1, -1, 2, 0, 2, 1, 0, 0, 2, 1, 0, 0, 0, 2, 0, 2, 0]],
	            [190, 0, "なし", "やや遅い", "中", 0, 0, [6, 5, 6, 5, 4, 4, 3, -2, -2, -2, -1, -1, -1, 1, -1, 2, 0, 2, 1, 0, 0, 2, 1, 0, 0, 0, 2, 0, 2, 0]],
	            [200, 0, "なし", "やや遅い", "中", 0, 0, [7, 5, 7, 5, 4, 4, 4, -2, -2, -2, -1, -1, -1, 1, -1, 2, 0, 2, 1, 0, 0, 2, 1, 0, 0, 0, 3, 0, 3, 0]],
	            [210, 0, "なし", "やや遅い", "中", 0, 0, [7, 6, 8, 6, 5, 4, 4, -2, -2, -2, -1, -1, -1, 2, -1, 2, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 3, 0, 4, 0]]
	        ],
	        "紫毒姫竜砲": [
	            [90, 0, "なし", "やや遅い", "中", 0, 0, [4, 4, 5, 2, 2, -3, 2, 3, -3, -1, -1, -1, 1, 1, -1, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0]],
	            [100, 0, "なし", "やや遅い", "中", 0, 0, [5, 4, 5, 3, 3, -3, 3, 3, -3, -1, -1, -1, 1, 1, -1, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0]],
	            [110, 0, "なし", "やや遅い", "中", 0, 0, [5, 5, 5, 3, 3, -3, 3, 4, -3, -1, -1, -1, 1, 1, -1, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [130, 0, "なし", "やや遅い", "中", 0, 0, [5, 5, 5, 3, 3, -3, 3, 4, -3, -1, -1, -1, 1, 1, -1, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [140, 0, "なし", "やや遅い", "中", 0, 0, [5, 5, 5, 3, 3, -3, 3, 4, -3, -1, -1, -1, 1, 1, -1, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [160, 0, "なし", "やや遅い", "中", 0, 0, [5, 5, 6, 3, 3, -3, 3, 4, -3, -1, -1, -1, 1, 1, -1, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [170, 0, "なし", "やや遅い", "中", 0, 0, [6, 5, 6, 4, 3, -3, 3, 4, -3, -1, -1, -1, 1, 1, -1, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [180, 0, "なし", "やや遅い", "中", 0, 0, [6, 6, 6, 4, 4, -3, 4, 4, -3, -1, -1, -1, 1, 1, -1, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [190, 0, "なし", "やや遅い", "中", 0, 0, [6, 6, 7, 5, 4, -3, 4, 4, -3, -1, -1, -1, 1, 1, -1, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [200, 0, "なし", "やや遅い", "中", 0, 0, [7, 6, 8, 5, 5, -3, 5, 4, -3, -1, -1, -1, 1, 2, -1, 2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]]
	        ],
	        "黒縄鬼砲": [
	            [120, 0, "なし", "普通", "中", 0, 0, [3, 3, -5, 3, -3, -3, 3, 3, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0]],
	            [130, 0, "なし", "普通", "中", 0, 0, [3, 3, -5, 3, -3, -3, 3, 4, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0]],
	            [140, 0, "なし", "普通", "中", 0, 0, [3, 4, -5, 3, -3, -3, 4, 4, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0]],
	            [150, 0, "なし", "普通", "中", 0, 0, [3, 4, -5, 4, -3, -3, 4, 5, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0]],
	            [190, 0, "なし", "普通", "中", 0, 0, [4, 4, -5, 4, -3, -3, 4, 5, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0]],
	            [190, 0, "なし", "普通", "中", 0, 0, [5, 4, -5, 4, -3, -3, 4, 5, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0]],
	            [200, 0, "なし", "普通", "中", 0, 0, [5, 4, -5, 5, -3, -3, 4, 5, -4, -1, -1, -1, 1, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0]],
	            [200, 0, "なし", "普通", "中", 0, 0, [5, 5, -5, 5, -3, -3, 4, 5, -4, -1, -1, -1, 2, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0]],
	            [210, 0, "なし", "普通", "中", 0, 0, [6, 6, -5, 5, -3, -3, 4, 5, -4, -1, -1, -1, 2, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0]],
	            [210, 0, "なし", "普通", "中", 0, 0, [7, 6, -5, 6, -3, -3, 5, 5, -4, -1, -1, -1, 2, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 4, 0]]
	        ],
	        "ラファガスナイパー": [
	            [170, 20, "なし", "やや速い", "やや小", 0, 0, [4, 4, -6, 4, 4, -4, -3, -3, -2, 1, -1, -1, -2, -1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [170, 30, "なし", "やや速い", "やや小", 0, 0, [5, 4, -6, 5, 4, -4, -3, -3, -2, 1, -1, -1, -2, -1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [180, 20, "なし", "やや速い", "やや小", 0, 0, [5, 5, -6, 5, 5, -4, -3, -3, -2, 1, -1, -1, -2, -1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [180, 30, "なし", "やや速い", "やや小", 0, 0, [5, 5, -6, 5, 5, -4, -3, -3, -2, 1, -1, -1, -2, -1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [190, 20, "なし", "やや速い", "やや小", 0, 0, [6, 5, -6, 5, 5, -4, -3, -3, -2, 1, -1, -1, -2, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [190, 30, "なし", "やや速い", "やや小", 0, 0, [6, 5, -6, 6, 5, -4, -3, -3, -2, 1, -1, -1, -2, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [200, 20, "なし", "やや速い", "やや小", 0, 0, [6, 6, -6, 6, 5, -4, -3, -3, -2, 1, -1, -1, -2, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [200, 30, "なし", "やや速い", "やや小", 0, 0, [6, 6, -6, 6, 6, -4, -3, -3, -2, 2, -1, -1, -2, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [210, 20, "なし", "やや速い", "やや小", 0, 0, [7, 7, -6, 6, 6, -4, -3, -3, -2, 2, -1, -1, -2, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	            [210, 30, "なし", "やや速い", "やや小", 0, 0, [8, 7, -6, 7, 6, -4, -3, -3, -2, 2, -1, -1, -2, -1, -1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
	        ],
	        "グロボ＝ショット": [
	            [180, -20, "なし", "やや速い", "やや小", 0, 0, [5, 5, -5, -4, 3, -3, -3, -3, -3, 1, -1, -1, -2, -1, -1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 1]],
	            [180, -10, "なし", "やや速い", "やや小", 0, 0, [6, 5, -5, -4, 3, -3, -3, -3, -3, 1, -1, -1, -2, -1, -1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 1]],
	            [190, -20, "なし", "やや速い", "やや小", 0, 0, [6, 5, -6, -4, 3, -3, -3, -3, -3, 1, -1, -1, -2, -1, -1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 1]],
	            [190, -10, "なし", "やや速い", "やや小", 0, 0, [6, 5, -6, -4, 3, -3, -3, -3, -3, 1, -1, -1, -2, -1, -1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 1]],
	            [200, -20, "なし", "やや速い", "やや小", 0, 0, [6, 5, -7, -4, 3, -3, -3, -3, -3, 1, -1, -1, -2, -1, -1, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 1]],
	            [200, -10, "なし", "やや速い", "やや小", 0, 0, [7, 6, -8, -4, 3, -3, -3, -3, -4, 1, -1, -1, -2, -1, -1, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 1]],
	            [210, -20, "なし", "やや速い", "やや小", 0, 0, [7, 6, -8, -4, 3, -3, -3, -3, -4, 1, -1, -1, -2, -1, -1, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 1]],
	            [210, -10, "なし", "やや速い", "やや小", 0, 0, [8, 6, -9, -4, 3, -4, -3, -3, -4, 1, -1, -1, -2, -1, -1, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 1]],
	            [220, -20, "なし", "やや速い", "やや小", 0, 0, [8, 7, -9, -4, 3, -4, -3, -3, -5, 1, -1, -1, -2, -1, -1, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 2]],
	            [220, -10, "なし", "やや速い", "やや小", 0, 0, [9, 8, -9, -4, 3, -5, -3, -3, -5, 1, -1, -2, -2, -1, -1, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 2]]
	        ],
	        "カホウ【禍】": [
	            [160, 0, "なし", "やや遅い", "中", 0, 0, [5, 5, 5, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [170, 0, "なし", "やや遅い", "中", 0, 0, [6, 5, 5, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [180, 0, "なし", "やや遅い", "中", 0, 0, [7, 5, 6, 3, 3, 3, 4, 3, 3, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [190, 0, "なし", "やや遅い", "中", 0, 0, [7, 6, 6, 3, 3, 3, 4, 4, 3, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [200, 0, "なし", "やや遅い", "中", 0, 0, [7, 6, 7, 3, 3, 3, 4, 4, 3, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [200, 0, "なし", "やや遅い", "中", 0, 0, [7, 6, 7, 4, 3, 3, 4, 4, 3, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [210, 0, "なし", "やや遅い", "中", 0, 0, [7, 7, 7, 4, 3, 3, 4, 4, 3, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [210, 0, "なし", "やや遅い", "中", 0, 0, [8, 7, 7, 4, 3, 3, 4, 4, 4, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [210, 0, "なし", "やや遅い", "中", 0, 0, [8, 7, 8, 4, 4, 3, 4, 4, 4, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [210, 0, "なし", "やや遅い", "中", 0, 0, [8, 7, 9, 4, 4, 3, 5, 4, 4, 2, 2, 1, 2, 1, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0]]
	        ],
	        "金狼砲ライド": [
	            [160, 10, "なし", "普通", "中", 0, 0, [5, 5, -8, 3, 3, -3, 3, 3, -4, -2, -1, -1, -2, -1, -1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0]],
	            [170, 10, "なし", "普通", "中", 0, 0, [6, 5, -8, 3, 3, -3, 3, 3, -4, -2, -1, -1, -2, -1, -1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0]],
	            [180, 10, "なし", "普通", "中", 0, 0, [6, 6, -8, 3, 3, -3, 3, 4, -4, -2, -1, -1, -2, -1, -1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0]],
	            [190, 10, "なし", "普通", "中", 0, 0, [6, 6, -8, 3, 3, -3, 3, 4, -4, -2, -1, -1, -2, -1, -1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0]],
	            [200, 10, "なし", "普通", "中", 0, 0, [7, 6, -8, 3, 3, -3, 3, 4, -4, -2, -1, -1, -2, -1, -1, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0]],
	            [200, 20, "なし", "普通", "中", 0, 0, [7, 6, -8, 3, 3, -3, 3, 4, -4, -2, -1, -1, -2, -1, -1, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0]],
	            [210, 10, "なし", "普通", "中", 0, 0, [7, 7, -8, 4, 3, -3, 4, 4, -4, -2, -1, -1, -2, -1, -1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0]],
	            [210, 20, "なし", "普通", "中", 0, 0, [7, 7, -8, 4, 3, -3, 4, 4, -4, -2, -1, -1, -2, -1, -1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0]],
	            [220, 10, "なし", "普通", "中", 0, 0, [8, 7, -8, 4, 3, -3, 5, 4, -4, -2, -1, -1, -2, -1, -1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 4, 0, 0]],
	            [220, 20, "なし", "普通", "中", 0, 0, [9, 8, -8, 4, 3, -3, 5, 4, -4, -2, -1, -1, -2, -1, -1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 4, 0, 0]]
	        ],
	        "ルドラハウル": [
	            [180, -20, "右/大", "やや遅い", "大", 0, 0, [4, 4, 4, -5, -4, 3, -4, -4, 3, 1, 1, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1]],
	            [180, -10, "右/大", "やや遅い", "大", 0, 0, [4, 4, 5, -5, -4, 4, -4, -4, 4, 1, 1, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1]],
	            [190, -20, "右/大", "やや遅い", "大", 0, 0, [5, 4, 6, -5, -4, 4, -4, -4, 4, 1, 1, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1]],
	            [190, -10, "右/大", "やや遅い", "大", 0, 0, [5, 4, 6, -5, -4, 4, -4, -4, 4, 1, 1, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1]],
	            [200, -20, "右/大", "やや遅い", "大", 0, 0, [6, 4, 6, -5, -4, 4, -4, -4, 4, 1, 1, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1]],
	            [200, -10, "右/大", "やや遅い", "大", 0, 0, [6, 4, 7, -5, -4, 4, -4, -4, 4, 1, 1, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1]],
	            [210, -20, "右/大", "やや遅い", "大", 0, 0, [6, 5, 7, -5, -4, 4, -4, -4, 4, 2, 1, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1]],
	            [210, -10, "右/大", "やや遅い", "大", 0, 0, [6, 5, 7, -5, -4, 4, -4, -4, 4, 2, 2, 1, 2, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1]],
	            [220, -20, "右/大", "やや遅い", "大", 0, 0, [7, 5, 8, -5, -4, 5, -4, -4, 4, 2, 2, 1, 2, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2]],
	            [220, -10, "右/大", "やや遅い", "大", 0, 0, [8, 6, 8, -5, -4, 5, -4, -4, 4, 2, 2, 2, 2, 2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2]]
	        ],
	        "爆焔のイグナー": [
	            [180, 0, "なし", "やや遅い", "中", 0, 0, [5, 4, 5, 3, 3, 4, 3, 3, 3, 1, 1, 1, 1, -1, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [190, 0, "なし", "やや遅い", "中", 0, 0, [6, 5, 6, 3, 4, 4, 3, 3, 3, 1, 1, 1, 1, -1, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [200, 0, "なし", "やや遅い", "中", 0, 0, [6, 5, 6, 4, 4, 4, 4, 4, 3, 1, 1, 1, 1, -1, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [200, 0, "なし", "やや遅い", "中", 0, 0, [6, 5, 6, 4, 4, 5, 5, 4, 4, 1, 1, 1, 1, -1, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [210, 0, "なし", "やや遅い", "中", 0, 0, [6, 5, 7, 4, 4, 5, 5, 4, 4, 1, 1, 1, 1, -1, -1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [210, 0, "なし", "やや遅い", "中", 0, 0, [7, 5, 7, 4, 4, 5, 5, 4, 4, 1, 1, 1, 1, -1, -1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [220, 0, "なし", "やや遅い", "中", 0, 0, [7, 5, 7, 5, 4, 5, 5, 4, 4, 1, 1, 1, 1, -1, -1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [220, 0, "なし", "やや遅い", "中", 0, 0, [8, 6, 7, 5, 5, 5, 5, 5, 4, 1, 1, 1, 1, -1, -1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [230, 0, "なし", "やや遅い", "中", 0, 0, [8, 7, 8, 5, 5, 5, 5, 5, 4, 1, 1, 1, 1, -1, -1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [230, 0, "なし", "やや遅い", "中", 0, 0, [9, 7, 9, 6, 6, 6, 5, 5, 4, 1, 1, 1, 1, -1, -1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0]]
	        ],
	        "海賊Ｊキャノン": [
	            [190, 0, "左右/小", "やや遅い", "中", 1, 0, [5, 5, 7, -3, -3, -3, -3, -3, 3, 1, 1, 1, 1, 1, 1, 2, 2, 0, 0, 2, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0]],
	            [200, 0, "左右/小", "やや遅い", "中", 1, 0, [6, 5, 8, -3, -3, -3, -3, -3, 4, 2, 1, 1, 2, 1, 1, 2, 2, 0, 0, 2, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0]],
	            [210, 0, "左右/小", "やや遅い", "中", 1, 0, [6, 6, 9, -3, -3, -3, -3, -3, 4, 2, 2, 1, 2, 2, 1, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 5, 0, 0, 0, 0]]
	        ]
	    }
	};


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map