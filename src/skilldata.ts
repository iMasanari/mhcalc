function addPowor(value: number) {
    return (data: { [key: string]: any[] }) => {
        data['addPowor'].push(value)
    }
}

let skillData: {
    name: string,
    group?: string,
    item: { label: string, value: any }[]
}[] = [
        {
            name: 'ロング/パワーバレル',
            item: [
                { label: 'on', value: 1.05 }
            ]
        }, {
            name: '【狩技】火薬装填',
            item: [
                { label: 'on', value: 1.05 }
            ]
        }, {
            name: 'パワーリロード',
            item: [
                { label: 'on', value: 1.05 }
            ]
        }, {
            name: '攻撃力UP',
            group: '攻撃力UP',
            item: [
                { label: '【小】', value: 10 },
                { label: '【中】', value: 15 },
                { label: '【大】', value: 20 }
            ]
        }, {
            name: '見切り',
            group: '見切り',
            item: [
                { label: '+1', value: 10 },
                { label: '+2', value: 15 },
                { label: '+3', value: 20 }
            ]
        }, {
            name: '攻撃力DOWN',
            group: '攻撃力UP',
            item: [
                { label: '【小】', value: -5 },
                { label: '【中】', value: -10 },
                { label: '【大】', value: -15 }
            ]
        }, {
            name: '見切り',
            group: '見切り',
            item: [
                { label: '-1', value: -5 },
                { label: '-2', value: -10 },
                { label: '-3', value: -15 }
            ]
        }
    ]

skillData.forEach(value => {
    value.group = value.group || value.name
})

export default skillData