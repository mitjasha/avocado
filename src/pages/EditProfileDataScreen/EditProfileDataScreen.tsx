/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import RegInput from "../../components/RegInput/RegInput";
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
  return (
    <div className="container edit-profile__screen">
      <h1 className="edit-profile__h1">Edit your data</h1>
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
              Username:
              <RegInput
                type="text"
                placeholder={data.username}
                className="edit-profile__input"
                id="username"
              />
            </label>
            <label htmlFor="firstname">
              First Name:
              <RegInput
                type="text"
                placeholder={data.firstName}
                className="edit-profile__input"
                id="firstName"
              />
            </label>
            <label htmlFor="lastname">
              Last Name:
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
            Gender:
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
                Male
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
                Female
              </label>
            </div>
          </div>
          <label htmlFor="age" className="item__container">
            Age:
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
              Goal:
              <select className="select__container" id="goal">
                <option defaultChecked={data.goal === "Lose weight"}>
                  Lose weight
                </option>
                <option defaultChecked={data.goal === "Maintain weight"}>
                  Maintain weight
                </option>
                <option defaultChecked={data.goal === "Gain weight"}>
                  Gain weight
                </option>
              </select>
            </label>
          </div>
          <label htmlFor="currentWeight" className="item__container">
            Current weight:
            <div>
              <RegInput
                type="number"
                placeholder={data.currentWeight}
                className="edit-profile__input"
                id="currentWeight"
                maxLength={3}
                minLength={2}
              />
              &nbsp;kg
            </div>
          </label>
          <label htmlFor="targetWeight" className="item__container">
            Target weight:
            <div>
              <RegInput
                type="number"
                placeholder={data.targetWeight}
                className="edit-profile__input"
                id="targetWeight"
                maxLength={3}
                minLength={2}
              />
              &nbsp;kg
            </div>
          </label>
          <label htmlFor="height" className="item__container">
            Height:
            <div>
              <RegInput
                type="number"
                placeholder={data.height}
                className="edit-profile__input"
                id="height"
                maxLength={3}
                minLength={2}
              />
              &nbsp;cm
            </div>
          </label>
        </div>
      </div>

      <div className="accept__button">Save changes</div>
    </div>
  );
};

export default EditProfileDataScreen;
