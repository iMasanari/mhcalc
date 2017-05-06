import { returnTypes, noBuild } from '../units/retrunTypes'
import fetchWeapon from "../weaponData"

const SET_WEAPON_TYPE = 'SET_WEAPON_TYPE'
const SET_WEAPON_NAME = 'SET_WEAPON_NAME'
const SET_POWER = 'SET_POWER'
const SET_AFFINITY = 'SET_AFFINITY'
const TOGGLE_LAST_ONLY = 'TOGGLE_LAST_ONLY'


// fetchした武器データの保存オブジェ

const weaponData = {} as any

const getWeaponList = (type: string, filter?: boolean) => {
  if (!weaponData[type]) {
    return []
  }

  const ref = weaponData[type]
  const list = Object.keys(ref)

  return filter ? list.filter(v => ref[v].isLast) : list
}

const getWeapon = (type: string, name: string) => {
  return weaponData[type][name]
}

// action

const _setWeaponType = (payload: string) =>
  ({
    type: SET_WEAPON_TYPE as (typeof SET_WEAPON_TYPE),
    payload,
  })

export const setWeaponType = (weaponType: string) =>
  async (dispatch: any) => {
    dispatch(_setWeaponType(weaponType))

    if (!weaponData[weaponType]) {
      weaponData[weaponType] = await fetchWeapon(weaponType)
      dispatch(_setWeaponType(weaponType))
    }
  }

export const setWeaponName = (payload: string) =>
  ({
    type: SET_WEAPON_NAME as (typeof SET_WEAPON_NAME),
    payload,
  })

export const setPower = (payload: number) =>
  ({
    type: SET_POWER as (typeof SET_POWER),
    payload,
  })

export const setAffinity = (payload: number) =>
  ({
    type: SET_AFFINITY as (typeof SET_AFFINITY),
    payload,
  })

export const toggleLastOnly = () =>
  ({
    type: TOGGLE_LAST_ONLY as (typeof TOGGLE_LAST_ONLY),
  })

const Actions = noBuild && returnTypes(
  _setWeaponType,
  setWeaponName,
  setPower,
  setAffinity,
  toggleLastOnly,
)
type Actions = typeof Actions

export interface WeaponState {
  type: string
  name: string
  power: number
  affinity: number
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
  }
  else if (nextState.isLastOnly !== null) {
    state.list = getWeaponList(state.type, state.isLastOnly)
  }

  if (state.name !== 'カスタマイズ' && (nextState.type || nextState.name)) {
    const { power, affinity } = getWeapon(state.type, state.name)

    state.power = power
    state.affinity = affinity
  }

  return state
}

const initState: WeaponState = {
  type: 'lightbowgun',
  name: 'カスタマイズ',
  power: 330,
  affinity: 0,
  isLastOnly: true,
  list: [],
  update: function (nextState) {
    return updateState(this, nextState)
  },
}

export default (state = initState, action: Actions) => {
  switch (action.type) {
    case SET_WEAPON_TYPE:
      return state.update({
        type: action.payload
      })

    case SET_WEAPON_NAME:
      return state.update({
        name: action.payload
      })

    case SET_POWER:
      return state.update({
        name: searchWeapon(state.type, action.payload, state.affinity),
        power: action.payload
      })

    case SET_AFFINITY:
      return state.update({
        name: searchWeapon(state.type, state.power, action.payload),
        affinity: action.payload
      })

    case TOGGLE_LAST_ONLY:
      return state.update({
        isLastOnly: !state.isLastOnly
      })
  }
  return state
}

const searchWeapon = (type: string, power: number, affinity: number) => {
  const findFn = (name: string) => {
    const weapon = getWeapon(type, name)
    return weapon.power === power && weapon.affinity === affinity
  }

  return getWeaponList(type, true).find(findFn) || getWeaponList(type).find(findFn)|| 'カスタマイズ'
}
