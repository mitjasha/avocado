import React, { useEffect, useState } from "react";
import RegFormScreen from "../../containers/RegFormScreen/RegFormScreen";
import RegGenderScreen from "../../containers/RegGenderScreen/RegGenderScreen";
import RegAgeScreen from "../../containers/RegAgeScreen/RegAgeScreen";
import RegTallScreen from "../../containers/RegTallScreen/RegTallScreen";
import RegWeightScreen from "../../containers/RegWeightScreen/RegWeightScreen";
import RegGoalScreen from "../../containers/RegGoalScreen/RegGoalScreen";
import RegTargetWeightScreen from "../../containers/RegTargetWeightScreen/RegTargetWeightScreen";
import "./RegistrationScreen.scss";
import RegFormUser from "../../containers/RegFormUser/RegFormUser";
import RegBackButton from "../../components/Buttons/RegBackButton/RegBackButton";
import NextRegButton from "../../components/Buttons/NextRegButton/NextRegButton";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";

const RegistrationScreen: React.FC = () => {
  const [processCount, setCounter] = useState<number>(0);
  const [gradientValue, setGradientValue] = useState<string>("");

  const gradients = [
    "",
    "linear-gradient(150deg, transparent 50%, #e8f2e1 50%), linear-gradient(90deg, #e8f2e1 50%, transparent 50%)",
    "linear-gradient(210deg, transparent 50%, #e8f2e1 50%), linear-gradient(90deg, #e8f2e1 50%, transparent 50%)",
    "linear-gradient(270deg, transparent 50%, #e8f2e1 50%), linear-gradient(90deg, #e8f2e1 50%, transparent 50%)",
    "linear-gradient(150deg, transparent 50%, #559c4f 50%), linear-gradient(90deg, #e8f2e1 50%, transparent 50%)",
    "linear-gradient(210deg, transparent 50%, #559c4f 50%), linear-gradient(90deg, #e8f2e1 50%, transparent 50%)",
    "none",
  ];

  const increase = () => {
    setCounter(processCount + 1);
    console.log(processCount);
  };

  const decrease = () => {
    if (processCount > 0) {
      setCounter(processCount - 1);
    }
  };

  useEffect(() => {
    setGradientValue(gradients[processCount]);
  }, [processCount]);

  return (
    <div className="registration-screen">
      {processCount === 0 && <RegFormUser onClick={increase} />}
      {processCount >= 1 && (
        <div>
          <RegBackButton onClick={decrease} />
          <div className="process">{processCount}/ 7</div>
        </div>
      )}
      <form className="profile-form">
        {processCount === 1 && <RegFormScreen />}
        {processCount === 2 && <RegGenderScreen />}
        {processCount === 3 && <RegAgeScreen />}
        {processCount === 4 && <RegTallScreen />}
        {processCount === 5 && <RegWeightScreen />}
        {processCount === 6 && <RegGoalScreen />}
        {processCount === 7 && <RegTargetWeightScreen />}
        <div className="profile-form__btn_container">
          {processCount >= 1 && processCount < 7 && (
            <NextRegButton gradient={gradientValue} onClick={increase} />
          )}
          {processCount === 7 && <ButtonTemplate>Submit</ButtonTemplate>}
        </div>
      </form>
    </div>
  );
};
export default RegistrationScreen;
