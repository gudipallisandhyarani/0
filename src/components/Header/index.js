// Write your JS code here
// Write your JS code here

import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="header-container">
    <div className="logo-image">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
<h1 className="header-heading">Wave</h1>
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>

      <li className="link-item">
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>

      <li className="link-item">
        <Link className="route-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
