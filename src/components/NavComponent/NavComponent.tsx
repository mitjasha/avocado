import React from "react";
import "./NavComponent.scss";

const NavComponent: React.FC = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-list__item">ABOUT US</li>
        <li className="nav-list__item">MAIN</li>
        <li className="nav-list__item">PROFILE</li>
        <li className="nav-list__item">RECIPES</li>
      </ul>
      <div className="nav-close" />
    </nav>
  );
};

export default NavComponent;
