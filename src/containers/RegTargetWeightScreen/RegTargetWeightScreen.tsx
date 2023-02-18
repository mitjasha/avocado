import React from "react";
import WeightInput from "../../components/WeightInput/WeightInput";
import "./RegTargetWeightScreen.scss";

const RegTargetWeightScreen: React.FC = () => {
  const userCurrentWeight = 67;
  return (
    <div className="container questions-container">
      <div className="questions__weight">
        <h2 className="reg-title">
          Your <span className="reg-title__highlight">target weight</span>?
        </h2>
        <p className="data-info">
          We will use this data to give you a better diet type for you
        </p>
        <div className="unit">kg</div>
        <div className="triangle" />
        <div className="weight-wrapper">
          <div className="weight-wrapper__current">{userCurrentWeight}</div>
          <div className="weight-wrapper__arrow" />
          <div className="weight-wrapper__target">
            <WeightInput idName="target-weight" name="target-weight" />
          </div>
        </div>
        <p className="start-phrase">Let&apos;s Start!</p>
      </div>
    </div>
  );
};

export default RegTargetWeightScreen;
