/// <reference path="weaponList/lightbowgun.ts" />
/// <reference path="weaponList/heavybowgun.ts" />

type wepnonType = 'lightbowgun' | 'heavybowgun'

interface WeaponData {
	type: wepnonType
	power: number
	affinity: number
}

const weaponsData: WeaponsData = {
	lightbowgun: {
		typeMult: 1.3,
		list: weaponList.lightbowgun as _Wepnons as Wepnons
	},
	heavybowgun: {
		typeMult: 1.48,
		list: weaponList.heavybowgun as _Wepnons as Wepnons
	}
}

function getWeaponList(type: wepnonType) {
	return Object.keys(weaponsData[type].list)
}
function getWeaponLevelList(type: wepnonType, name: string) {
	return weaponsData[type].list[name].list
}
function getWeapon(type: wepnonType, name: string, level: number) {
	return weaponsData[type].list[name].list[level - 1]
}
function getWeaponLastName(type: wepnonType, name: string) {
	return weaponsData[type].list[name].lastName
}

// TypeScriptのバグ?により一度この型を経由
type _Wepnons = {
	[name: string]: {
		lastName: string
		list: number[][]
	}
}
type Wepnons = {
	[name: string]: {
		lastName: string
		list: [number, number][]
	}
}
type WeaponsData = {
	[name: string]: {
		typeMult: number
		list: Wepnons
	}
}