/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import RegBackButton from "../../components/Buttons/RegBackButton/RegBackButton";
import NextRegButton from "../../components/Buttons/NextRegButton/NextRegButton";
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
  const [isDisabled, setDisabled] = useState(true);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
    getValues,
  } = useForm<Profile>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: EGender.NAN,
      weight: 0,
    },
  });

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
    "linear-gradient(141.4deg, transparent 50%, #e8f2e1 50%), linear-gradient(90deg, #e8f2e1 50%, transparent 50%)",
    "linear-gradient(192.8deg, transparent 50%, #e8f2e1 50%), linear-gradient(90deg, #e8f2e1 50%, transparent 50%)",
    "linear-gradient(244.2deg, transparent 50%, #e8f2e1 50%), linear-gradient(90deg, #e8f2e1 50%, transparent 50%)",
    "linear-gradient(141.4deg, transparent 50%, #559c4f 50%), linear-gradient(90deg, #e8f2e1 50%, transparent 50%)",
    "linear-gradient(192.8deg, transparent 50%, #559c4f 50%), linear-gradient(90deg, #e8f2e1 50%, transparent 50%)",
    "linear-gradient(244.2deg, transparent 50%, #559c4f 50%), linear-gradient(90deg, #e8f2e1 50%, transparent 50%)",
    "none",
  ];

  const increase = () => {
    if (processCount < 7) {
      setCounter(processCount + 1);
    }
    setDisabled(true);
  };

  const decrease = () => {
    if (processCount > 0) {
      setCounter(processCount - 1);
    }
    setDisabled(true);
  };

  const displayAge = () => {
    const ageInput = document.querySelector(".age-input") as HTMLInputElement;
    const today = new Date().getTime();
    const birth = new Date(ageInput.value).getTime();
    const age = new Date(today - birth).getUTCFullYear() - 1970;
    const ageDisplay = document.querySelector(".age-display") as HTMLElement;
    ageDisplay.textContent = String(age);
    setDisabled(false);
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
          <div className="process">{processCount} / 7</div>
        </div>
      )}
      <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
        {processCount === 1 && (
          <div className="container profile-reg-container">
            <div className="full-name">
              <div className="full-name__first-name">
                <h2 className="input-title">{t("edit_profile_first_name")}</h2>
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
                <h2 className="input-title">{t("edit_profile_last_name")}</h2>
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
              <h2 className="input-title">{t("registration_email")}</h2>
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
                {t("registration_gender_1")}{" "}
                <span className="reg-title__highlight">
                  {t("registration_gender_2")}
                </span>
                ?
              </h2>
              <p className="data-info">{t("registration_info_1")}</p>
              <div className="gender-input">
                <input
                  type="radio"
                  id="male"
                  value={EGender.MALE}
                  className="gender-input__input"
                  {...register("gender", { ...validationGender })}
                  onInput={() => setDisabled(false)}
                />
                <label htmlFor="male" className="gender-input__label">
                  <img
                    src={maleIcon}
                    alt="male"
                    className="gender-input__icon"
                  />
                  {t("registration_male")}
                </label>
                <input
                  type="radio"
                  id="female"
                  value={EGender.FEMALE}
                  className="gender-input__input"
                  {...register("gender", { ...validationGender })}
                  onInput={() => setDisabled(false)}
                />
                <label htmlFor="female" className="gender-input__label">
                  <img
                    src={femaleIcon}
                    alt="female"
                    className="gender-input__icon"
                  />
                  {t("registration_female")}
                </label>
              </div>
            </div>
          </div>
        )}
        {processCount === 3 && (
          <div className="container questions-container">
            <div className="questions__age">
              <h2 className="reg-title">
                {t("registration_birth_1")}{" "}
                <span className="reg-title__highlight">
                  {t("registration_birth_2")}
                </span>
                ?
              </h2>
              <p className="data-info">{t("registration_info_1")}</p>
              <div className="age-display">{t("edit_profile_age")}</div>
              <input
                type="date"
                className="age-input"
                max={minAge}
                min={maxAge}
                required
                {...birthField}
                onInput={displayAge}
              />
            </div>
          </div>
        )}
        {processCount === 4 && (
          <div className="container questions-container">
            <div className="questions__tall">
              <h2 className="reg-title">
                {t("registration_height_1")}{" "}
                <span className="reg-title__highlight">
                  {t("registration_height_2")}
                </span>{" "}
                {t("registration_height_3")}
              </h2>
              <p className="data-info">{t("registration_info_1")}</p>
              <div className="unit">{t("cm")}</div>
              <div className="triangle" />
              <div className="tall-input-wrapper">
                <TallInput
                  register={register("height", { required: true })}
                  onChange={() => setDisabled(false)}
                />
              </div>
            </div>
          </div>
        )}
        {processCount === 5 && (
          <div className="container questions-container">
            <div className="questions__weight">
              <h2 className="reg-title">
                {t("registration_birth_1")}{" "}
                <span className="reg-title__highlight">
                  {t("registration_current_weight")}
                </span>
                ?
              </h2>
              <p className="data-info">{t("registration_info_1")}</p>
              <div className="unit">{t("kg")}</div>
              <div className="triangle" />
              <div className="weight-input-wrapper">
                <WeightInput
                  idName="weight"
                  register={register("weight", { required: true })}
                  onChange={() => setDisabled(false)}
                />
              </div>
            </div>
          </div>
        )}
        {processCount === 6 && (
          <div className="container questions-container">
            <div className="questions__goal">
              <h2 className="reg-title">
                {t("registration_goal_1")}{" "}
                <span className="reg-title__highlight">
                  {t("registration_goal_2")}
                </span>
                ?
              </h2>
              <p className="data-info">{t("registration_info_1")}</p>
              <div className="goal-input">
                <input
                  type="radio"
                  id="lose"
                  value={EGoal.LOSE}
                  className="goal-input__input"
                  {...register("goal", { required: true })}
                  onInput={() => setDisabled(false)}
                />
                <label htmlFor="lose" className="goal-input__label">
                  <img src={loseIcon} alt="lose" className="goal-input__icon" />
                  {t("edit_profile_lose_weight")}
                </label>
                <input
                  type="radio"
                  id="maintain"
                  value={EGoal.MAINTAIN}
                  className="goal-input__input"
                  {...register("goal", { required: true })}
                  onInput={() => setDisabled(false)}
                />
                <label htmlFor="maintain" className="goal-input__label">
                  <img
                    src={maintainIcon}
                    alt="maintain"
                    className="goal-input__icon"
                  />
                  {t("edit_profile_maintain_weight")}
                </label>
                <input
                  type="radio"
                  id="gain"
                  value={EGoal.GAIN}
                  className="goal-input__input"
                  {...register("goal", { required: true })}
                  onInput={() => setDisabled(false)}
                />
                <label htmlFor="gain" className="goal-input__label">
                  <img src={gainIcon} alt="gain" className="goal-input__icon" />
                  {t("edit_profile_gain_weight")}
                </label>
              </div>
            </div>
          </div>
        )}
        {processCount === 7 && (
          <div className="container questions-container">
            <div className="questions__weight">
              <h2 className="reg-title">
                {t("registration_target_weight_1")}{" "}
                <span className="reg-title__highlight">
                  {t("registration_target_weight_2")}
                </span>
                ?
              </h2>
              <p className="data-info">{t("registration_info_1")}</p>
              <div className="unit">{t("kg")}</div>
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
                    onChange={() => setDisabled(false)}
                  />
                </div>
              </div>
              <p className="start-phrase">{t("registration_start")}</p>
            </div>
          </div>
        )}

        <div className="profile-form__btn_container">
          <NextRegButton
            gradient={gradientValue}
            onClick={increase}
            disabled={
              // eslint-disable-next-line no-nested-ternary
              processCount === 1
                ? !!errors.firstName ||
                  !!errors.lastName ||
                  getValues("firstName") === "" ||
                  getValues("lastName") === ""
                : processCount === 7
                ? false
                : isDisabled
            }
          />
        </div>
      </form>
    </div>
  );
};
export default RegistrationScreen;
