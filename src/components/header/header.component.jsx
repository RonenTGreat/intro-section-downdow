import "./header.styles.css"

import logo from "../../assets/images/logo.svg"

import arrowUp from "../../assets/images/icon-arrow-down.svg"

import iconMenu from "../../assets/images/icon-menu.svg"

import iconMenuClose from "../../assets/images/icon-close-menu.svg"



const Header = () => {

  function openNav() {
    document.querySelector(".sidenav").style.width = "50%";

    // Causes page not to scroll when nav is opened
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.blur = '0.5rem';
  }

  function closeNav() {
    document.querySelector(".sidenav").style.width = "0";
    document.body.style.position = '';
    document.body.style.top = '';
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }


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

      {/* Hamburger Menu */}
      <button className="btn_nav" onClick={openNav}>
        <img src={iconMenu} alt="menu bar" />
      </button>

      {/* Mobill Menu */}

      <div className="sidenav">
        <button className="closebtn" onClick={closeNav}>
          <img src={iconMenuClose} alt="" />
        </button>
        <div>
          <a className="mobile_link" href="/#">Features <img src={arrowUp} className="arrow-down" alt="arrow-down" /></a>
          <a className="mobile_link" href="/#">Company <img src={arrowUp} className="arrow-down" alt="arrow-down" /></a>
          <a className="mobile_link" href="/#">Careers</a>
          <a className="mobile_link" href="/#">Trending</a>
          <a className="mobile_link" href="/#">About</a>
        </div>

        <div className="mobile-register">
          <a className="mobile-register__link" href="/#">Login</a>
          <a className="mobile-register__link" href="/#"><button className="mobile-register__btn">Register</button></a>
        </div>
      </div>
    </header>

  );
}

export default Header;