/// <reference path="weaponList/lightbowgun.ts" />
/// <reference path="weaponList/heavybowgun.ts" />

type wepnonType = 'lightbowgun' | 'heavybowgun'

interface WeaponData {
	type: wepnonType
	power: number
	affinity: number
}

interface WeaponsData {
	typeMult: number
	list: { [name: string]: weaponList.Weapon }
}

const weaponsData: { [name: string]: WeaponsData } = {
	lightbowgun: {
		typeMult: 1.3,
		list: weaponList.lightbowgun
	},
	heavybowgun: {
		typeMult: 1.48,
		list: weaponList.heavybowgun
	}
}

function getWeaponList(type: wepnonType, filter: boolean | ((skill: weaponList.Weapon) => boolean)) {
	const ref = weaponsData[type].list
	const list = Object.keys(ref)

	return filter ? list.filter((filter === true) ? v => ref[v].isLast : v => filter(ref[v])) : list
}

function getWeapon(type: wepnonType, name: string) {
	return weaponsData[type].list[name]
}
