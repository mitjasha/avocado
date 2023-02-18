import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import RegFormScreen from "../../containers/RegFormScreen/RegFormScreen";
import RegGenderScreen from "../../containers/RegGenderScreen/RegGenderScreen";
import RegAgeScreen from "../../containers/RegAgeScreen/RegAgeScreen";
import RegTallScreen from "../../containers/RegTallScreen/RegTallScreen";
import RegWeightScreen from "../../containers/RegWeightScreen/RegWeightScreen";
import RegGoalScreen from "../../containers/RegGoalScreen/RegGoalScreen";
import RegTargetWeightScreen from "../../containers/RegTargetWeightScreen/RegTargetWeightScreen";
import RegBackButton from "../../components/Buttons/RegBackButton/RegBackButton";
import NextRegButton from "../../components/Buttons/NextRegButton/NextRegButton";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "./ProfileRegistrationScreen.scss";
import { validationName } from "./ProfileRegistrationScreen.const.";
import { Profile } from "../../api/api.interface";
import profileController from "../../api/profile.controller";

const RegistrationScreen: React.FC = () => {
  const [processCount, setCounter] = useState<number>(1);
  const [gradientValue, setGradientValue] = useState<string>("");

  const navigate = useNavigate();

  const { handleSubmit, reset } = useForm<Profile>({ mode: "onChange" });

  const onSubmit = async (data: Profile) => {
    console.log(data);

    const result = await profileController.addProfile(data);
    console.log(result);

    navigate("/main");

    reset();
  };

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
      {processCount >= 1 && (
        <div>
          <RegBackButton onClick={decrease} />
          <div className="process">{processCount}/ 7</div>
        </div>
      )}
      <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
        {processCount === 1 && (
          <RegFormScreen validationName={validationName} />
        )}
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
          {processCount === 7 && (
            <ButtonTemplate type="submit">Submit</ButtonTemplate>
          )}
        </div>
      </form>
    </div>
  );
};
export default RegistrationScreen;
