import React from "react";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <input type="date" className="header__date-input" />
        <div className="header__date">30 January, Monday</div>
        <button type="button" className="header__menu-btn">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </button>
        <h1 className="header__logo">AVOCADO</h1>
        <nav>
          <ul className="header__nav-list">
            <li>ABOUT US</li>
            <li>MAIN</li>
            <li>PROFILE</li>
            <li>RECIPES</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
