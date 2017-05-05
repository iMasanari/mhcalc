import { getWeapon, getWeaponList } from '../weaponData'
import { returnTypes, noBuild } from '../units/retrunTypes'

const SET_WEAPON_TYPE = 'SET_WEAPON_TYPE'
const SET_WEAPON_NAME = 'SET_WEAPON_NAME'
const SET_POWER = 'SET_POWER'
const SET_AFFINITY = 'SET_AFFINITY'
const TOGGLE_LAST_ONLY = 'TOGGLE_LAST_ONLY'

export const setWeaponType = (payload: string) =>
  ({
    type: SET_WEAPON_TYPE as (typeof SET_WEAPON_TYPE),
    payload,
  })

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
  setWeaponType,
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

    if (nextState.isLastOnly !== null) {
      state.list = getWeaponList(state.type, state.isLastOnly)
    }

    if (nextState.type) {
      state.list = getWeaponList(state.type, state.isLastOnly)
      state.name = state.list[0]
    }

    if (nextState.name !== 'カスタマイズ' && (nextState.type || nextState.name)) {
      const { power, affinity } = getWeapon(state.type, state.name)

      state.power = power
      state.affinity = affinity
    }

    return state
}

const initState: WeaponState = {
  type: 'lightbowgun',
  name: 'サージュバレット LV8',
  power: 210,
  affinity: 0,
  isLastOnly: true,
  list: getWeaponList('lightbowgun', true),
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

function searchWeapon(type: string, power: number, affinity: number) {
  for (const isLast of [true, false]) {
    for (const name of getWeaponList(type, v => v.isLast === isLast)) {
      const weapon = getWeapon(type, name)

      if (weapon.power === power && weapon.affinity === affinity) {
        return name
      }
    }
  }

  return 'カスタマイズ'
}
