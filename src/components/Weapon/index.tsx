import * as preact from 'preact'
import WeaponSelects from './WeaponSelects'
import WeaponDetail from './WeaponDetail'
import './index.css'

export default () =>
  <section className="Weapon">
    <h2>Choose a Weapon</h2>
    <WeaponSelects />
    <WeaponDetail />
  </section>
