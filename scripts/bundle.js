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
	var SkillBoxList_1 = __webpack_require__(5);
	var MHCalc = (function (_super) {
	    __extends(MHCalc, _super);
	    function MHCalc() {
	        _super.apply(this, arguments);
	    }
	    MHCalc.prototype.render = function () {
	        return (React.createElement("div", {className: "MHCalc"}, React.createElement(SkillBoxList_1.SkillBoxList, null)));
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
	var SkillButton_1 = __webpack_require__(6);
	var SkillBox = (function (_super) {
	    __extends(SkillBox, _super);
	    function SkillBox() {
	        _super.apply(this, arguments);
	    }
	    SkillBox.prototype.render = function () {
	        var _this = this;
	        return React.createElement("div", {className: "SkillBox"}, React.createElement("span", null, this.props.name), React.createElement("ul", {className: "SkillBox-ul"}, this.props.skillButtonList.map(function (skillButton) {
	            return React.createElement(SkillButton_1.SkillButton, {key: skillButton.label, name: skillButton.label, isChecked: _this.props.value == _this.props.name + " " + skillButton.label, action: _this.props.action.bind(null, _this.props.name + " " + skillButton.label)});
	        })));
	    };
	    return SkillBox;
	}(React.Component));
	exports.SkillBox = SkillBox;


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
	var SkillBox_1 = __webpack_require__(4);
	var skilldata_1 = __webpack_require__(7);
	var SkillBoxList = (function (_super) {
	    __extends(SkillBoxList, _super);
	    function SkillBoxList() {
	        _super.call(this);
	        this.state = {
	            activeSkill: {}
	        };
	    }
	    SkillBoxList.prototype.setValue = function (skillBoxName, value) {
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
	    SkillBoxList.prototype.render = function () {
	        var _this = this;
	        console.log(this.state.activeSkill);
	        return (React.createElement("ul", {className: 'SkillBoxList'}, " ", skilldata_1.default.map(function (data) {
	            return React.createElement("li", {className: 'SkillBoxList-li'}, React.createElement(SkillBox_1.SkillBox, {key: data.name, name: data.name, value: _this.state.activeSkill[data.group] || null, action: _this.setValue.bind(_this, data.group), skillButtonList: data.item}));
	        }), " "));
	    };
	    return SkillBoxList;
	}(React.Component));
	exports.SkillBoxList = SkillBoxList;


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
	function addPowor(value) {
	    return function (data) {
	        data['addPowor'].push(value);
	    };
	}
	var skillData = [
	    {
	        name: 'ロング/パワーバレル',
	        item: [
	            { label: 'on', value: 1.05 }
	        ]
	    }, {
	        name: '【狩技】火薬装填',
	        item: [
	            { label: 'on', value: 1.05 }
	        ]
	    }, {
	        name: 'パワーリロード',
	        item: [
	            { label: 'on', value: 1.05 }
	        ]
	    }, {
	        name: '攻撃力UP',
	        group: '攻撃力UP',
	        item: [
	            { label: '【小】', value: 10 },
	            { label: '【中】', value: 15 },
	            { label: '【大】', value: 20 }
	        ]
	    }, {
	        name: '見切り',
	        group: '見切り',
	        item: [
	            { label: '+1', value: 10 },
	            { label: '+2', value: 15 },
	            { label: '+3', value: 20 }
	        ]
	    }, {
	        name: '攻撃力DOWN',
	        group: '攻撃力UP',
	        item: [
	            { label: '【小】', value: -5 },
	            { label: '【中】', value: -10 },
	            { label: '【大】', value: -15 }
	        ]
	    }, {
	        name: '見切り',
	        group: '見切り',
	        item: [
	            { label: '-1', value: -5 },
	            { label: '-2', value: -10 },
	            { label: '-3', value: -15 }
	        ]
	    }
	];
	skillData.forEach(function (value) {
	    value.group = value.group || value.name;
	});
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = skillData;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map