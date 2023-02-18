import React from "react";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import "./RegFormScreen.scss";

const RegFormScreen: React.FC = () => {
  return (
    <div className="container registration-screen-container">
      <div className="full-name">
        <div className="full-name__first-name">
          <h2 className="input-title">First Name</h2>
          <div className="input-wrapper input-wrapper_username">
            <RegInput type="text" placeholder="First Name" minLength={4} />
          </div>
        </div>
        <div className="full-name__last-name">
          <h2 className="input-title">Last Name</h2>
          <div className="input-wrapper input-wrapper_username">
            <RegInput type="text" placeholder="Last Name" minLength={4} />
          </div>
        </div>
      </div>
      <div className="email-address">
        <h2 className="input-title">Email Address</h2>
        <div className="input-wrapper input-wrapper_email">
          <RegInput type="email" placeholder="Email Address" minLength={4} />
        </div>
      </div>
    </div>
  );
};

export default RegFormScreen;
