import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./NavComponent.scss";

const NavComponent: React.FC = () => {
  const closeBurger = () => {
    const nav = document.querySelector(".nav-list") as HTMLElement;
    nav.classList.remove("nav-active");
    const burgerCloseBtn = document.querySelector(".nav-close") as HTMLElement;
    burgerCloseBtn.style.display = "none";
  };

  const { t } = useTranslation();

  const menuItems = {
    main: t("nav_menu_1"),
    profile: t("nav_menu_2"),
    progress: t("nav_menu_3"),
    recipes: t("nav_menu_4"),
    about: t("nav_menu_5"),
  };

  const menuItemCreate = (text: string, index: number) => {
    return (
      <li className="nav-list__item" key={text}>
        <Link
          className="nav-list__link"
          to={text}
          key={text + index}
          onClick={closeBurger}
        >
          {Object.values(menuItems)[index]}
        </Link>
      </li>
    );
  };

  return (
    <nav>
      <ul className="nav-list">
        {Object.keys(menuItems).map((menuItem, index) =>
          menuItemCreate(menuItem, index),
        )}
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
