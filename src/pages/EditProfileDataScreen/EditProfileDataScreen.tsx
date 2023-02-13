import React from "react";
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

const EditProfileDataScreen: React.FC<UserProps> = ({ data }) => {
  return (
    <div className="container edit-profile__container">
      <h1 className="edit-profile__h1">Edit your data</h1>
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
              type="text"
              id="username"
              placeholder={data.username}
            />
          </label>
          <label htmlFor="firstname">
            First Name:
            <input
              className="edit-profile__input"
              type="text"
              id="firstname"
              placeholder={data.firstName}
            />
          </label>
          <label htmlFor="lastname">
            Last Name:
            <input
              className="edit-profile__input"
              type="text"
              id="lastname"
              placeholder={data.lastName}
            />
          </label>
        </div>
      </div>
      <div
        className="edit-profile__info"
        style={{ width: "100%", flexDirection: "row" }}
      >
        <div className="gender__container">
          Gender:
          <div className="radio__container">
            <label htmlFor="gender" className="gender__container">
              <span className="custom-radio" />
              Male
              <input
                className="edit-profile__input__radio"
                name="gender"
                type="radio"
                id="gender"
                defaultChecked={data.gender === "male"}
              />
            </label>
          </div>
          <div className="radio__container">
            <label htmlFor="gender" className="gender__container">
              <span className="custom-radio" />
              Female
              <input
                className="edit-profile__input__radio"
                name="gender"
                type="radio"
                id="gender"
                defaultChecked={data.gender === "female"}
              />
            </label>
          </div>
        </div>
        <label htmlFor="age" className="age__container">
          Age:
          <input
            className="edit-profile__input"
            style={{ width: "20px" }}
            defaultValue={Number(data.age)}
            type="number"
            id="age"
            placeholder={data.age}
            maxLength={3}
            minLength={1}
          />
        </label>
        <div className="goal__container">
          Goal:
          <select className="select__container">
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
        </div>
        <label htmlFor="currentWeight" className="body__container">
          Current weight:
          <input
            type="number"
            style={{ width: "50px" }}
            className="edit-profile__input"
            placeholder={data.currentWeight}
            defaultValue={Number(data.currentWeight)}
            id="currentWeight"
          />
        </label>
        <label htmlFor="targetWeight" className="body__container">
          Target weight:
          <input
            type="number"
            style={{ width: "50px" }}
            className="edit-profile__input"
            placeholder={data.targetWeight}
            defaultValue={Number(data.targetWeight)}
            id="targetWeight"
          />
        </label>
        <label htmlFor="height" className="body__container">
          Height:
          <input
            type="number"
            style={{ width: "50px" }}
            className="edit-profile__input"
            placeholder={data.height}
            defaultValue={Number(data.height)}
            id="height"
          />
        </label>
      </div>
      <div className="accept__button">Save changes</div>
    </div>
  );
};

export default EditProfileDataScreen;
