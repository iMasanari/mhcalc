import ActionReducer from 'action-reducer'
import fetchWeapon, { Weapon } from "@/weaponData"
import { ThunkAction } from 'redux-thunk'

export type WeaponPartialData = {
  power: number
  affinity: number
} & Partial<Weapon>

// fetchした武器データの保存オブジェ
const weaponData = {} as { [type: string]: { [name: string]: Weapon } }

const getWeaponList = (type: string, filter?: boolean) => {
  const ref = weaponData[type]

  if (!ref) return []

  const list = Object.keys(ref)

  return filter ? list.filter(v => ref[v].isLast) : list
}

const getWeapon = (type: string, name: string) =>
  weaponData[type] && weaponData[type][name] ? weaponData[type][name] : { power: 0, affinity: 0 }

export interface WeaponState {
  type: string
  name: string
  data: WeaponPartialData
  isLastOnly: boolean
  list: string[]
}

const initState: WeaponState = {
  type: 'lightbowgun',
  name: 'ロード中…',
  data: { power: 330, affinity: 0 },
  isLastOnly: true,
  list: [],
}

const { createAction, reducer } = ActionReducer(initState)


// action

const _setWeaponType = createAction(
  (state, type: string) => {
    const list = getWeaponList(type, state.isLastOnly)
    const name = list[0] || 'ロード中…'

    return {
      ...state,
      type,
      name,
      list,
      data: getWeapon(type, name),
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
  (state, name: string) =>
    ({
      ...state,
      name,
      data: getWeapon(state.type, name),
    })
)

export const toggleLastOnly = createAction((state) =>
  ({
    ...state,
    isLastOnly: !state.isLastOnly,
    list: getWeaponList(state.type, !state.isLastOnly),
  })
)

export default reducer
