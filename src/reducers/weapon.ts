import { getWeapon, getWeaponList } from '../weaponData'
import returnTypes from '../units/retrunTypes'

const SET_WEAPON_TYPE = 'SET_WEAPON_TYPE'
const SET_WEAPON_NAME = 'SET_WEAPON_NAME'
const SET_POWER = 'SET_POWER'
const SET_AFFINITY = 'SET_AFFINITY'
const TOGGLE_LAST_ONLY = 'TOGGLE_LAST_ONLY'

export const setWeaponType = (payload: string) =>
    ({
        type: SET_WEAPON_TYPE as typeof SET_WEAPON_TYPE,
        payload,
    })

export const setWeaponName = (payload: string) =>
    ({
        type: SET_WEAPON_NAME as typeof SET_WEAPON_NAME,
        payload,
    })

export const setPower = (payload: number) =>
    ({
        type: SET_POWER as typeof SET_POWER,
        payload,
    })

export const setAffinity = (payload: number) =>
    ({
        type: SET_AFFINITY as typeof SET_AFFINITY,
        payload,
    })

export const toggleLastOnly = () =>
    ({
        type: TOGGLE_LAST_ONLY as typeof TOGGLE_LAST_ONLY,
    })

const Actions = (false as true) && returnTypes(
    setWeaponType,
    setWeaponName,
    setPower,
    setAffinity,
    toggleLastOnly,
)
type Actions = typeof Actions

export interface State {
    type: string
    name: string
    power: number
    affinity: number
    isLastOnly: boolean
}

const initState: State = {
    type: 'lightbowgun',
    name: 'サージュバレット LV8',
    power: 210,
    affinity: 0,
    isLastOnly: true,
}

export default (state = initState, action: Actions) => {
    switch (action.type) {
        case SET_WEAPON_TYPE:
            return setState(state, action.payload, getWeaponList(action.payload, true)[0])

        case SET_WEAPON_NAME:
            return setState(state, state.type, action.payload)

        case SET_POWER:
            return {
                ...state,
                name: searchWeapon(state.type, action.payload!, state.affinity),
                power: action.payload!
            }

        case SET_AFFINITY:
            return {
                ...state,
                name: searchWeapon(state.type, state.power, action.payload!),
                affinity: action.payload!
            }

        case TOGGLE_LAST_ONLY:
            const newState = getWeapon(state.type, state.name) ?
                state : setState(state, state.type, getWeaponList(state.type, true)[0])

            return {
                ...newState,
                isLastOnly: !state.isLastOnly,
            }
    }
    return state
}


function setState(state: State, type: string, name: string) {
    const { power, affinity } = getWeapon(type, name)

    return {
        ...state,
        type,
        name,
        power,
        affinity,
    }
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