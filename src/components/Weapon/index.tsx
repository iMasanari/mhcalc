import * as preact from 'preact'
import WeaponTypeSelect from './WeaponTypeSelect'
import WeaponNameSelect from './WeaponNameSelect'
import LastOnlyCheckBox from './LastOnlyCheckBox'
import PowerInputs from './PowerInputs'
import PowerResults from './PowerResults'
import './style.css'

export default () =>
  <section className="Weapon">
    <h2>Choose a Weapon</h2>
    <div>
      <WeaponTypeSelect />
      <WeaponNameSelect />
    </div>
    <LastOnlyCheckBox />
    <PowerInputs />
    <PowerResults />
  </section>
