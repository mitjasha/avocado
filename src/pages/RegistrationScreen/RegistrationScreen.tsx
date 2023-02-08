import React from "react";
import RegInput from "../../components/RegInput/RegInput";
import "./RegistrationScreen.scss";

const RegistrationScreen: React.FC = () => {
  return (
    <div className="registration-screen">
      <div className="container registration-screen-container">
        <div className="reg-input-wrapper reg-input-wrapper_username">
          <RegInput type="text" placeholder="Username" />
        </div>
        <div className="first-last-name">
          <div className="first-name-input">
            <h2 className="input-title">First Name</h2>
            <div className="reg-input-wrapper reg-input-wrapper_username">
              <RegInput type="text" placeholder="First Name" />
            </div>
          </div>
          <div className="last-name-input">
            <h2 className="input-title">Last Name</h2>
            <div className="reg-input-wrapper reg-input-wrapper_username">
              <RegInput type="text" placeholder="Last Name" />
            </div>
          </div>
        </div>
        <div className="email-address-input">
          <h2 className="input-title">Email Address</h2>
          <div className="reg-input-wrapper reg-input-wrapper_email">
            <RegInput type="email" placeholder="Email Address" />
          </div>
        </div>
        <div className="password-input">
          <h2 className="input-title">Password</h2>
          <div className="reg-input-wrapper reg-input-wrapper_password">
            <RegInput type="password" placeholder="Password" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistrationScreen;
