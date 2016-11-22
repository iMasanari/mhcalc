namespace weaponList {
    export interface Weapon {
        power: number,
        affinity: number,
        isLast: boolean
    }
    export type data = [string, string, [number, number][]]

    export const translate = (data: data[]) =>
        data.reduce((hash, [name, lastName, list]) => {
            const last = list.length - 1

            return list.reduce((hash, [power, affinity], i) => {
                const isLast = i === last

                hash[`${isLast ? lastName : name} LV${i + 1}`] = { power, affinity, isLast }
                return hash
            }, hash)
        }, {} as { [name: string]: Weapon })
}