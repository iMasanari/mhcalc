import * as preact from 'preact'
import WeaponTypeSelect from './WeaponTypeSelect'
import WeaponNameSelect from './WeaponNameSelect'
import LastOnlyCheckBox from './LastOnlyCheckBox'

export default () =>
  <div>
    <div>
      <WeaponTypeSelect />
      <WeaponNameSelect />
    </div>
    <LastOnlyCheckBox />
  </div>
