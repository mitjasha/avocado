import React from "react";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header container">
      <input type="date" className="header__date-input" />
      <div className="header__date">30 January, Monday</div>
      <button type="button" className="header__menu-btn">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </button>
    </header>
  );
};

export default Header;
