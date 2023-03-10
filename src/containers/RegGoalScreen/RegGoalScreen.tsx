/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import loseIcon from "../../assets/svg/lose-weight.svg";
import maintainIcon from "../../assets/svg/maintain-weight.svg";
import gainIcon from "../../assets/svg/gain-weight.svg";
import "./RegGoalScreen.scss";

const RegGoalScreen: React.FC = () => {
  return (
    <div className="container questions-container">
      <div className="questions__goal">
        <h2 className="reg-title">
          Your is your <span className="reg-title__highlight">goal</span>?
        </h2>
        <p className="data-info">
          We will use this data to give you a better diet type for you
        </p>
        <div className="goal-input">
          <input
            type="radio"
            id="lose"
            name="goal"
            className="goal-input__input"
          />
          <label htmlFor="lose" className="goal-input__label">
            <img src={loseIcon} alt="lose" className="goal-input__icon" />
            Lose weight
          </label>
          <input
            type="radio"
            id="maintain"
            name="goal"
            className="goal-input__input"
          />
          <label htmlFor="maintain" className="goal-input__label">
            <img
              src={maintainIcon}
              alt="maintain"
              className="goal-input__icon"
            />
            Maintain weight
          </label>
          <input
            type="radio"
            id="gain"
            name="goal"
            className="goal-input__input"
          />
          <label htmlFor="gain" className="goal-input__label">
            <img src={gainIcon} alt="gain" className="goal-input__icon" />
            Gain weight
          </label>
        </div>
      </div>
    </div>
  );
};

export default RegGoalScreen;
