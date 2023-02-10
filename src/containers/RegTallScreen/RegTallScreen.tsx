import React from "react";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import NextRegButton from "../../components/Buttons/NextRegButton/NextRegButton";
import TallInput from "../../components/TallInput/TallInput";
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
        <NextRegButton degree={270} secDegree={90} disabled />
      </div>
    </div>
  );
};

export default RegTallScreen;
