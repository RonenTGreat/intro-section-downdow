import "./header.styles.css"

import logo from "../../assets/images/logo.svg"

import arrowUp from "../../assets/images/icon-arrow-down.svg"

import iconMenu from "../../assets/images/icon-menu.svg"

import iconMenuClose from "../../assets/images/icon-close-menu.svg"

import todo from "../../assets/images/icon-todo.svg"

import calendar from "../../assets/images/icon-calendar.svg"

import planning from "../../assets/images/icon-planning.svg"

import reminder from "../../assets/images/icon-reminders.svg"





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

  function showFeatureDropdown() {
    let featureDropdown = document.querySelector(".feature-dropdown");
    featureDropdown.classList.toggle("hidden");

    document.querySelector(".feature-arrow-down").classList.toggle("updown")
  }

  function showCompanyDropdown() {
    let companyDropdown = document.querySelector(".company-dropdown");
    companyDropdown.classList.toggle("hidden");

    document.querySelector(".company-arrow-down").classList.toggle("updown")
  }


  return (
    <header className="header">
      <nav className="nav">
        <a href="/#"><img src={logo} alt="logo" className="logo" /></a>
        <ul className="nav_list">
          <li className="nav_item"><a onClick={showFeatureDropdown} href="/#" className="nav_link">Features <img src={arrowUp} className="feature-arrow-down" alt="arrow-down" /></a>

            <div className="feature-dropdown hidden">
              <p className="feature-dropdown__link"><img src={todo} alt="todo" /> Todo List</p>
              <p className="feature-dropdown__link"><img src={calendar} alt="calendar" />Calendar</p>
              <p className="feature-dropdown__link"><img src={reminder} alt="reminder" />Reminder</p>
              <p className="feature-dropdown__link"><img src={planning} alt="planning" />Planning</p>
            </div>
          </li>


          <li className="nav_item"><a onClick={showCompanyDropdown} href="/#" className="nav_link">Company <img src={arrowUp} className="company-arrow-down" alt="arrow-down" /></a>

            <div className="company-dropdown hidden">
              <p>History</p>
              <p>Our Team</p>
              <p>Blog</p>
            </div>

          </li>
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
          <a className="mobile_link" href="/#">Features <img src={arrowUp} className="arrow-down" alt="arrow-down" />
          
            <div className="">
              <p className="feature-dropdown__link"><img src={todo} alt="todo" /> Todo List</p>
              <p className="feature-dropdown__link"><img src={calendar} alt="calendar" />Calendar</p>
              <p className="feature-dropdown__link"><img src={reminder} alt="reminder" />Reminder</p>
              <p className="feature-dropdown__link"><img src={planning} alt="planning" />Planning</p>
            </div>
          
          </a>
          <a className="mobile_link" href="/#">Company <img src={arrowUp} className="arrow-down" alt="arrow-down" />
          
            <div className="">
              <p>History</p>
              <p>Our Team</p>
              <p>Blog</p>
            </div>
          </a>
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