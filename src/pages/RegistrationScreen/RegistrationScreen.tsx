import React, { useState } from "react";
import RegFormScreen from "../../containers/RegFormScreen/RegFormScreen";
import RegGenderScreen from "../../containers/RegGenderScreen/RegGenderScreen";
import RegAgeScreen from "../../containers/RegAgeScreen/RegAgeScreen";
import RegTallScreen from "../../containers/RegTallScreen/RegTallScreen";
import RegWeightScreen from "../../containers/RegWeightScreen/RegWeightScreen";
import RegGoalScreen from "../../containers/RegGoalScreen/RegGoalScreen";
import RegTargetWeightScreen from "../../containers/RegTargetWeightScreen/RegTargetWeightScreen";
import "./RegistrationScreen.scss";
// import NextRegButton from "../../components/Buttons/NextRegButton/NextRegButton";
import RegFormUser from "../../containers/RegFormUser/RegFormUser";
import RegBackButton from "../../components/Buttons/RegBackButton/RegBackButton";
import NextRegButton from "../../components/Buttons/NextRegButton/NextRegButton";

const RegistrationScreen: React.FC = () => {
  const [processCount, setCounter] = useState<number>(0);

  const increase = () => {
    setCounter(processCount + 1);
    console.log(processCount);
  };
  const decrease = () => {
    if (processCount > 0) {
      setCounter(processCount - 1);
    }
  };

  return (
    <div className="registration-screen">
      {processCount === 0 && <RegFormUser onClick={increase} />}
      {processCount >= 1 && (
        <div>
          <RegBackButton onClick={decrease} />
          <div className="process">{processCount}/ 7</div>
        </div>
      )}
      {processCount === 1 && <RegFormScreen />}
      {processCount === 2 && <RegGenderScreen />}
      {processCount === 3 && <RegAgeScreen />}
      {processCount === 4 && <RegTallScreen />}
      {processCount === 5 && <RegWeightScreen />}
      {processCount === 6 && <RegGoalScreen />}
      {processCount === 7 && <RegTargetWeightScreen />}

      {processCount >= 1 && processCount < 7 && (
        <NextRegButton
          gradient={`linear-gradient(${
            360 - 360 / processCount
          }deg, transparent 50%, #559c4f 50%)`}
          onClick={increase}
        />
      )}
    </div>
  );
};
export default RegistrationScreen;
