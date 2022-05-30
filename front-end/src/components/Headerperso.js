import '../assets/css/headerperso.css'
import logo from '../assets/img/logo.png'

function headerPerso() {
  return (
    <section className="headerStyle">
      <div className="logoStyle">
        <img src={logo} className="header-logo" alt="Logo Pop Harmonic" />
      </div>
      <div className="menuStyle">
        <nav>
          <ul>
            <li>Nouveauté</li>
            <li>Electriques</li>
            <li>Accoustiques</li>
            <li>Basses</li>
            <li>Amplis</li>
            <li>Effet & Pedales</li>
            <li>Accessoires</li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default headerPerso
