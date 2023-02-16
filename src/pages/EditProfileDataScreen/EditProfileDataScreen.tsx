import React from "react";
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
              <input
                className="edit-profile__input"
                style={{ marginTop: "10px" }}
                type="text"
                id="username"
                placeholder={data.username}
              />
            </label>
            <label htmlFor="firstname">
              First Name:
              <input
                className="edit-profile__input"
                style={{ marginTop: "10px" }}
                type="text"
                id="firstname"
                placeholder={data.firstName}
              />
            </label>
            <label htmlFor="lastname">
              Last Name:
              <input
                className="edit-profile__input"
                style={{ marginTop: "10px" }}
                type="text"
                id="lastname"
                placeholder={data.lastName}
              />
            </label>
          </div>
        </div>
        <div
          className="edit-profile__info"
          style={{ width: "360px", flexDirection: "row" }}
        >
          <div className="gender__container">
            Gender:
            <div className="radio__container">
              <label
                htmlFor="gender"
                className="gender__container"
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
            <div className="radio__container">
              <label htmlFor="gender" className="gender__container">
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
          <label htmlFor="age" className="age__container">
            Age:
            <input
              className="edit-profile__input"
              style={{ width: "50px", marginLeft: "10px" }}
              defaultValue={Number(data.age)}
              type="number"
              id="age"
              placeholder={data.age}
              maxLength={3}
              minLength={1}
            />
          </label>
          <div className="goal__container">
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
          <label htmlFor="currentWeight" className="body__container">
            Current weight:
            <div>
              <input
                type="number"
                style={{ width: "50px" }}
                className="edit-profile__input"
                placeholder={data.currentWeight}
                defaultValue={Number(data.currentWeight)}
                id="currentWeight"
              />
              kg
            </div>
          </label>
          <label htmlFor="targetWeight" className="body__container">
            Target weight:
            <div>
              <input
                type="number"
                style={{ width: "50px" }}
                className="edit-profile__input"
                placeholder={data.targetWeight}
                defaultValue={Number(data.targetWeight)}
                id="targetWeight"
              />
              kg
            </div>
          </label>
          <label htmlFor="height" className="body__container">
            Current height:
            <div>
              <input
                type="number"
                style={{ width: "50px" }}
                className="edit-profile__input"
                placeholder={data.height}
                defaultValue={Number(data.height)}
                id="height"
              />
              cm
            </div>
          </label>
        </div>
      </div>
      <ButtonTemplate>Save changes</ButtonTemplate>
    </div>
  );
};

export default EditProfileDataScreen;
