/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useTranslation } from "react-i18next";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "./EditProfileDataScreen.scss";

interface UserData {
  username: string;
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  currentWeight: string;
  height: string;
  goal: string;
  targetWeight: string;
}

interface UserProps {
  data: UserData;
}

export const UserDataExample = {
  username: "alice23",
  firstName: "Alice",
  lastName: "Chang",
  age: "24",
  gender: "female",
  currentWeight: "65",
  height: "160",
  goal: "Lose weight",
  targetWeight: "54",
};

const EditProfileDataScreen: React.FC<UserProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="edit-profile__screen">
      <div className="container">
        <h1 className="edit-profile__h1">{t("edit_profile_header")}</h1>
        <div className="edit-profile__container">
          <div className="edit-profile__header">
            <div
              className="edit-profile__icon"
              style={{
                backgroundImage:
                  data.gender === "male"
                    ? "url(https://im.wampi.ru/2023/02/13/male.png)"
                    : "url(https://ie.wampi.ru/2023/02/13/female.png)",
                width: data.gender === "male" ? "104px" : "130px",
              }}
            />
            <div className="edit-profile__info">
              <label htmlFor="username">
                {t("edit_profile_username")}
                <RegInput
                  type="text"
                  placeholder={data.username}
                  className="edit-profile__input"
                  id="username"
                />
              </label>
              <label htmlFor="firstname">
                {t("edit_profile_first_name")}
                <RegInput
                  type="text"
                  placeholder={data.firstName}
                  className="edit-profile__input"
                  id="firstName"
                />
              </label>
              <label htmlFor="lastname">
                {t("edit_profile_last_name")}
                <RegInput
                  type="text"
                  placeholder={data.lastName}
                  className="edit-profile__input"
                  id="lastName"
                />
              </label>
            </div>
          </div>
          <div
            className="edit-profile__info"
            style={{ width: "360px", flexDirection: "row" }}
          >
            <div className="item__container">
              {t("edit_profile_gender")}
              <div className="item__container">
                <label
                  htmlFor="gender"
                  className="item__container"
                  style={{ width: "65px" }}
                >
                  <input
                    className="edit-profile__input__radio"
                    name="gender"
                    type="radio"
                    id="gender"
                    defaultChecked={data.gender === "male"}
                  />
                  {t("edit_profile_male")}
                </label>
              </div>
              <div className="item__container">
                <label htmlFor="gender" className="item__container">
                  <input
                    className="edit-profile__input__radio"
                    name="gender"
                    type="radio"
                    id="gender"
                    defaultChecked={data.gender === "female"}
                  />
                  {t("edit_profile_female")}
                </label>
              </div>
            </div>
            <label htmlFor="age" className="item__container">
              {t("edit_profile_age")}
              <RegInput
                type="number"
                placeholder={data.age}
                className="edit-profile__input"
                id="age"
                maxLength={3}
                minLength={1}
              />
            </label>
            <div className="item__container">
              <label htmlFor="goal">
                {t("edit_profile_goal")}
                <select className="select__container" id="goal">
                  <option defaultChecked={data.goal === "Lose weight"}>
                    {t("edit_profile_lose_weight")}
                  </option>
                  <option defaultChecked={data.goal === "Maintain weight"}>
                    {t("edit_profile_maintain_weight")}
                  </option>
                  <option defaultChecked={data.goal === "Gain weight"}>
                    {t("edit_profile_gain_weight")}
                  </option>
                </select>
              </label>
            </div>
            <label htmlFor="currentWeight" className="item__container">
              {t("edit_profile_current_weight")}
              <div>
                <RegInput
                  type="number"
                  placeholder={data.currentWeight}
                  className="edit-profile__input"
                  id="currentWeight"
                  maxLength={3}
                  minLength={2}
                />
                &nbsp;{t("kg")}
              </div>
            </label>
            <label htmlFor="targetWeight" className="item__container">
              {t("edit_profile_target_weight")}
              <div>
                <RegInput
                  type="number"
                  placeholder={data.targetWeight}
                  className="edit-profile__input"
                  id="targetWeight"
                  maxLength={3}
                  minLength={2}
                />
                &nbsp;{t("kg")}
              </div>
            </label>
            <label htmlFor="height" className="item__container">
              {t("edit_profile_height")}
              <div>
                <RegInput
                  type="number"
                  placeholder={data.height}
                  className="edit-profile__input"
                  id="height"
                  maxLength={3}
                  minLength={2}
                />
                &nbsp;{t("cm")}
              </div>
            </label>
          </div>
        </div>
      </div>
      <ButtonTemplate>{t("edit_profile_save")}</ButtonTemplate>
    </div>
  );
};

export default EditProfileDataScreen;
