import React from "react";
import RegInput from "../../components/RegInput/RegInput";
import "./RegistrationScreen.scss";

const RegistrationScreen: React.FC = () => {
  return (
    <div className="registration-screen">
      <div className="container">
        <RegInput type="text" placeholder="Username" />
      </div>
    </div>
  );
};
export default RegistrationScreen;
