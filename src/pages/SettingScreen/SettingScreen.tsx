import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "./SettingScreen.scss";

const SettingScreen = () => {
  const navigate = useNavigate();

  const pressSwitcher = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    target.classList.toggle("switch_active");
  };

  const pressExit = () => {
    localStorage.clear();
    navigate("/");
  };

  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light",
  );

  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  }

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    target.classList.toggle("switch_active");
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="setting__screen">
      <div className="container">
        <h1 className="setting__screen__h1">Settings</h1>
        <div className="setting__container">
          <div className="setting__container__child">
            <span className="setting__container__span">Dark theme</span>
            <div className="switch__container">
              <button
                type="button"
                aria-label="theme switcher"
                className="switch_theme"
                onClick={(event) => toggleTheme(event)}
              />
            </div>
          </div>
          <div className="setting__container__child">
            <span className="setting__container__span">Sound</span>
            <div className="switch__container">
              <button
                type="button"
                aria-label="sound switcher"
                className="switch_sound"
                onClick={(event) => pressSwitcher(event)}
              />
            </div>
          </div>
          <div className="setting__container__child">
            <span className="setting__container__span">Language</span>
            <select className="select-lang__container">
              <option value="ru">ru</option>
              <option value="en" defaultChecked>
                en
              </option>
            </select>
          </div>
        </div>
        <div className="setting__screen__logo" />
        <div className="setting__container__child">
          <ButtonTemplate onClick={pressExit}>EXIT</ButtonTemplate>
        </div>
      </div>
    </div>
  );
};

export default SettingScreen;
