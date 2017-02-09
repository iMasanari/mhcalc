import * as weaponList from './weaponList/index'

export type wepnonType = 'lightbowgun' | 'heavybowgun'

export interface WeaponData {
	type: wepnonType
	power: number
	affinity: number
}

export interface WeaponsData {
	typeMult: number
	list: { [name: string]: weaponList.Weapon }
}

export const weaponsData: { [name: string]: WeaponsData } = {
	lightbowgun: {
		typeMult: 1.3,
		list: weaponList.lightbowgun
	},
	heavybowgun: {
		typeMult: 1.48,
		list: weaponList.heavybowgun
	}
}

export function getWeaponList(type: wepnonType, filter: boolean | ((skill: weaponList.Weapon) => boolean)) {
	const ref = weaponsData[type].list
	const list = Object.keys(ref)

	return filter ? list.filter((filter === true) ? v => ref[v].isLast : v => filter(ref[v])) : list
}

export function getWeapon(type: wepnonType, name: string) {
	return weaponsData[type].list[name]
}
