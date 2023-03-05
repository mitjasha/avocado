import i18next from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button/Button";
import "./SettingScreen.scss";

const SettingScreen = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const pressExit = () => {
    localStorage.clear();
    navigate("/");
  };

  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light",
  );

  const [language, setLanguage] = useState<string>(
    localStorage.getItem("language") || "en",
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

  useEffect(() => {
    localStorage.setItem("language", language);
    i18next.changeLanguage(language);
  }, [language]);

  return (
    <div className="setting__screen">
      <div className="container">
        <h1 className="setting__screen__h1">{t("settings_title")}</h1>
        <div className="setting__container">
          <div className="setting__container__child">
            <span className="setting__container__span">
              {t("settings_theme")}
            </span>
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
            <span className="setting__container__span">
              {t("settings_lang")}
            </span>
            <select
              className="select-lang__container"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en" defaultChecked>
                {t("settings_en")}
              </option>
              <option value="ru">{t("settings_ru")}</option>
            </select>
          </div>
          <div className="setting__container__child">
            <span className="setting__container__span">{t("leave")}</span>
            <button className="leave-acc-btn" type="button" onClick={pressExit}>
              {t("yes")}
            </button>
          </div>
        </div>
        <div className="setting__screen__logo" />
        <div className="setting__container__child">
          <Button className="settings__save-btn" to="/profile">
            {t("save")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingScreen;
