import React from "react";
import "./SettingScreen.scss";

const SettingScreen = () => {
  return (
    <div className="setting__screen">
      <div className="container">
        <h1 className="setting__screen__h1">Settings</h1>
        <div className="setting__container">
          <div className="setting__container__child">
            <span className="setting__container__span">Dark theme</span>
            <div className="switch__container">
              <div className="switch switch_theme" />
            </div>
          </div>
          <div className="setting__container__child">
            <span className="setting__container__span">Sound</span>
            <div className="switch__container">
              <div className="switch switch_sound" />
            </div>
          </div>
          <div className="setting__container__child">
            <span className="setting__container__span">Language</span>
            <select className="select__container">
              <option value="ru">ru</option>
              <option value="en" defaultChecked>
                en
              </option>
            </select>
          </div>
        </div>
        <div className="setting__screen__logo" />
      </div>
    </div>
  );
};

export default SettingScreen;
