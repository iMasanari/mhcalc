const csvVersion = 1.1

export type wepnonType = string

export interface WeaponData {
  type: wepnonType
  power: number
  affinity: number
}

export interface Weapon {
  power: number
  affinity: number
  reload: string
  recoil: string
  deviation: string
  slot: number
  isLast: boolean
}

const loadCsv = (url: string) =>
  new Promise<string[][]>((resolve) => {
    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
      resolve(xhr.responseText.trim().split('\n').map(v => v.split(',')))
    }

    xhr.open('GET', url)
    xhr.send(null)
  })


export default async (weaponType: string) => {
  const csv = await loadCsv(`data/${weaponType}.csv?v${csvVersion}`)

  const { result } = csv.reduce((hash, value, i, array) => {
    const [_name, lv, power, affinity, slot, reload, recoil, deviation] = value

    const name = _name || hash.prevName
    const fullName = `${name} ${lv}`
    const nextValue = array[i + 1]
    const isLast = !nextValue || nextValue[1] === 'LV1'

    hash.prevName = name
    hash.result[fullName] = {
      power: +power,
      affinity: +affinity,
      slot: +slot,
      reload,
      recoil,
      deviation,
      isLast
    }

    return hash
  }, { prevName: '', result: {} as { [key: string]: Weapon } })

  return result
}
