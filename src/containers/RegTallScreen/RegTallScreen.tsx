import React from "react";
// import TallInput from "../../components/Inputs/TallInput/TallInput";
import "./RegTallScreen.scss";

const RegTallScreen: React.FC = () => {
  return (
    <div className="container questions-container">
      <div className="questions__tall">
        <h2 className="reg-title">
          How <span className="reg-title__highlight">tall</span> are you?
        </h2>
        <p className="data-info">
          We will use this data to give you a better diet type for you
        </p>
        <div className="unit">cm</div>
        <div className="triangle" />
        <div className="tall-input-wrapper">{/* <TallInput /> */}</div>
      </div>
    </div>
  );
};

export default RegTallScreen;
