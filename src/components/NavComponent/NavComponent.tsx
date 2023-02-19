import React from "react";
import { Link } from "react-router-dom";
import "./NavComponent.scss";

const NavComponent: React.FC = () => {
  const closeBurger = () => {
    const nav = document.querySelector(".nav-list") as HTMLElement;
    nav.classList.remove("nav-active");
    const burgerCloseBtn = document.querySelector(".nav-close") as HTMLElement;
    burgerCloseBtn.style.display = "none";
  };

  const menuItems = ["main", "profile", "progress", "recipes", "about"];

  const menuItemCreate = (text: string, index: number) => {
    return (
      <li className="nav-list__item" key={text}>
        <Link
          className="nav-list__link"
          to={text}
          key={text + index}
          onClick={closeBurger}
        >
          {text}
        </Link>
      </li>
    );
  };

  return (
    <nav>
      <ul className="nav-list">
        {menuItems.map((menuItem, index) => menuItemCreate(menuItem, index))}
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
