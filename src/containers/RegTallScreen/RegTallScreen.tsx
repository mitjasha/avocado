import React from "react";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import NextRegButton from "../../components/Buttons/NextRegButton/NextRegButton";
import TallInput from "../../components/Inputs/TallInput/TallInput";
import "./RegTallScreen.scss";

const RegTallScreen: React.FC = () => {
  return (
    <div className="container questions-container">
      <div className="questions__tall">
        <BackButton />
        <div className="process">3 / 6</div>
        <h2 className="reg-title">
          How <span className="reg-title__highlight">tall</span> are you?
        </h2>
        <p className="data-info">
          We will use this data to give you a better diet type for you
        </p>
        <div className="unit">cm</div>
        <div className="triangle" />
        <div className="tall-input-wrapper">
          <TallInput />
        </div>
        <NextRegButton
          gradient="linear-gradient(270deg, transparent 50%, #e8f2e1 50%), linear-gradient(90deg, #e8f2e1 50%, transparent 50%)"
          disabled
        />
      </div>
    </div>
  );
};

export default RegTallScreen;
