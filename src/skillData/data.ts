import { Skill } from './'

interface SkillItem {
  name: string
  label: string
  value: any
}

interface SkillData {
  name: string
  group: string
  isArmorSkill?: boolean,
  effect: (skill: Skill, value: any) => Skill
  item: SkillItem[]
}

const attackUp = (skill: Skill, value: number) => {
  skill.power += value
  return skill
}

const attackMult = (skill: Skill, value: number) => {
  skill.mult *= value
  return skill
}

const affinityUp = (skill: Skill, value: number) => {
  skill.affinity += value
  return skill
}

const multValue = (skill: Skill, value: { [skillName: string]: any }) => {
  for (const key in value) {
    if (!value.hasOwnProperty(key)) continue

    if (skill[key]) {
      skill[key] *= value[key]
    } else {
      skill[key] = value[key]
    }
  }

  return skill
}

export default [{
  name: 'ロング/パワーバレル',
  effect: multValue,
  item: [
    { value: { parts: 1.05 } }
  ]
}, {
  name: '【狩技】火薬装填',
  effect: attackMult,
  item: [
    { value: 1.05 }
  ]
}, {
  name: 'パワーリロード',
  effect: attackMult,
  item: [
    { value: 1.05 }
  ]
}, {
  name: '攻撃力UP',
  group: '攻撃力UP',
  isArmorSkill: true,
  effect: attackUp,
  item: [
    { label: '【小】', value: 10 },
    { label: '【中】', value: 15 },
    { label: '【大】', value: 20 }
  ]
}, {
  name: '見切り',
  group: '見切り',
  isArmorSkill: true,
  effect: affinityUp,
  item: [
    { label: '+1', value: 10 },
    { label: '+2', value: 20 },
    { label: '+3', value: 30 }
  ]
}, {
  name: '弱点特効',
  isArmorSkill: true,
  effect: affinityUp,
  item: [
    { value: 50 }
  ]
}, {
  name: '力の解放',
  group: '腕が光るスキル',
  isArmorSkill: true,
  effect: affinityUp,
  item: [
    { label: '+1', value: 30 },
    { label: '+2', value: 50 }
  ]
}, {
  name: '挑戦者',
  group: '腕が光るスキル',
  isArmorSkill: true,
  effect: (skill: Skill, [powor, affinity]: [number, number]) =>
    attackUp(affinityUp(skill, affinity), powor),
  item: [
    { label: '+1', value: [10, 10] },
    { label: '+2', value: [20, 15] }
  ]
}, {
  name: 'フルチャージ',
  group: '腕が光るスキル',
  isArmorSkill: true,
  effect: attackUp,
  item: [
    { value: 20 }
  ]
}, {
  name: '火事場',
  group: '火事場',
  isArmorSkill: true,
  effect: attackMult,
  item: [
    { label: '+2', value: 1.3 }
  ]
}, {
  name: '不屈',
  isArmorSkill: true,
  effect: attackMult,
  item: [
    { label: '1乙', value: 1.1 },
    { label: '2乙', value: 1.2 }
  ]
}, {
  name: '逆恨み',
  isArmorSkill: true,
  effect: attackUp,
  item: [
    { value: 20 }
  ]
}, {
  name: '死中に活',
  isArmorSkill: true,
  effect: attackUp,
  item: [
    { value: 20 }
  ]
}, {
  name: '北風/南風の狩人',
  isArmorSkill: true,
  effect: attackUp,
  item: [
    { value: 15 }
  ]
}, {
  name: '研磨術',
  isArmorSkill: true,
  effect: multValue,
  item: [
    { value: { criticalUp: 1 } }
  ]
}, {
  name: '弾強化（通常 貫通 重撃）',
  group: '弾強化',
  isArmorSkill: true,
  effect: attackMult,
  item: [
    { value: 1.1 }
  ]
}, {
  name: '弾強化（散弾）',
  group: '弾強化',
  isArmorSkill: true,
  effect: attackMult,
  item: [
    { value: 1.2 }
  ]
}, {
  name: '変則射撃',
  isArmorSkill: true,
  effect: attackMult,
  item: [
    { value: 1.2 }
  ]
}, {
  name: '連撃の心得',
  isArmorSkill: true,
  effect: affinityUp,
  item: [
    { label: '2hit~', value: 25 },
    { label: '6hit', value: 30 }
  ]
}, {
  name: '超会心',
  isArmorSkill: true,
  effect: multValue,
  item: [
    // 超会心期待値: power * (1 + 0.4 * affinity)
    { value: { superAffinity: 0.4 } }
  ]
}, {
  name: '裏会心',
  isArmorSkill: true,
  effect: multValue,
  item: [
    // 裏会心期待値: power * (1 + -0.0625 * affinity)
    { value: { reverseAffinity: -0.0625 } }
  ]
}, {
  name: '龍気活性',
  isArmorSkill: true,
  effect: attackMult,
  item: [
    { value: 1.1 }
  ]
}, {
  name: 'ネコの射撃術',
  effect: attackMult,
  item: [
    { value: 1.1 }
  ]
}, {
  name: 'ネコの暴れ撃ち',
  effect: attackMult,
  item: [
    { value: 1.05 }
  ]
}, {
  name: 'ネコの火事場術',
  group: '火事場',
  effect: attackMult,
  item: [
    { value: 1.35 }
  ]
}, {
  name: 'ネコの短期催眠術',
  effect: attackUp,
  item: [
    { value: 3 }
  ]
}, {
  name: 'ネコの休憩術',
  group: '怪力の種',
  effect: attackUp,
  item: [
    { value: 15 }
  ]
}, {
  name: '食事',
  effect: attackUp,
  item: [
    { label: '【小】', value: 3 },
    { label: '【中】', value: 5 },
    { label: '【大】', value: 7 }
  ]
}, {
  name: '力の護符',
  effect: attackUp,
  item: [
    { label: '所持', value: 6 }
  ]
}, {
  name: '力の爪',
  effect: attackUp,
  item: [
    { label: '所持', value: 9 }
  ]
}, {
  name: '鬼人薬',
  effect: attackUp,
  item: [
    { name: '鬼人薬', label: '薬', value: 3 },
    { label: 'G', value: 7 }
  ]
}, {
  name: '怪力の種',
  group: '怪力の種',
  effect: attackUp,
  item: [
    { name: '怪力の種（広域+1）', label: '広域1', value: 5 },
    { name: '怪力の種/鬼人笛/ドキドキノコ', label: '種など', value: 10 },
    { name: '怪力の丸薬', label: '丸薬', value: 25 },
  ]
}, {
  name: 'クーラードリンク（北風）',
  effect: attackUp,
  item: [
    { value: 5 }
  ]
}, {
  name: '狂竜症',
  effect: (skill: Skill, [affinity, value]: [number, { virse: number }]) =>
    affinityUp(multValue(skill, value), affinity),
  item: [
    { label: '克服', value: [15, { virse: 1 }] },
    { name: '狂竜症克服（無我の境地）', label: '無我', value: [30, { virse: 1 }] }
  ]
}, {
  name: '【狩猟笛】攻撃力',
  effect: attackMult,
  item: [
    { label: '小', value: 1.1 },
    { label: '大/小2', value: 1.15 },
    { label: '大2', value: 1.2 }
  ]
}, {
  name: '【狩猟笛】会心率',
  effect: affinityUp,
  item: [
    { label: 'UP', value: 10 },
    { label: 'UP2', value: 15 }
  ]
}, {
  name: '【操虫棍】広域エキス 赤',
  effect: attackUp,
  item: [
    { value: 5 }
  ]
}, {
  name: '【操虫棍】広域エキス 白',
  effect: affinityUp,
  item: [
    { value: 10 }
  ]
}, {
  name: '【ボウガン】鬼人弾',
  group: '怪力の種',
  effect: (skill: Skill, [powor, affinity, value]: [number, number, { criticalUp: number }]) =>
    attackUp(affinityUp(multValue(skill, value), affinity), powor),
  item: [
    { name: '【ボウガン】鬼人弾/鬼人硬化弾', label: '鬼人', value: [10, 0, { criticalUp: 1 }] },
    { name: '【ボウガン】鬼人会心弾', label: '会心', value: [15, 10, { criticalUp: 1 }] }
  ]
}, {
  name: '攻撃力DOWN',
  group: '攻撃力UP',
  isArmorSkill: true,
  effect: attackUp,
  item: [
    { label: '【小】', value: -5 },
    { label: '【中】', value: -10 },
    { label: '【大】', value: -15 }
  ]
}, {
  name: '見切り ', // keyを見切り+と変えるため最後にスペース
  group: '見切り',
  isArmorSkill: true,
  effect: affinityUp,
  item: [
    { name: '見切り-1', label: '-1', value: -5 },
    { name: '見切り-2', label: '-2', value: -10 },
    { name: '見切り-3', label: '-3', value: -15 }
  ]
}, {
  name: '心配性',
  group: '火事場',
  isArmorSkill: true,
  effect: attackMult,
  item: [
    { value: 0.7 }
  ]
}] as SkillData[]
