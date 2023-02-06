import React from "react";
import "./SettingScreen.scss";

const SettingScreen = () => {
  return (
    <div className="setting__screen">
      <h1 className="setting__screen__h1">Settings</h1>
      <div className="setting__container">
        <div className="setting__container__child">
          <span className="setting__container__span">Dark theme</span>
          <div className="setting__button">
            <label htmlFor="switch-flat">
              <input
                id="switch-flat"
                className="setting__button__input"
                type="checkbox"
              />
            </label>
          </div>
        </div>
        <div className="screen__container__child">
          <span>Sound</span>
          <div className="switch__container">
            <label htmlFor="switch-flat">
              <input
                id="switch-flat"
                className="switch switch--flat"
                type="checkbox"
              />
            </label>
          </div>
        </div>
        <div className="screen__container__child">
          <span>Language</span>
          <select id="selectID">
            <option value="ru" defaultChecked>
              ru
            </option>
            <option value="en">en</option>
          </select>
        </div>
      </div>
      <div className="setting__screen__logo" />
    </div>
  );
};

export default SettingScreen;
