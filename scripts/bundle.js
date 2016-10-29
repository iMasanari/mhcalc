function getWeaponList(t){return Object.keys(weaponData[t].list)}function getWeaponLevelList(t,e){return weaponData[t].list[e].list}function getWeapon(t,e,a){return weaponData[t].list[e].list[a-1]}function getWeaponLastName(t,e){return weaponData[t].list[e].lastName}function calc(t,e){var a={power:0,mult:1,affinity:0};return e.forEach(function(t){t.effect(a,t.value)}),getAttackPower(t,a)}function getRanking(t,e){var a=skillNameList.filter(function(t){return e[t.group]===t.name}),l=calc(t,a);return skillNameList.map(function(a,s){var i=e[a.group]===a.name,n={name:a.name,isActive:i,disappearance:e[a.group]&&!i?e[a.group]:null,plus:null,mult:null,index:s},m=skillNameList.filter(function(t){return e[t.group]===t.name&&t.group!==a.group});if(e[a.group]!==a.name){m.push(a);var c=calc(t,m);n.plus=c-l|0,n.mult=c/l}else{var c=calc(t,m);n.plus=l-c|0,n.mult=l/c}return n}).sort(function(t,e){return e.plus-t.plus||e.mult-t.mult||t.index-e.index})}function getAttackPower(t,e){var a=t.power,l=Math.min(Math.max(t.affinity+e.affinity,-100),100),s=.25;return e.parts&&(a+=Math.floor(a*(e.parts-1))),e.superAffinity&&(s=e.superAffinity-1),(a+e.power)*e.mult*(1+l/100*s)}for(var __extends=this&&this.__extends||function(t,e){function a(){this.constructor=t}for(var l in e)e.hasOwnProperty(l)&&(t[l]=e[l]);t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)},SkillButton=function(t){function e(){t.apply(this,arguments)}return __extends(e,t),e.prototype.render=function(){return React.createElement("li",{className:"SkillButton"+(this.props.isChecked?" checked":""),onClick:this.props.action},this.props.name)},e}(React.Component),attackUp=function(t,e){return t.power+=e,t},attackMult=function(t,e){return t.mult*=e,t},affinityUp=function(t,e){return t.affinity+=e,t},multValue=function(t,e){for(var a in e)t[a]?t[a]*=e[a]:t[a]=e[a];return t},attackAndAffinityUp=function(t,e){return attackUp(t,e[0]),affinityUp(t,e[1]),t},_skillList=[{name:"ロング/パワーバレル",effect:multValue,item:[{value:{parts:1.05}}]},{name:"【狩技】火薬装填",effect:attackMult,item:[{value:1.05}]},{name:"パワーリロード",effect:attackMult,item:[{value:1.05}]},{name:"攻撃力UP",group:"攻撃力UP",effect:attackUp,item:[{label:"【小】",value:10},{label:"【中】",value:15},{label:"【大】",value:20}]},{name:"見切り",group:"見切り",effect:affinityUp,item:[{label:"+1",value:10},{label:"+2",value:20},{label:"+3",value:30}]},{name:"弱点特効",effect:affinityUp,item:[{value:50}]},{name:"力の解放",group:"腕が光るスキル",effect:affinityUp,item:[{label:"+1",value:30},{label:"+2",value:50}]},{name:"挑戦者",group:"腕が光るスキル",effect:attackAndAffinityUp,item:[{label:"+1",value:[10,10]},{label:"+2",value:[25,15]}]},{name:"フルチャージ",group:"腕が光るスキル",effect:attackUp,item:[{value:20}]},{name:"火事場",group:"火事場",effect:attackMult,item:[{label:"+2",value:1.3}]},{name:"不屈",effect:attackMult,item:[{label:"1乙",value:1.1},{label:"2乙",value:1.2}]},{name:"逆恨み",effect:attackUp,item:[{value:20}]},{name:"死中に活",effect:attackUp,item:[{value:20}]},{name:"北風/南風の狩人",effect:attackUp,item:[{value:15}]},{name:"研磨術",effect:attackMult,item:[{label:"（仮）",value:1.75/1.5}]},{name:"弾強化（通常 貫通 重撃）",group:"弾強化",effect:attackMult,item:[{value:1.1}]},{name:"弾強化（散弾）",group:"弾強化",effect:attackMult,item:[{value:1.2}]},{name:"変則射撃",effect:attackMult,item:[{value:1.2}]},{name:"連撃の心得",effect:affinityUp,item:[{label:"2hit~",value:25},{label:"6hit",value:30}]},{name:"超会心",effect:multValue,item:[{value:{superAffinity:1.4}}]},{name:"ネコの射撃術",effect:attackMult,item:[{value:1.1}]},{name:"ネコの暴れ撃ち",effect:attackMult,item:[{value:1.05}]},{name:"ネコの火事場術",group:"火事場",effect:attackMult,item:[{value:1.35}]},{name:"ネコの短期催眠術",effect:attackUp,item:[{value:3}]},{name:"ネコの休憩術",group:"怪力の種",effect:attackUp,item:[{value:15}]},{name:"食事",effect:attackUp,item:[{label:"【小】",value:3},{label:"【中】",value:5},{label:"【大】",value:7}]},{name:"力の護符",effect:attackUp,item:[{label:"所持",value:6}]},{name:"力の爪",effect:attackUp,item:[{label:"所持",value:9}]},{name:"鬼人薬",effect:attackUp,item:[{name:"鬼人薬",label:"薬",value:3},{label:"G",value:7}]},{name:"怪力の種",group:"怪力の種",effect:attackUp,item:[{name:"怪力の種（広域+1）",label:"広域1",value:5},{name:"怪力の種/鬼人笛/ドキドキノコ",label:"種など",value:10},{name:"怪力の丸薬",label:"丸薬",value:25}]},{name:"クーラードリンク（北風）",effect:attackUp,item:[{value:5}]},{name:"狂竜症",effect:affinityUp,item:[{label:"克服",value:15},{name:"狂竜症克服（無我の境地）",label:"無我",value:30}]},{name:"【狩猟笛】攻撃力",effect:attackMult,item:[{label:"小",value:1.1},{label:"大/小2",value:1.15},{label:"大2",value:1.2}]},{name:"【狩猟笛】会心率",effect:affinityUp,item:[{label:"UP",value:10},{label:"UP2",value:15}]},{name:"【操虫棍】広域エキス",group:"【操虫棍】広域エキス 赤",effect:attackUp,item:[{label:"赤",value:5}]},{name:"【操虫棍】広域エキス",group:"【操虫棍】広域エキス 白",effect:affinityUp,item:[{label:"白",value:10}]},{name:"鬼人弾（crt補正なし）",group:"怪力の種",effect:attackAndAffinityUp,item:[{name:"鬼人弾/鬼人硬化弾",label:"鬼人",value:[10,0]},{name:"鬼人会心弾",label:"会心",value:[15,10]}]},{name:"攻撃力DOWN",group:"攻撃力UP",effect:attackUp,item:[{label:"【小】",value:-5},{label:"【中】",value:-10},{label:"【大】",value:-15}]},{name:"見切り",group:"見切り",effect:affinityUp,item:[{label:"-1",value:-5},{label:"-2",value:-10},{label:"-3",value:-15}]},{name:"心配性",group:"火事場",effect:attackMult,item:[{value:.7}]}],skillNameList=[],_i=0,_skillList_1=_skillList;_i<_skillList_1.length;_i++){var skill=_skillList_1[_i];skill.group=skill.group||skill.name;for(var _a=0,_b=skill.item;_a<_b.length;_a++){var item=_b[_a];item.name=item.name||skill.name+(item.label||""),item.label=item.label||"on",skillNameList.push({name:item.name,group:skill.group,value:item.value,effect:skill.effect})}}var skillList=_skillList,SkillBox=function(t){function e(){t.apply(this,arguments)}return __extends(e,t),e.prototype.render=function(){var t=this;return React.createElement("div",{className:"SkillBox"},React.createElement("span",null,this.props.name),React.createElement("ul",{className:"SkillBox-ul"},this.props.skillButtonList.map(function(e){return React.createElement(SkillButton,{key:e.label,name:e.label,isChecked:t.props.value==e.name,action:t.props.action.bind(null,e.name)})})))},e}(React.Component),SkillBoxList=function(t){function e(){t.apply(this,arguments)}return __extends(e,t),e.prototype.render=function(){var t=this;return React.createElement("ul",{className:"SkillBoxList"},skillList.map(function(e){return React.createElement("li",{className:"SkillBoxList-li"},React.createElement(SkillBox,{key:e.name,name:e.name,value:t.props.activeSkill[e.group]||null,action:t.props.setActiveSkill.bind(null,e.group),skillButtonList:e.item}))}))},e}(React.Component),weaponList;!function(t){t.lightbowgun={"ベルダーバレット":{lastName:"サージュバレット",list:[[80,0],[90,0],[100,0],[110,0],[130,0],[150,0],[190,0],[210,0]]},"クックアンガ―":{lastName:"クックカウンター",list:[[120,0],[130,0],[140,0],[170,0],[190,0],[200,0]]},"ド【烏】":{lastName:"ド【狼】",list:[[150,5],[160,5],[170,5],[190,5],[210,5]]},"ド【兇】":{lastName:"黒狼隊のショウド",list:[[190,30],[200,30],[210,30]]},"テイルストリング":{lastName:"テイルカタパルト",list:[[130,0],[160,0],[170,0],[190,0],[200,0]]},"ロンナークプシカ":{lastName:"ロンベルチャカリオ",list:[[170,0],[190,0],[200,0],[210,0]]},"テイルブリザード":{lastName:"テイルアヴァランチ",list:[[170,10],[180,10],[190,10]]},"ヴァルキリーファイア":{lastName:"ヴァルキリーブレイズ",list:[[120,0],[130,0],[140,0],[150,0],[170,0],[200,0],[210,0],[220,0]]},"繚乱の対弩":{lastName:"金華朧銀の対弩",list:[[210,0],[220,0],[230,0]]},"ディオスブラスト":{lastName:"爆弩コバルトブラスト",list:[[150,0],[170,0],[200,0],[210,0]]},"爆砕の光弩":{lastName:"破岩弩バリスタイト",list:[[210,0],[220,0],[230,0]]},"オブシドバレット":{lastName:"歴耀弩デボニア",list:[[150,0],[170,0],[200,0],[220,0]]},"幻獣筒【三ツ角】":{lastName:"幻獣筒【三界三禍】",list:[[140,0],[160,0],[180,0],[200,0]]},"飛雷弩":{lastName:"撃雷弩【麒麟】",list:[[190,0],[200,0],[210,0]]},"ハンターライフル":{lastName:"スナイプシューター",list:[[70,0],[80,0],[110,0],[120,0],[140,0],[170,0],[200,0],[200,0]]},"フルットシリンジ":{lastName:"フルーミィシリンジ",list:[[120,0],[140,0],[160,0],[200,0],[210,0]]},"クゥイルバースト":{lastName:"キングルバースト",list:[[100,0],[110,0],[150,0],[170,0],[200,0],[210,0]]},"ショットボウガン・白":{lastName:"バレットシャワー・白",list:[[90,10],[110,10],[120,10],[150,10],[160,10],[200,10]]},"ショットボウガン・蛇":{lastName:"バレットシャワー・蛇",list:[[130,0],[150,0],[180,0],[200,0]]},"ショットボウガン・蒼":{lastName:"バレットシャワー・蒼",list:[[160,20],[180,20],[190,20],[200,20]]},"ショットボウガン・碧":{lastName:"バレットシャワー・碧",list:[[170,0],[200,0],[210,0]]},"ショットボウガン・紅":{lastName:"バレットシャワー・紅",list:[[190,0],[200,0],[210,0]]},"ウロコトルネード":{lastName:"溶岩弩ウログルト",list:[[130,0],[150,0],[180,0],[200,0]]},"王弩ライカン":{lastName:"王牙弩【野雷】",list:[[150,10],[170,10],[190,10],[200,10],[220,10]]},"ラサーサアルシアラ":{lastName:"叛弩アルシアラ",list:[[150,10],[160,10],[210,10],[220,10]]},"叛逆の旋弩":{lastName:"叛逆弩ヴァルレギオン",list:[[220,20],[230,20],[240,20]]},"ハーイゲヴァー":{lastName:"口裂けハーイゲヴァー",list:[[190,0],[200,0],[210,0]]},"ベルクーツ":{lastName:"ド級弩アルデバラン",list:[[200,0],[210,0],[220,0]]},"クロスボウガン":{lastName:"クロスブリッツ",list:[[80,0],[90,0],[100,0],[110,0],[130,0],[150,0],[200,0],[220,0]]},"ストライプシェル":{lastName:"蟹甲弩ラーバルザザミ",list:[[100,0],[110,0],[140,0],[170,0],[200,0]]},"エビィーガン":{lastName:"キングエビィーガン",list:[[160,0],[200,0],[210,0]]},"メイルシュトローム":{lastName:"ネビュラシュトローム",list:[[210,0],[210,0],[220,0]]},"ロアルスリング":{lastName:"ロアルストリーム",list:[[120,0],[140,0],[150,0],[190,0],[200,0]]},"ヒドゥンゲイズ":{lastName:"夜行弩【梟ノ眼】",list:[[120,40],[130,40],[140,40],[150,40],[190,40]]},"ヤクトバレット":{lastName:"咬弾チェイサー",list:[[140,10],[150,10],[190,10],[210,10]]},"レックスタンク":{lastName:"轟弩【戦虎】",list:[[170,-20],[180,-20],[200,-20],[220,-10]]},"シェルバレット":{lastName:"インセクヴァールカン",list:[[170,0],[190,0],[200,0]]},"機銃ストラフィング":{lastName:"機銃砲バタルビトリア",list:[[200,0],[210,0],[220,0]]},"火竜砲":{lastName:"鳳仙火竜砲",list:[[140,0],[150,0],[170,0],[190,0],[200,0],[210,0]]},"雷砲サンダークルス":{lastName:"雷迅砲サンダークルス",list:[[180,10],[190,10],[200,20]]},"デザートストーム":{lastName:"デザートテンペスト",list:[[170,0],[190,0],[210,0]]},"ラヴァシュトローム":{lastName:"ラヴァストーム",list:[[190,0],[200,0],[210,0]]},"ユクモノ弩":{lastName:"ユクモノバレット",list:[[110,0],[120,0],[140,0],[180,0],[200,0]]},"真ユクモノ弩":{lastName:"ユクモ霊弩【弾雨】",list:[[180,0],[200,0],[210,0]]},"アイルーラグドール":{lastName:"アイルーヘルドール",list:[[120,0],[130,0],[140,0],[170,0],[190,0]]},"メラルーラグドール":{lastName:"メラルーヘルドール",list:[[120,30],[130,30],[150,30],[180,30],[190,30]]},"吹吹茶釜":{lastName:"吹吹チャガンマン",list:[[160,0],[190,0],[210,0]]},"クロオビボウガン":{lastName:"シハンボウガン",list:[[130,0],[150,0],[190,0],[210,0]]},"フィオシダーレ":{lastName:"ノブレスオーダー",list:[[140,10],[150,10],[180,15],[200,15]]},"ビートスナイパー":{lastName:"ペネトレートビート",list:[[140,0],[160,0],[190,0],[200,0]]},"春夜鯉砲":{lastName:"春夜鯉砲【滝登り】",list:[[130,0],[150,0],[180,0],[200,0]]},"気艦銃":{lastName:"気艦銃バルヘリス",list:[[140,0],[150,0],[180,0],[200,0]]},"ビューベル":{lastName:"高原のフリューベル",list:[[100,10],[120,10],[150,10],[160,10]]},"エルドラマスケット":{lastName:"亡国の宝銃バイジン",list:[[130,10],[150,15],[190,20],[210,30]]},"狐水銃シズクトキユル":{lastName:"あまとぶや軽弩の水珠",list:[[150,0],[170,0],[200,0],[210,0]]},"電竜弩":{lastName:"サージ電竜砲",list:[[150,0],[170,0],[200,0],[210,0]]},"巨獣弩":{lastName:"巨弾・弩ッ弩ッ弩ッ",list:[[160,0],[180,0],[220,0],[240,0]]},"灼炎のエンサー":{lastName:"斬竜弩イクリール",list:[[150,0],[170,0],[210,0],[220,0]]},"レイofヴァイス":{lastName:"レイofインサニティ",list:[[140,20],[150,20],[180,20],[200,20]]},"THEオラクル":{lastName:"THEバニッシャー",list:[[190,35],[200,35],[210,35]]},"ウラナイランプ":{lastName:"マジナイランプ",list:[[140,30],[180,30],[200,30],[210,30]]},"巨蟹といふ名の白骸":{lastName:"白骸の怪弩",list:[[160,0],[170,0],[210,0],[220,0]]},"極星弩グラーグ":{lastName:"驚嘆ナル弩星グラーグ",list:[[200,10],[210,10],[220,10]]},"ブラックパラソル":{lastName:"クロノパラソル",list:[[150,0],[170,0],[190,0],[200,0]]},"パールフリルパラソル":{lastName:"パールセレブパラソル",list:[[190,0],[200,0],[210,0]]},"ラージャンデグ":{lastName:"金獅子筒【万雷】",list:[[210,-15],[220,-15],[220,-15]]},"鬼神筒":{lastName:"鬼神筒【雷天】",list:[[220,-25],[230,-25],[240,-25]]},"イビルマシーン":{lastName:"マッドネスグリーフ",list:[[190,-10],[200,-10],[210,-10]]},"瓢弾":{lastName:"瓢弾【千成】",list:[[180,0],[190,0],[200,0],[210,0]]},"業弩ダークデメント":{lastName:"滅弩ダークデメント",list:[[220,-15],[230,-15],[240,-15]]},"鋼氷蜂弩":{lastName:"ホーネス＝ダオラ",list:[[210,10],[220,10],[230,10]]},"シルバースパルタカス":{lastName:"朧銀の連弩",list:[[210,-10],[220,-10],[230,-10]]},"ゴールドヴァルキリー":{lastName:"金華の連弩",list:[[200,0],[210,0],[220,0]]},"崩弩エイヌカムルバス":{lastName:"崩天弩エイヌオンカム",list:[[240,-30],[250,-30],[260,-30]]},"凶針【水禍】":{lastName:"天嵐ノ針【水天一色】",list:[[200,-10],[210,-10],[220,-10]]},"鬼ヶ島":{lastName:"大鬼ヶ島",list:[[130,0],[150,0],[160,0],[190,0],[200,0]]},"神ヶ島":{lastName:"大神ヶ島【出雲】",list:[[200,0],[210,0],[220,0]]},"レギーナファイア":{lastName:"レギーナフレイムロゼ",list:[[120,0],[130,0],[140,0],[170,0],[180,0],[190,0],[200,0],[210,0],[220,0],[220,0]]},"ラファガゲイズ":{lastName:"黎明弩【鷹ノ眼】",list:[[160,30],[160,40],[170,30],[170,40],[180,30],[180,40],[190,30],[190,40],[200,30],[200,40]]},"ド【禍】":{lastName:"隻眼隊のショウド",list:[[170,20],[170,30],[180,20],[180,30],[190,20],[190,30],[200,20],[200,30],[210,20],[210,30]]},"黒炎竜砲":{lastName:"慟黒炎竜砲",list:[[180,0],[180,0],[190,0],[190,0],[200,0],[200,0],[210,0],[210,0],[220,0],[220,0]]},"金狼弩ライカン":{lastName:"金狼牙弩【野雷】",list:[[180,10],[190,5],[190,10],[200,5],[210,5],[210,10],[220,5],[220,10],[230,5],[230,10]]},"ルドラゾフル":{lastName:"鉤爪弩【荒虎掌】",list:[[190,-20],[190,-10],[200,-20],[200,-10],[210,-20],[210,-10],[220,-20],[220,-10],[230,-20],[230,-10]]},"爆焔のエンサー":{lastName:"燼滅弩イクリール",list:[[170,0],[180,0],[190,0],[200,0],[200,0],[210,0],[210,0],[220,0],[220,0],[230,0]]},"アームキャノン":{lastName:"アームキャノンX",list:[[190,0],[200,0],[210,0]]}}}(weaponList||(weaponList={}));var weaponList;!function(t){t.heavybowgun={"ベルダーキャノン":{lastName:"サージュキャノン",list:[[80,0],[90,0],[100,0],[110,0],[120,0],[160,0],[180,0],[200,0]]},"ガウプシカ":{lastName:"ヘビィガウプシカ",list:[[100,0],[110,0],[130,0],[160,0],[190,0]]},"キャロムボール":{lastName:"転弩エイトボール",list:[[130,0],[150,0],[180,0],[200,0]]},"アグナブロウ":{lastName:"炎戈銃ブレイズヘル",list:[[200,5],[210,5],[220,5]]},"サンドダイバー":{lastName:"デザートダイバー",list:[[90,0],[100,0],[120,0],[150,0],[180,0],[190,0]]},"ガノスプレッシャー":{lastName:"ガノバッシャーガン",list:[[180,5],[190,5],[210,5]]},"ラピッドキャスト":{lastName:"ハイサイクルキャスト",list:[[150,0],[180,0],[190,0]]},"バスタークラブ":{lastName:"ヘビィバスタークラブ",list:[[110,0],[130,0],[160,0],[190,0],[200,0]]},"スレイペンギーゴ":{lastName:"スレイペンギング",list:[[110,0],[120,0],[140,0],[180,0],[200,0]]},"ヒドゥンスナイパー":{lastName:"夜砲【黒鳳】",list:[[110,20],[120,20],[150,30],[180,30],[190,30]]},"ピアースクラブ":{lastName:"ウチヌキ",list:[[190,0],[200,0],[210,0]]},"オブシドキャノン":{lastName:"歴耀砲カボニフェル",list:[[140,10],[180,10],[190,10],[210,10]]},"チャージグリフサルト":{lastName:"徹甲砲アルセルタス",list:[[160,0],[200,0],[220,0]]},"妃竜砲【遠撃】":{lastName:"妃竜砲【飛撃】",list:[[180,0],[190,0],[210,0]]},"アルバレスト":{lastName:"S・アルバレスト",list:[[90,0],[100,0],[110,0],[120,0],[130,0],[140,0],[170,0],[190,0]]},"インジェクションガン":{lastName:"ゼクトインジェクト",list:[[100,0],[110,0],[130,0],[170,0],[190,0]]},"ラストニードル":{lastName:"ハニーコーマー",list:[[150,0],[170,0],[180,0]]},"メテオバズーカ":{lastName:"メテオフォール",list:[[100,0],[110,0],[120,0],[150,0],[190,0]]},"バイトブラスター":{lastName:"バイティングブラスト",list:[[130,0],[150,0],[180,0],[200,0]]},"サイドアルシャマリ":{lastName:"叛砲アルシャマリ",list:[[150,10],[160,10],[200,10],[210,10]]},"叛逆の怒砲":{lastName:"叛逆砲イーラレギオン",list:[[210,10],[220,10],[230,10]]},"討伐隊正式重砲":{lastName:"近衛隊正式重砲",list:[[150,0],[190,0],[210,0]]},"メテオバスター":{lastName:"メテオフォール",list:[[180,0],[190,0],[210,0]]},"イャンクック砲":{lastName:"イャンクック大砲",list:[[120,0],[140,0],[150,0],[180,0],[200,0]]},"カホウ【烏】":{lastName:"カホウ【狼】",list:[[140,0],[160,0],[200,0],[210,0]]},"バイナクルラ":{lastName:"眠砲公爵コシュマル",list:[[120,5],[130,5],[170,5],[190,5]]},"タンクメイジ":{lastName:"タンクソーサラー",list:[[110,0],[120,0],[140,0],[180,0],[200,0]]},"アイススロワー":{lastName:"エンバースロワー",list:[[120,0],[140,0],[180,0],[200,0]]},"クイックキャスト":{lastName:"クイックシャフト",list:[[170,0],[180,0],[190,0]]},"レックスハウル":{lastName:"轟砲【虎頭】",list:[[150,-10],[190,-10],[230,-10]]},"ボーンシューター":{lastName:"ボーンバスター",list:[[70,0],[80,0],[90,0],[100,0],[120,0],[150,0],[170,0],[180,0]]},"リノマリーノ":{lastName:"ディープリノマリーノ",list:[[80,0],[100,0],[140,0],[180,0],[200,0]]},"青熊筒":{lastName:"青熊筒【川漁】",list:[[160,0],[190,0],[200,0]]},"荒縄鼓砲":{lastName:"荒縄鼓砲【調緒】",list:[[160,0],[190,0],[200,0]]},"モンテベルデ":{lastName:"山穿ジガンラケーテ",list:[[210,0],[220,0],[230,0]]},"46式潜伏重砲":{lastName:"潜砲ハープール",list:[[110,0],[120,0],[140,0],[180,0],[200,0]]},"ラギアブリッツ":{lastName:"雷砲ラギアブリッツ",list:[[150,0],[160,0],[200,0],[210,0]]},"王砲ライド":{lastName:"王牙砲【山雷】",list:[[150,10],[190,10],[210,10]]},"ディオスキャノン":{lastName:"爆砲アトミキャノン",list:[[150,0],[200,0],[210,0]]},"爆砕の重砲":{lastName:"破岩大砲シュライアー",list:[[210,0],[220,0],[230,0]]},"ユクモノ重弩":{lastName:"ユクモノキャノン",list:[[100,0],[110,0],[130,0],[170,0],[190,0]]},"真ユクモノ重弩":{lastName:"ユクモ連山重弩",list:[[140,0],[150,0],[200,0],[210,0]]},"ムーファイア":{lastName:"霊砲ムーフレイム",list:[[110,0],[120,0],[130,0],[170,0],[190,0]]},"炎妃龍の石重弩":{lastName:"炎妃ガルグイユの叫喚",list:[[130,-30],[150,-30],[210,-30],[230,-30]]},"アイルー大砲":{lastName:"ネコ獣砲ニャノン",list:[[110,0],[130,0],[160,0],[190,0],[200,0]]},"狐重砲ハライニケリナ":{lastName:"あしひきの山砲の御車",list:[[150,0],[160,0],[200,0],[220,0]]},"電竜砲【進撃】":{lastName:"電竜砲【雷撃】",list:[[150,10],[160,10],[200,10],[220,10]]},"巨獣砲":{lastName:"巨撃・爆砲ォー遠",list:[[160,-10],[180,-10],[230,-10],[240,-10]]},"灼炎のイグナー":{lastName:"斬竜砲エクリプス",list:[[160,0],[170,0],[210,0],[230,0]]},"トリガーofハザード":{lastName:"トリガーofデマイズ",list:[[150,20],[190,20],[210,20]]},"THEディザスター":{lastName:"THEフェイス",list:[[200,30],[210,30],[220,30]]},"デルフ＝ダオラ":{lastName:"グラン＝ダオラ",list:[[150,10],[160,10],[210,10],[230,10]]},"天秤といふ名の白骸":{lastName:"白骸の罪砲",list:[[160,0],[200,0],[210,0],[220,0]]},"極星砲ヴィズィ":{lastName:"悲哀ナル砲星ヴィズィ",list:[[180,10],[190,10],[200,15]]},"海造砲【火刃】":{lastName:"海造砲【炎刃】",list:[[150,0],[190,0],[210,0]]},"ブラックキャノン":{lastName:"クロノキャノン",list:[[140,0],[150,0],[200,0],[210,0]]},"ズッカカロッツァ":{lastName:"サンドリヨン",list:[[150,0],[190,0],[200,0]]},"ブルームスター":{lastName:"ミーティア",list:[[180,0],[190,0],[200,0]]},"ナナホシ大砲":{lastName:"ナナホシ天砲",list:[[180,0],[190,0],[200,0]]},"暴食の重弩":{lastName:"アンフィニグラ",list:[[200,-10],[210,-10],[220,-10]]},"業重弩ファミン":{lastName:"滅重弩ガジンファミン",list:[[220,-15],[230,-15],[240,-15]]},"ヒーローブラスター":{lastName:"マスターブラスター",list:[[160,40],[180,40],[190,40]]},"カーマエレオーン":{lastName:"カーマヒトバーレ",list:[[210,0],[220,0],[230,0]]},"テオ＝アーティレリ":{lastName:"テオ＝フランマルス",list:[[210,5],[220,5],[230,5]]},"覇砲ユプカムトルム":{lastName:"覇轟砲クーネユプカム",list:[[210,40],[210,40],[220,40]]},"崩砲バセカムルバス":{lastName:"崩天砲パセカオンカム",list:[[240,-30],[250,-30],[260,-30]]},"凶刻【時雨】":{lastName:"天嵐ノ刻【刻露清秀】",list:[[210,-5],[220,-5],[230,-5]]},"カオスウイング":{lastName:"神滅弩アル・エリア",list:[[210,10],[220,10],[230,10]]},"紅熊轟筒":{lastName:"紅熊大轟筒【怪腕】",list:[[90,0],[100,0],[110,0],[130,0],[140,0],[170,0],[180,0],[190,0],[200,0],[210,0]]},"エオストペンギーゴ":{lastName:"エオストペングルス",list:[[90,0],[100,0],[110,0],[130,0],[140,0],[170,0],[180,0],[190,0],[200,0],[210,0]]},"ウィルガバスター":{lastName:"黒甲ウィルガバスター",list:[[90,0],[100,0],[110,0],[130,0],[140,0],[170,0],[180,0],[190,0],[200,0],[210,0]]},"紫毒姫竜砲":{lastName:"紫毒姫竜砲【華撃】",list:[[90,0],[100,0],[110,0],[130,0],[140,0],[160,0],[170,0],[180,0],[190,0],[200,0]]},"黒縄鬼砲":{lastName:"黒縄鬼砲【注連】",list:[[120,0],[130,0],[140,0],[150,0],[190,0],[190,0],[200,0],[200,0],[210,0],[210,0]]},"ラファガスナイパー":{lastName:"暁砲【瑞風】",list:[[170,20],[170,30],[180,20],[180,30],[190,20],[190,30],[200,20],[200,30],[210,20],[210,30]]},"グロボ＝ショット":{lastName:"グロボ＝バールゼタ",list:[[180,-20],[180,-10],[190,-20],[190,-10],[200,-20],[200,-10],[210,-20],[210,-10],[220,-20],[220,-10]]},"カホウ【禍】":{lastName:"隻眼公のカホウ",list:[[160,0],[170,0],[180,0],[190,0],[200,0],[200,0],[210,0],[210,0],[210,0],[210,0]]},"金狼砲ライド":{lastName:"金狼牙砲【山雷】",list:[[160,10],[170,10],[180,10],[190,10],[200,10],[200,20],[210,10],[210,20],[220,10],[220,20]]},"ルドラハウル":{lastName:"鉤爪砲【荒虎頭】",list:[[180,-20],[180,-10],[190,-20],[190,-10],[200,-20],[200,-10],[210,-20],[210,-10],[220,-20],[220,-10]]},"爆焔のイグナー":{lastName:"燼滅砲エクリクス",list:[[180,0],[190,0],[200,0],[200,0],[210,0],[210,0],[220,0],[220,0],[230,0],[230,0]]},"海賊Ｊキャノン":{lastName:"大海賊Jキャノン",list:[[190,0],[200,0],[210,0]]}}}(weaponList||(weaponList={}));var weaponData={lightbowgun:{typeMult:1.3,list:weaponList.lightbowgun},heavybowgun:{typeMult:1.48,list:weaponList.heavybowgun}},SkillRanking=function(t){function e(e){t.call(this,e),this.skillActionList={};for(var a=0,l=skillNameList;a<l.length;a++){var s=l[a];this.skillActionList[s.name]=e.setActiveSkill.bind(null,s.group,s.name)}}return __extends(e,t),e.prototype.render=function(){var t=this,e=getRanking(this.props.weapon,this.props.activeSkill);return null==this.props.weapon.power?null:React.createElement("div",{className:"SkillRanking"},React.createElement("table",null,React.createElement("tr",null,React.createElement("th",null,"スキル"),React.createElement("th",null,"上昇値"),React.createElement("th",null,"上昇率")),e.map(function(e){return React.createElement("tr",{key:e.name,onClick:t.skillActionList[e.name],className:e.isActive?"checked":""},React.createElement("td",null,React.createElement("span",{className:"skillName"},e.name),e.disappearance?React.createElement("span",{className:"disappearance"},"- "+e.disappearance):null),React.createElement("td",null,React.createElement("span",{className:"test"+(e.plus<0?" minus":""),style:{width:Math.abs(e.plus)+"px"}})," ",e.plus),React.createElement("td",null,e.mult.toFixed(3)))})))},e}(React.Component),Weapon=function(t){function e(e){t.call(this,e),this.state={isLastName:!0,name:"ベルダーバレット",level:8},this.toggleLastName=this.toggleLastName.bind(this);var a=this.props.weapon.type,l=getWeapon(a,this.state.name,this.state.level),s=l[0],i=l[1];this.props.setWeapon({type:a,power:s,affinity:i})}return __extends(e,t),e.prototype.toggleLastName=function(){this.setState({isLastName:!this.state.isLastName})},e.prototype.setType=function(){var t=this.refs.type.value,e=getWeaponList(t)[0],a=getWeaponLevelList(t,e).length,l=getWeapon(t,e,a),s=l[0],i=l[1];this.setState({name:e,level:a}),this.props.setWeapon({type:t,power:s,affinity:i})},e.prototype.setName=function(){var t=this.props.weapon.type,e=this.refs.name.value,a=getWeaponLevelList(t,e).length,l=getWeapon(t,e,a),s=l[0],i=l[1];this.setState({name:e,level:a}),this.props.setWeapon({type:t,power:s,affinity:i})},e.prototype.setLevel=function(){var t=this.props.weapon.type,e=this.state.name,a=+this.refs.level.value,l=getWeapon(t,e,a),s=l[0],i=l[1];this.setState({level:a}),this.props.setWeapon({type:t,power:s,affinity:i})},e.prototype.render=function(){var t=this,e=skillNameList.filter(function(e){return t.props.activeSkill[e.group]===e.name}),a=calc(this.props.weapon,e);return null==this.props.weapon.power?null:React.createElement("section",{className:"Weapon"},React.createElement("h2",null,"Choose a Weapon"),React.createElement("select",{ref:"type",className:"weapon-type",value:this.props.weapon.type,onChange:this.setType.bind(this)},React.createElement("option",{value:"lightbowgun"},"ライト"),React.createElement("option",{value:"heavybowgun"},"ヘビィ")),React.createElement("select",{ref:"name",className:"weapon-name",value:this.state.name,onChange:this.setName.bind(this)},getWeaponList(this.props.weapon.type).map(function(e){return React.createElement("option",{value:e},t.state.isLastName?getWeaponLastName(t.props.weapon.type,e):e)})),React.createElement("select",{ref:"level",className:"weapon-level",value:this.state.level+"",onChange:this.setLevel.bind(this)},getWeaponLevelList(this.props.weapon.type,this.state.name).map(function(t,e){return React.createElement("option",{value:e+1},"LV",e+1)})),React.createElement("br",null),React.createElement("label",null,React.createElement("small",null,React.createElement("input",{type:"checkbox",checked:this.state.isLastName,onChange:this.toggleLastName}),"最終強化名で表示")),React.createElement("p",{className:"weapon-power"},this.props.weapon.power+" / "+this.props.weapon.affinity+"% => "+(0|a)))},e}(React.Component),MHCalc=function(t){function e(){t.call(this),this.state={weapon:{type:"lightbowgun",power:null,affinity:null},activeSkill:{}}}return __extends(e,t),e.prototype.setWeapon=function(t){this.setState({weapon:t})},e.prototype.setActiveSkill=function(t,e){var a=this.state.activeSkill;a[t]===e?delete a[t]:a[t]=e,this.setState({activeSkill:a})},e.prototype.render=function(){return React.createElement("div",{className:"MHCalc"},React.createElement(Weapon,{weapon:this.state.weapon,setWeapon:this.setWeapon.bind(this),activeSkill:this.state.activeSkill}),React.createElement("section",null,React.createElement("h2",null,"Skill Ranking"),React.createElement("div",{className:"skill"},React.createElement(SkillBoxList,{activeSkill:this.state.activeSkill,setActiveSkill:this.setActiveSkill.bind(this)}),React.createElement(SkillRanking,{activeSkill:this.state.activeSkill,setActiveSkill:this.setActiveSkill.bind(this),weapon:this.state.weapon}))))},e}(React.Component);ReactDOM.render(React.createElement(MHCalc,null),document.getElementById("reactroot"));