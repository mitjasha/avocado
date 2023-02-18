import React from "react";
import RegFormUser from "../../containers/RegFormUser/RegFormUser";
import "./UserRegistrationScreen.scss";

const UserRegistrationScreen: React.FC = () => {
  return (
    <div className="registration-screen">
      <RegFormUser />
    </div>
  );
};
export default UserRegistrationScreen;
