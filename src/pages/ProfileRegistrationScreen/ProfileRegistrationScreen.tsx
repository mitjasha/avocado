/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import RegAgeScreen from "../../containers/RegAgeScreen/RegAgeScreen";
import RegTallScreen from "../../containers/RegTallScreen/RegTallScreen";
import RegWeightScreen from "../../containers/RegWeightScreen/RegWeightScreen";
import RegGoalScreen from "../../containers/RegGoalScreen/RegGoalScreen";
import RegTargetWeightScreen from "../../containers/RegTargetWeightScreen/RegTargetWeightScreen";
import RegBackButton from "../../components/Buttons/RegBackButton/RegBackButton";
import NextRegButton from "../../components/Buttons/NextRegButton/NextRegButton";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import {
  validationGender,
  validationName,
} from "./ProfileRegistrationScreen.const";
import { EGender, Profile } from "../../api/api.interface";
import profileController from "../../api/profile.controller";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import FormInput from "../../components/Inputs/FormInput/FormInput";
import ToolTip from "../../components/ToolTip/ToolTip";
import maleIcon from "../../assets/svg/male.svg";
import femaleIcon from "../../assets/svg/female.svg";
import "../../containers/RegFormScreen/RegFormScreen.scss";
import "../../containers/RegGenderScreen/RegGenderScreen.scss";
import "../../containers/RegAgeScreen/RegAgeScreen.scss";
import "./ProfileRegistrationScreen.scss";

const RegistrationScreen: React.FC = () => {
  const [processCount, setCounter] = useState<number>(1);
  const [gradientValue, setGradientValue] = useState<string>("");

  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<Profile>({ mode: "onChange" });

  const onSubmit = async (data: Profile) => {
    const profileID = JSON.parse(localStorage.getItem("profileID") as string);

    if (profileID) {
      const profile = await profileController.getProfileById(profileID);
      const id = { id: profileID };

      console.log(id);
      const requestData = Object.assign(profile, data);
      const result = await profileController.updateProfile(requestData);
      console.log(result);
    }

    if (processCount > 7) {
      navigate("/main");
    }

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
      {processCount >= 2 && (
        <div>
          <RegBackButton onClick={decrease} />
          <div className="process">{processCount}/ 7</div>
        </div>
      )}
      <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
        {processCount === 1 && (
          <div className="container registration-screen-container">
            <div className="full-name">
              <div className="full-name__first-name">
                <h2 className="input-title">First Name</h2>
                <div className="input-wrapper input-wrapper_username">
                  <FormInput
                    type="text"
                    placeholder="First Name"
                    register={register("firstName", { ...validationName })}
                  />
                  {errors?.firstName && (
                    <ToolTip text={validationName.message} />
                  )}
                </div>
              </div>
              <div className="full-name__last-name">
                <h2 className="input-title">Last Name</h2>
                <div className="input-wrapper input-wrapper_username">
                  <FormInput
                    type="text"
                    placeholder="Last Name"
                    register={register("lastName", { ...validationName })}
                  />
                  {errors?.lastName && (
                    <ToolTip text={validationName.message} />
                  )}
                </div>
              </div>
            </div>
            <div className="email-address">
              <h2 className="input-title">Email Address</h2>
              <div className="input-wrapper input-wrapper_email">
                <RegInput type="email" placeholder="Email Address" />
              </div>
            </div>
          </div>
        )}
        {processCount === 2 && (
          <div className="container questions-container">
            <div className="questions__gender">
              <h2 className="reg-title">
                What is your{" "}
                <span className="reg-title__highlight">gender</span>?
              </h2>
              <p className="data-info">
                We will use this data to give you a better diet type for you
              </p>
              <div className="gender-input">
                <input
                  type="radio"
                  id="male"
                  value={EGender.MALE}
                  className="gender-input__input"
                  {...register("gender", { ...validationGender })}
                />
                <label htmlFor="male" className="gender-input__label">
                  <img
                    src={maleIcon}
                    alt="male"
                    className="gender-input__icon"
                  />
                  Male
                </label>
                <input
                  type="radio"
                  id="female"
                  value={EGender.FEMALE}
                  className="gender-input__input"
                  {...register("gender", { ...validationGender })}
                />
                <label htmlFor="female" className="gender-input__label">
                  <img
                    src={femaleIcon}
                    alt="female"
                    className="gender-input__icon"
                  />
                  Female
                </label>
              </div>
            </div>
          </div>
        )}
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
