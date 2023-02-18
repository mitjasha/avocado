/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import maleIcon from "../../assets/svg/male.svg";
import femaleIcon from "../../assets/svg/female.svg";
import "./RegGenderScreen.scss";

const RegGenderScreen: React.FC = () => {
  return (
    <div className="container questions-container">
      <div className="questions__gender">
        <h2 className="reg-title">
          What is your <span className="reg-title__highlight">gender</span>?
        </h2>
        <p className="data-info">
          We will use this data to give you a better diet type for you
        </p>
        <div className="gender-input">
          <input
            type="radio"
            id="male"
            name="gender"
            className="gender-input__input"
          />
          <label htmlFor="male" className="gender-input__label">
            <img src={maleIcon} alt="male" className="gender-input__icon" />
            Male
          </label>
          <input
            type="radio"
            id="female"
            name="gender"
            className="gender-input__input"
          />
          <label htmlFor="female" className="gender-input__label">
            <img src={femaleIcon} alt="female" className="gender-input__icon" />
            Female
          </label>
        </div>
      </div>
    </div>
  );
};

export default RegGenderScreen;
