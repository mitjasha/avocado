import React from "react";
import "./NavComponent.scss";

const NavComponent: React.FC = () => {
  const closeBurger = () => {
    const nav = document.querySelector(".nav-list") as HTMLElement;
    nav.classList.remove("nav-active");
    const burgerCloseBtn = document.querySelector(".nav-close") as HTMLElement;
    burgerCloseBtn.style.display = "none";
  };
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-list__item">ABOUT US</li>
        <li className="nav-list__item">MAIN</li>
        <li className="nav-list__item">PROFILE</li>
        <li className="nav-list__item">RECIPES</li>
      </ul>
      <button
        type="button"
        className="nav-close"
        onClick={closeBurger}
        aria-label="close menu"
      />
    </nav>
  );
};

export default NavComponent;
