import React from "react";
// import WeightInput from "../../components/Inputs/WeightInput/WeightInput";
import "./RegWeightScreen.scss";

const RegWeightScreen: React.FC = () => {
  return (
    <div className="container questions-container">
      <div className="questions__weight">
        <h2 className="reg-title">
          Your <span className="reg-title__highlight">current weight</span>?
        </h2>
        <p className="data-info">
          We will use this data to give you a better diet type for you
        </p>
        <div className="unit">kg</div>
        <div className="triangle" />
        <div className="weight-input-wrapper">
          {/* <WeightInput idName="weight" /> */}
        </div>
      </div>
    </div>
  );
};

export default RegWeightScreen;
