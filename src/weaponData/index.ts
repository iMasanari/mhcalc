const csvVersion = 1.2

export interface Weapon {
  power: number
  affinity: number
  reload: string
  recoil: string
  deviation: string
  slot: number
  defence: number | null
  orAffinity: number | null
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
    const [_name, lv, power, affinity, slot, reload, recoil, deviation, data1] = value

    const name = _name || hash.prevName
    const fullName = `${name} ${lv}`
    const nextValue = array[i + 1]
    const isLast = !nextValue || nextValue[1] === 'LV1'

    const [splitKey, splitValue] = data1.split(':')
    const defence = splitKey === '防御' ? +splitValue : null
    const orAffinity = splitKey === 'or会心' ? +splitValue : null

    hash.prevName = name
    hash.result[fullName] = {
      power: +power,
      affinity: +affinity,
      slot: +slot,
      reload,
      recoil,
      deviation,
      defence,
      orAffinity,
      isLast
    }

    return hash
  }, { prevName: '', result: {} as { [key: string]: Weapon } })

  return result
}
