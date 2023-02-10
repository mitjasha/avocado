import React from "react";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import NextRegButton from "../../components/Buttons/NextRegButton/NextRegButton";
import WeightInput from "../../components/WeightInput/WeightInput";
import "./RegWeightScreen.scss";

const RegWeightScreen: React.FC = () => {
  return (
    <div className="container questions-container">
      <div className="questions__weight">
        <BackButton />
        <div className="process">4 / 6</div>
        <h2 className="reg-title">
          Your <span className="reg-title__highlight">current weight</span>?
        </h2>
        <p className="data-info">
          We will use this data to give you a better diet type for you
        </p>
        <div className="unit">kg</div>
        <div className="triangle" />
        <div className="weight-input-wrapper">
          <WeightInput />
        </div>
        <NextRegButton degree={270} secDegree={90} disabled />
      </div>
    </div>
  );
};

export default RegWeightScreen;
