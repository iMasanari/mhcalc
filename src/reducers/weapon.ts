import ActionReducer from 'action-reducer'
import fetchWeapon, { Weapon } from "@/weaponData"
import { ThunkAction } from 'redux-thunk'

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

export interface WeaponState {
  type: string
  name: string
  weaponData?: Weapon
  power: number
  affinity: number
  orAffinity?: number | null
  isLastOnly: boolean
  list: string[]
}

const initState: WeaponState = {
  type: 'lightbowgun',
  name: 'ロード中…',
  weaponData: undefined,
  power: 330,
  affinity: 0,
  isLastOnly: true,
  list: [],
}

const { createAction, reducer } = ActionReducer(initState)


// action

const _setWeaponType = createAction(
  (state, type: string) => {
    const list = getWeaponList(type, state.isLastOnly)
    const name = list[0] || 'ロード中…'
    const weaponData = getWeapon(type, name)! || {}

    return {
      ...state,
      type,
      name,
      list,
      weaponData,
      power: weaponData.power,
      affinity: weaponData.affinity,
      orAffinity: weaponData.orAffinity,
    }
  }
)

export const setWeaponType = (weaponType: string): ThunkAction<void, WeaponState, void> =>
  async (dispatch) => {
    dispatch(_setWeaponType(weaponType))

    if (!weaponData[weaponType]) {
      weaponData[weaponType] = await fetchWeapon(weaponType)

      dispatch(_setWeaponType(weaponType))
    }
  }

export const initWeaponType = () =>
  setWeaponType(initState.type)

export const setWeaponName = createAction(
  (state, name: string) => {
    const weaponData = getWeapon(state.type, name)!

    return {
      ...state,
      name,
      weaponData,
      power: weaponData.power,
      affinity: weaponData.affinity,
      orAffinity: weaponData.orAffinity,
    }
  }
)

export const toggleLastOnly = createAction((state) =>
  ({
    ...state,
    isLastOnly: !state.isLastOnly,
    list: getWeaponList(state.type, !state.isLastOnly),
  })
)

export default reducer
