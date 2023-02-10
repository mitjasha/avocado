import React from "react";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import NextRegButton from "../../components/Buttons/NextRegButton/NextRegButton";
import "./RegAgeScreen.scss";

const RegAgeScreen: React.FC = () => {
  const displayAge = () => {
    const ageInput = document.querySelector(".age-input") as HTMLInputElement;
    const today = new Date().getTime();
    const birth = new Date(ageInput.value).getTime();
    const age = new Date(today - birth).getUTCFullYear() - 1970;
    const ageDisplay = document.querySelector(".age-display") as HTMLElement;
    ageDisplay.textContent = String(age);
  };

  const todaysDate =
    new Date().getDate() < 10
      ? `0${new Date().getDate()}`
      : new Date().getDate();
  const todaysMonth =
    new Date().getMonth() < 10
      ? `0${new Date().getMonth()}`
      : new Date().getMonth();
  const todaysYear = new Date().getFullYear();
  const minAge = `${todaysYear - 18}-${todaysMonth}-${todaysDate}`;
  const maxAge = `${todaysYear - 100}-${todaysMonth}-${todaysDate}`;
  return (
    <div className="container questions-container">
      <div className="questions__age">
        <BackButton />
        <div className="process">2 / 6</div>
        <h2 className="reg-title">
          Your <span className="reg-title__highlight">date of birth</span>?
        </h2>
        <p className="data-info">
          We will use this data to give you a better diet type for you
        </p>
        <div className="age-display">Age</div>
        <input
          type="date"
          className="age-input"
          max={minAge}
          min={maxAge}
          required
          onChange={displayAge}
        />
        <NextRegButton degree={210} secDegree={90} disabled />
      </div>
    </div>
  );
};

export default RegAgeScreen;
