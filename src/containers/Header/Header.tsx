import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const months = [
    t("header_month_1"),
    t("header_month_2"),
    t("header_month_3"),
    t("header_month_4"),
    t("header_month_5"),
    t("header_month_6"),
    t("header_month_7"),
    t("header_month_8"),
    t("header_month_9"),
    t("header_month_10"),
    t("header_month_11"),
    t("header_month_12"),
  ];

  const weekDays = [
    t("header_day_1"),
    t("header_day_2"),
    t("header_day_3"),
    t("header_day_4"),
    t("header_day_5"),
    t("header_day_6"),
    t("header_day_7"),
  ];

  const todaysDate =
    new Date().getDate() < 10
      ? `0${new Date().getDate()}`
      : new Date().getDate();
  const todaysMonth =
    new Date().getMonth() + 1 < 10
      ? `0${new Date().getMonth() + 1}`
      : new Date().getMonth() + 1;
  const todaysYear = new Date().getFullYear();
  const max = `${todaysYear}-${todaysMonth}-${todaysDate}`;

  const month = months[new Date().getMonth()];
  const date = new Date().getDate();
  const weekDay = weekDays[new Date().getDay()];

  const changeDate = () => {
    const dateInput = document.querySelector(
      ".header__date-input",
    ) as HTMLInputElement;
    const newValue = new Date(dateInput.value);
    const dataDisplay = document.querySelector(".header__date") as HTMLElement;
    dataDisplay.textContent = `${newValue.getDate()} ${
      months[newValue.getMonth()]
    }, ${weekDays[newValue.getDay()]}`;
  };

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header_desk">
          <LogoComponent className="header__logo" />
          <NavComponent />
        </div>
        <div className="header_mob">
          <input
            type="date"
            className="header__date-input"
            max={max}
            onChange={changeDate}
          />
          <div className="header__date">
            {date} {month}, {weekDay}
          </div>
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
