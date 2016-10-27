/// <reference path="weaponList/lightbowgun.ts" />
/// <reference path="weaponList/heavybowgun.ts" />

interface WeaponData {
	type: 'lightbowgun' | 'heavybowgun'
	name: string
	level: number
}

const weaponData = {
	lightbowgun: {
		typeMult: 1.3,
		list: weaponList.lightbowgun
	},
	heavybowgun: {
		typeMult: 1.5,
		list: weaponList.heavybowgun
	}
} as {
	[type: string]: {
		typeMult: number
		list: {[name: string]: (string | number | number[])[]}
	}
}

function getWeaponList(type: string) {
	return Object.keys(weaponData[type].list)
}
function getWeaponLevelList(weapon: WeaponData) {
	return weaponData[weapon.type].list[weapon.name]
}

function getWeapon(weapon: WeaponData) {
	return weaponData[weapon.type].list[weapon.name][weapon.level - 1] as (string | number | number[])[]
}
