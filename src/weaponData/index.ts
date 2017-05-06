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
  const csv = await loadCsv(`data/${weaponType}.csv`)

  const { result } = csv.reduce((hash, value, i, array) => {
    const name = value[0] || hash.prevName
    const fullName = `${name} ${value[1]}`
    const nextValue = array[i + 1]
    const isLast = !nextValue || nextValue[1] === 'LV1'

    hash.prevName = name
    hash.result[fullName] = {
      power: +value[2],
      affinity: +value[3],
      isLast
    }

    return hash
  }, { prevName: '', result: {} as { [key: string]: Weapon } })

  return result
}
