import "./header.styles.css"

import logo from "../../assets/images/logo.svg"

import arrowUp from "../../assets/images/icon-arrow-down.svg"


const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/#"><img src={logo} alt="logo" className="logo" /></a>
        <ul className="nav_list">
          <li className="nav_item"><a href="/#" className="nav_link">Features <img src={arrowUp} className="arrow-down" alt="arrow-down" /></a></li>
          <li className="nav_item"><a href="/#" className="nav_link">Company <img src={arrowUp} className="arrow-down" alt="arrow-down" /></a></li>
          <li className="nav_item"><a href="/#" className="nav_link">Careers</a></li>
          <li className="nav_item"><a href="/#" className="nav_link">About</a></li>
        </ul>
      </nav>

      <div className="register-section">
        <a className="register-section__login" href="/#">Login</a>
        <a className="register-section__register-btn" href="/#"><button className="register-btn">Register</button></a>
      </div>
    </header>

  );
}

export default Header;