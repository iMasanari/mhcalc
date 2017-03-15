import lightbowgun from './lightbowgun'
import heavybowgun from './heavybowgun'

export type WeponRawData = [string, string, [number, number][]][]

export type wepnonType = string

export interface WeaponData {
  type: wepnonType
  power: number
  affinity: number
}

export interface Weapon {
  power: number,
  affinity: number,
  isLast: boolean
}

export interface WeaponsData {
  typeMult: number
  list: { [name: string]: Weapon }
}

const translate = (data: WeponRawData) =>
  data.reduce((hash, [name, lastName, list]) => {
    const last = list.length - 1

    return list.reduce((hash, [power, affinity], i) => {
      const isLast = (i === last)

      hash[`${isLast ? lastName : name} LV${i + 1}`] = { power, affinity, isLast }
      return hash
    }, hash)
  }, {} as { [name: string]: Weapon })

export const weaponsData: { [name: string]: WeaponsData } = {
  lightbowgun: {
    typeMult: 1.3,
    list: translate(lightbowgun)
  },
  heavybowgun: {
    typeMult: 1.48,
    list: translate(heavybowgun)
  }
}

export function getWeaponList(type: wepnonType, filter: boolean | ((skill: Weapon) => boolean)) {
  const ref = weaponsData[type].list
  const list = Object.keys(ref)

  return filter ? list.filter((filter === true) ? v => ref[v].isLast : v => filter(ref[v])) : list
}

export function getWeapon(type: wepnonType, name: string) {
  return weaponsData[type].list[name]
}
