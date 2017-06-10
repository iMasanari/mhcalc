import * as preact from 'preact'
import preactRedux from 'preact-redux'
import { StoreState } from '../../reducers'
import { RankingState } from '../../reducers/ranking'
import { WeaponState } from '../../reducers/weapon'
import { SkillState } from '../../reducers/skill'
import TableRow from './TableRow'
import { getRanking, CalcData } from '../../calc'
import { toggleSkillFilter } from '../../reducers/ranking'
import './style.css'

const mapStateToProps = (state: StoreState) => ({
  skillFilter: state.ranking.skillFilter,
  weapon: state.weapon,
  skill: state.skill,
})

const mapDispatchToProps = (dispatch: any) => ({
  toggleSkillFilter: () => {
    dispatch(toggleSkillFilter())
  },
})

type Props = RankingState & {
  weapon: WeaponState
  skill: SkillState
  toggleSkillFilter: () => void
}

interface State {
  prevSkillRanking: CalcData[]
}

export default preactRedux.connect(mapStateToProps, mapDispatchToProps)(
  class SkillRanking extends preact.Component<Props, State> {
    private isAnimation = false
    private animationTimer: number | undefined

    state: State = {
      prevSkillRanking: getRanking(this.props.weapon, this.props.skill, false)
    }

    render(props: Props) {
      let skillRanking: CalcData[]
      const isAnimation = this.isAnimation

      if (!isAnimation) {
        this.isAnimation = true
        skillRanking = this.state.prevSkillRanking
      }
      else {
        skillRanking = getRanking(props.weapon, props.skill, props.skillFilter)

        clearTimeout(this.animationTimer!)
        this.animationTimer = setTimeout(() => {
          this.isAnimation = false
          this.setState({ prevSkillRanking: skillRanking })
        }, 200)
      }

      const skillRankingHash = skillRanking.reduce((h, v) => (h[v.name] = v, h), {} as { [name: string]: CalcData })

      return (
        <div className={'SkillRanking' + (isAnimation ? ' animation' : '')}>
          <table>
            <tbody>
              <tr>
                <th>
                  スキル<br />
                  <label>
                    <input type="checkbox" checked={!props.skillFilter} onChange={props.toggleSkillFilter} />
                    <small>防具スキルのみ</small>
                  </label>
                </th>
                <th>上昇値</th>
                <th>上昇率</th>
              </tr>
              {this.state.prevSkillRanking.map((skill, i) => {
                const item = skillRankingHash[skill.name] || skill

                return <TableRow key={item.name}
                  item={item}
                  rankUp={item.index - i}
                  isHide={!skillRankingHash[skill.name]}
                />
              })}
            </tbody>
          </table>
        </div>
      )
    }
  }
)
