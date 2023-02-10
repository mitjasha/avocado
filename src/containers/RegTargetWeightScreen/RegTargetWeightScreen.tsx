import React from "react";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import NextRegButton from "../../components/Buttons/NextRegButton/NextRegButton";
import "./RegTargetWeightScreen.scss";

const RegTargetWeightScreen: React.FC = () => {
  return (
    <div className="container questions-container">
      <div className="questions__weight">
        <BackButton />
        <div className="process">6 / 6</div>
        <h2 className="reg-title">
          Your <span className="reg-title__highlight">target weight</span>?
        </h2>
        <p className="data-info">
          We will use this data to give you a better diet type for you
        </p>
        <div className="unit">kg</div>
        <div className="triangle" />
        <NextRegButton degree={180} secDegree={0} disabled />
      </div>
    </div>
  );
};

export default RegTargetWeightScreen;
