/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import RegBackButton from "../../components/Buttons/RegBackButton/RegBackButton";
import NextRegButton from "../../components/Buttons/NextRegButton/NextRegButton";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import {
  validationGender,
  validationName,
} from "./ProfileRegistrationScreen.const";
import { EGender, EGoal, Profile } from "../../api/api.interface";
import profileController from "../../api/profile.controller";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import FormInput from "../../components/Inputs/FormInput/FormInput";
import ToolTip from "../../components/ToolTip/ToolTip";
import TallInput from "../../components/Inputs/TallInput/TallInput";
import WeightInput from "../../components/Inputs/WeightInput/WeightInput";
import maleIcon from "../../assets/svg/male.svg";
import femaleIcon from "../../assets/svg/female.svg";
import loseIcon from "../../assets/svg/lose-weight.svg";
import maintainIcon from "../../assets/svg/maintain-weight.svg";
import gainIcon from "../../assets/svg/gain-weight.svg";
import "../../containers/RegFormScreen/RegFormScreen.scss";
import "../../containers/RegGenderScreen/RegGenderScreen.scss";
import "../../containers/RegAgeScreen/RegAgeScreen.scss";
import "../../containers/RegTallScreen/RegTallScreen.scss";
import "../../containers/RegWeightScreen/RegWeightScreen.scss";
import "../../containers/RegGoalScreen/RegGoalScreen.scss";
import "../../containers/RegTargetWeightScreen/RegTargetWeightScreen.scss";
import "../UserRegistrationScreen/UserRegistrationScreen.scss";

const RegistrationScreen: React.FC = () => {
  const [processCount, setCounter] = useState<number>(1);
  const [gradientValue, setGradientValue] = useState<string>("");

  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
    getValues,
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

    if (processCount >= 7) {
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

  const displayAge = () => {
    const ageInput = document.querySelector(".age-input") as HTMLInputElement;
    const today = new Date().getTime();
    const birth = new Date(ageInput.value).getTime();
    const age = new Date(today - birth).getUTCFullYear() - 1970;
    const ageDisplay = document.querySelector(".age-display") as HTMLElement;
    ageDisplay.textContent = String(age);
  };

  const todaysDate =
    new Date().getDate() < 10
      ? `0${new Date().getDate()}`
      : new Date().getDate();
  const todaysMonth =
    new Date().getMonth() < 10
      ? `0${new Date().getMonth()}`
      : new Date().getMonth();
  const todaysYear = new Date().getFullYear();
  const minAge = `${todaysYear - 18}-${todaysMonth}-${todaysDate}`;
  const maxAge = `${todaysYear - 100}-${todaysMonth}-${todaysDate}`;
  const birthField = register("birth", { required: true });

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
        {processCount === 3 && (
          <div className="container questions-container">
            <div className="questions__age">
              <h2 className="reg-title">
                Your <span className="reg-title__highlight">date of birth</span>
                ?
              </h2>
              <p className="data-info">
                We will use this data to give you a better diet type for you
              </p>
              <div className="age-display">Age</div>
              <input
                type="date"
                className="age-input"
                max={minAge}
                min={maxAge}
                required
                {...birthField}
                onChange={displayAge}
              />
            </div>
          </div>
        )}
        {processCount === 4 && (
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
              <div className="tall-input-wrapper">
                <TallInput register={register("height", { required: true })} />
              </div>
            </div>
          </div>
        )}
        {processCount === 5 && (
          <div className="container questions-container">
            <div className="questions__weight">
              <h2 className="reg-title">
                Your{" "}
                <span className="reg-title__highlight">current weight</span>?
              </h2>
              <p className="data-info">
                We will use this data to give you a better diet type for you
              </p>
              <div className="unit">kg</div>
              <div className="triangle" />
              <div className="weight-input-wrapper">
                <WeightInput
                  idName="weight"
                  register={register("weight", { required: true })}
                />
              </div>
            </div>
          </div>
        )}
        {processCount === 6 && (
          <div className="container questions-container">
            <div className="questions__goal">
              <h2 className="reg-title">
                Your is your <span className="reg-title__highlight">goal</span>?
              </h2>
              <p className="data-info">
                We will use this data to give you a better diet type for you
              </p>
              <div className="goal-input">
                <input
                  type="radio"
                  id="lose"
                  value={EGoal.LOSE}
                  className="goal-input__input"
                  {...register("goal", { required: true })}
                />
                <label htmlFor="lose" className="goal-input__label">
                  <img src={loseIcon} alt="lose" className="goal-input__icon" />
                  Lose weight
                </label>
                <input
                  type="radio"
                  id="maintain"
                  value={EGoal.MAINTAIN}
                  className="goal-input__input"
                  {...register("goal", { required: true })}
                />
                <label htmlFor="maintain" className="goal-input__label">
                  <img
                    src={maintainIcon}
                    alt="maintain"
                    className="goal-input__icon"
                  />
                  Maintain weight
                </label>
                <input
                  type="radio"
                  id="gain"
                  value={EGoal.GAIN}
                  className="goal-input__input"
                  {...register("goal", { required: true })}
                />
                <label htmlFor="gain" className="goal-input__label">
                  <img src={gainIcon} alt="gain" className="goal-input__icon" />
                  Gain weight
                </label>
              </div>
            </div>
          </div>
        )}
        {processCount === 7 && (
          <div className="container questions-container">
            <div className="questions__weight">
              <h2 className="reg-title">
                Your <span className="reg-title__highlight">target weight</span>
                ?
              </h2>
              <p className="data-info">
                We will use this data to give you a better diet type for you
              </p>
              <div className="unit">kg</div>
              <div className="triangle" />
              <div className="weight-wrapper">
                <div className="weight-wrapper__current">
                  {getValues("weight")}
                </div>
                <div className="weight-wrapper__arrow" />
                <div className="weight-wrapper__target">
                  <WeightInput
                    idName="target-weight"
                    register={register("targetWeight", { required: true })}
                  />
                </div>
              </div>
              <p className="start-phrase">Let&apos;s Start!</p>
            </div>
          </div>
        )}
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
