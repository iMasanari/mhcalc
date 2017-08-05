import ActionReducer from 'action-reducer'
import fetchWeapon, { Weapon } from "@/weaponData"

// fetchした武器データの保存オブジェ
const weaponData = {} as { [type: string]: { [name: string]: Weapon } }

const getWeaponList = (type: string, filter?: boolean) => {
  const ref = weaponData[type]

  if (!ref) return []

  const list = Object.keys(ref)

  return filter ? list.filter(v => ref[v].isLast) : list
}

const getWeapon = (type: string, name: string) => {
  return weaponData[type] ? weaponData[type][name] : undefined
}

const searchWeapon = (type: string, power: number, affinity: number) => {
  const findFn = (name: string) => {
    const weapon = getWeapon(type, name)!
    return weapon.power === power && weapon.affinity === affinity && !weapon.orAffinity
  }

  // [].find のブラウザ対応が不安なので、filterで代用
  return getWeaponList(type, true).filter(findFn)[0]
    || getWeaponList(type).filter(findFn)[0]
    || 'カスタマイズ'
}

export interface WeaponState {
  type: string
  name: string
  weaponData?: Weapon
  power: number
  affinity: number
  orAffinity?: number | null
  isLastOnly: boolean
  list: string[]
  update: (partialState: Partial<WeaponState>) => WeaponState
}

const updateState = (prevState: WeaponState, nextState: Partial<WeaponState>) => {
  const state = {
    ...prevState,
    ...nextState,
  }

  if (nextState.type) {
    state.list = getWeaponList(state.type, state.isLastOnly)
    state.name = state.list[0] || 'カスタマイズ'
    state.weaponData = getWeapon(state.type, state.name)
  }
  else if (nextState.isLastOnly !== null) {
    state.list = getWeaponList(state.type, state.isLastOnly)
  }

  if (state.name !== 'カスタマイズ' && (nextState.type || nextState.name)) {
    const weaponData = getWeapon(state.type, state.name)!

    state.power = weaponData.power
    state.affinity = weaponData.affinity
    state.orAffinity = weaponData.orAffinity
    state.weaponData = weaponData
  }

  return state
}

const initState: WeaponState = {
  type: 'lightbowgun',
  name: 'カスタマイズ',
  weaponData: undefined,
  power: 330,
  affinity: 0,
  isLastOnly: true,
  list: [],
  update: function (nextState) {
    return updateState(this, nextState)
  },
}

const { createAction, reducer } = ActionReducer(initState)


// action

const _setWeaponType = createAction(
  (state, payload: string) =>
    state.update({ type: payload })
)

export const setWeaponType = (weaponType: string) =>
  async (dispatch: any) => {
    dispatch(_setWeaponType(weaponType))

    if (!weaponData[weaponType]) {
      weaponData[weaponType] = await fetchWeapon(weaponType)

      dispatch(_setWeaponType(weaponType))
    }
  }

export const initWeaponType = () =>
  setWeaponType(initState.type)

export const setWeaponName = createAction(
  (state, payload: string) =>
    state.update({ name: payload })
)

export const setPower = createAction(
  (state, payload: number) =>
    state.update({
      name: searchWeapon(state.type, payload, state.affinity),
      power: payload,
      orAffinity: null,
    })
)

export const setAffinity = createAction(
  (state, payload: number) =>
    state.update({
      name: searchWeapon(state.type, state.power, payload),
      affinity: payload,
      orAffinity: null,
    })
)

export const toggleLastOnly = createAction((state) =>
  state.update({ isLastOnly: !state.isLastOnly })
)

export default reducer
