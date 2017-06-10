import * as preact from 'preact'
import preactRedux from 'preact-redux'
import { StoreState } from '../../reducers'
import { RankingState } from '../../reducers/ranking'
import { WeaponState } from '../../reducers/weapon'
import { SkillState } from '../../reducers/skill'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import { getRanking, CalcData } from '../../calc'
import './RankingTable.css'

const mapStateToProps = (state: StoreState) => ({
  skillFilter: state.ranking.skillFilter,
  weapon: state.weapon,
  skill: state.skill,
})

type Props = RankingState & {
  weapon: WeaponState
  skill: SkillState
}

interface State {
  prevSkillRanking: CalcData[]
}

export default preactRedux.connect(mapStateToProps)(
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

      type SkillRankingHash = { [name: string]: CalcData }
      const skillRankingHash = skillRanking.reduce((h, v) => (h[v.name] = v, h), {} as SkillRankingHash)

      const tableRows = this.state.prevSkillRanking.map((prevSkill, prevIndex) => {
        const skill = skillRankingHash[prevSkill.name] || prevSkill

        return <TableRow key={skill.name}
          item={skill}
          rankUp={skill.index - prevIndex}
          isHide={!skillRankingHash[prevSkill.name]}
        />
      })

      return (
        <table className="RankingTable">
          <tbody>
            <TableHeader />
            {tableRows}
          </tbody>
        </table>
      )
    }
  }
)
