import lightData from './lightbowgun'
import heavyData from './heavybowgun'

export interface Weapon {
    power: number,
    affinity: number,
    isLast: boolean
}

export type WeponRawData = [string, string, [number, number][]][]

const translate = (data: WeponRawData) =>
    data.reduce((hash, [name, lastName, list]) => {
        const last = list.length - 1

        return list.reduce((hash, [power, affinity], i) => {
            const isLast = (i === last)

            hash[`${isLast ? lastName : name} LV${i + 1}`] = { power, affinity, isLast }
            return hash
        }, hash)
    }, {} as { [name: string]: Weapon })

export const lightbowgun = translate(lightData)
export const heavybowgun = translate(heavyData)