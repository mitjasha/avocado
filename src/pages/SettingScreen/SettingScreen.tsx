import React from "react";
import { useTranslation } from "react-i18next";
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

  const { t } = useTranslation();

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
                className="switch_theme"
                onClick={(event) => pressSwitcher(event)}
              />
            </div>
          </div>
          <div className="setting__container__child">
            <span className="setting__container__span">
              {t("settings_sound")}
            </span>
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
            <span className="setting__container__span">
              {t("settings_lang")}
            </span>
            <select className="select-lang__container">
              <option value="ru">{t("settings_ru")}</option>
              <option value="en" defaultChecked>
                {t("settings_en")}
              </option>
            </select>
          </div>
        </div>
        <div className="setting__screen__logo" />
        <div className="setting__container__child">
          <ButtonTemplate onClick={pressExit}>
            {t("settings_exit")}
          </ButtonTemplate>
        </div>
      </div>
    </div>
  );
};

export default SettingScreen;
