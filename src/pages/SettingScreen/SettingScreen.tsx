import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button/Button";
import "./SettingScreen.scss";

const SettingScreen = () => {
  const navigate = useNavigate();

  const pressExit = () => {
    localStorage.clear();
    navigate("/");
  };

  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light",
  );

  const setSwitcherClass = () => {
    if (theme === "light") {
      return "switch_theme";
    }
    return "switch_theme switch_active";
  };

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
                className={setSwitcherClass()}
                onClick={(event) => toggleTheme(event)}
              />
            </div>
          </div>

          <div className="setting__container__child">
            <span className="setting__container__span">Language</span>
            <select className="select-lang__container">
              <option value="en" defaultChecked>
                en
              </option>
              <option value="ru">ru</option>
            </select>
          </div>
          <div className="setting__container__child">
            <span className="setting__container__span">
              Want to leave an account?
            </span>
            <button className="leave-acc-btn" type="button" onClick={pressExit}>
              Yes
            </button>
          </div>
        </div>
        <div className="setting__screen__logo" />
        <div className="setting__container__child">
          <Button className="settings__save-btn" to="/profile">
            SAVE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingScreen;
