import React from "react";
import LogoComponent from "../../components/LogoComponent/LogoComponent";
import NavComponent from "../../components/NavComponent/NavComponent";
import "./Header.scss";

const Header: React.FC = () => {
  const openBurger = () => {
    const nav = document.querySelector(".nav-list") as HTMLElement;
    const burgerCloseBtn = document.querySelector(".nav-close") as HTMLElement;
    nav.classList.add("nav-active");
    burgerCloseBtn.style.display = "block";
  };
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header_desk">
          <LogoComponent className="logo" />
          <NavComponent />
        </div>
        <div className="header_mob">
          <input type="date" className="header__date-input" />
          <div className="header__date">30 January, Monday</div>
          <button
            type="button"
            className="header__menu-btn"
            onClick={openBurger}
          >
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
