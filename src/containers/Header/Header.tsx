import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LogoComponent from "../../components/LogoComponent/LogoComponent";
import NavComponent from "../../components/NavComponent/NavComponent";
import { useAppContext } from "../../context";
import "./Header.scss";

const Header: React.FC = () => {
  const appContext = useAppContext();

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
    t("header_day_7"),
    t("header_day_1"),
    t("header_day_2"),
    t("header_day_3"),
    t("header_day_4"),
    t("header_day_5"),
    t("header_day_6"),
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

  const [date, setDate] = useState<string>(
    localStorage.getItem("date") || new Date().toString(),
  );

  useEffect(() => {
    localStorage.setItem("date", date);
    appContext?.setCurrentDateState(date);
  }, [date]);

  const setDateDisplay = () => {
    const newDate = new Date(date);
    const month = months[newDate.getMonth()];
    const day = newDate.getDate();
    const weekDay = weekDays[newDate.getDay()];
    return `${day} ${month}, ${weekDay}`;
  };

  const changeDate = () => {
    const dateInput = document.querySelector(
      ".header__date-input",
    ) as HTMLInputElement;
    const newValue = new Date(dateInput.value);
    setDate(dateInput.value);
    localStorage.setItem("date", newValue.toString());
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
            value={date}
            onChange={changeDate}
          />
          <div className="header__date">{setDateDisplay()}</div>
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
