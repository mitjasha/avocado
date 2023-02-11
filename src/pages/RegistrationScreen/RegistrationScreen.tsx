import React from "react";
import RegFormScreen from "../../containers/RegFormScreen/RegFormScreen";
import RegGenderScreen from "../../containers/RegGenderScreen/RegGenderScreen";
import RegAgeScreen from "../../containers/RegAgeScreen/RegAgeScreen";
import RegTallScreen from "../../containers/RegTallScreen/RegTallScreen";
import RegWeightScreen from "../../containers/RegWeightScreen/RegWeightScreen";
import RegGoalScreen from "../../containers/RegGoalScreen/RegGoalScreen";
import RegTargetWeightScreen from "../../containers/RegTargetWeightScreen/RegTargetWeightScreen";
import "./RegistrationScreen.scss";

const RegistrationScreen: React.FC = () => {
  return (
    <div className="registration-screen">
      <RegFormScreen />
      <RegGenderScreen />
      <RegAgeScreen />
      <RegTallScreen />
      <RegWeightScreen />
      <RegGoalScreen />
      <RegTargetWeightScreen />
    </div>
  );
};
export default RegistrationScreen;
