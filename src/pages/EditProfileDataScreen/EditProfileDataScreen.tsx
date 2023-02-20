/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "./EditProfileDataScreen.scss";
import profileController from "../../api/profile.controller";
import { EGender, EGoal } from "../../api/api.interface";

// interface UserData {
//   username: string;
//   firstName: string;
//   lastName: string;
//   age: string;
//   gender: string;
//   currentWeight: string;
//   height: string;
//   goal: string;
//   targetWeight: string;
// }

// interface UserProps {
//   data: UserData;
// }

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

const getAge = (birth: string) => {
  const userAge = Math.floor(
    (new Date().getTime() - new Date(birth).getTime()) /
      (24 * 3600 * 365.25 * 1000),
  );
  return String(userAge);
};

const EditProfileDataScreen: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goal, setGoal] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  // const [userName, setUserName] = useState("");

  const getProfileData = async () => {
    const profileID = JSON.parse(localStorage.getItem("profileID") as string);
    if (profileID) {
      const profile = await profileController.getProfileById(profileID);
      setFirstName(profile.firstName);
      setLastName(profile.lastName);
      setGender(profile.gender);
      setBirth(profile.birth);
      setWeight(profile.weight);
      setHeight(String(profile.height));
      setGoal(profile.goal);
      setTargetWeight(profile.targetWeight);
      // setUserName(profile.user.username);

      console.log(profile);
    }
  };

  const updateProfileData = async (
    firstNameState: string,
    lastNameState: string,
    genderState: EGender,
    birthState: string,
    weightState: string,
    heightState: number,
    goalState: EGoal,
    targetWeightState: string,
  ) => {
    const profileID = JSON.parse(localStorage.getItem("profileID") as string);
    await profileController.updateProfile({
      firstName: firstNameState,
      lastName: lastNameState,
      gender: genderState,
      birth: birthState,
      weight: weightState,
      height: heightState,
      goal: goalState,
      targetWeight: targetWeightState,
      photo: "",
      id: profileID,
    });
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div className="edit-profile__screen">
      <div className="container">
        <h1 className="edit-profile__h1">Edit your data</h1>
        <div className="edit-profile__container">
          <div className="edit-profile__header">
            <div
              className="edit-profile__icon"
              style={{
                backgroundImage:
                  gender === "MALE"
                    ? "url(https://im.wampi.ru/2023/02/13/male.png)"
                    : "url(https://ie.wampi.ru/2023/02/13/female.png)",
                width: gender === "MALE" ? "104px" : "130px",
              }}
            />
            <div className="edit-profile__info">
              <label htmlFor="username">
                Username:
                <RegInput
                  type="text"
                  // placeholder={userName}
                  // value={userName}
                  disabled
                  className="edit-profile__input"
                  id="username"
                />
              </label>
              <label htmlFor="firstname">
                First Name:
                <RegInput
                  type="text"
                  placeholder={firstName}
                  value={firstName}
                  onChange={(event) =>
                    setFirstName((event.target as HTMLInputElement).value)
                  }
                  className="edit-profile__input"
                  id="firstName"
                />
              </label>
              <label htmlFor="lastname">
                Last Name:
                <RegInput
                  type="text"
                  placeholder={lastName}
                  value={lastName}
                  onChange={(event) =>
                    setLastName((event.target as HTMLInputElement).value)
                  }
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
                    onChange={() => setGender("MALE")}
                    id="gender"
                    // defaultChecked={gender === "MALE"}
                    checked={gender === "MALE"}
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
                    onChange={() => setGender("FEMALE")}
                    id="gender"
                    // defaultChecked={gender === "FEMALE"}
                    checked={gender === "FEMALE"}
                  />
                  Female
                </label>
              </div>
            </div>
            <label htmlFor="age" className="item__container">
              Age:
              <RegInput
                type="text"
                placeholder={getAge(birth)}
                value={getAge(birth)}
                // onChange={(event) =>
                //   setBirth((event.target as HTMLInputElement).value)
                // }
                disabled
                className="edit-profile__input"
                id="age"
              />
            </label>
            <label htmlFor="birth" className="item__container">
              Birth:
              <RegInput
                type="date"
                placeholder={birth.slice(0, 10)}
                value={birth.slice(0, 10)}
                onChange={(event) =>
                  setBirth((event.target as HTMLInputElement).value)
                }
                className="edit-profile__input"
                id="birth"
              />
            </label>
            <div className="item__container">
              <label htmlFor="goal">
                Goal:
                <select
                  className="select__container"
                  id="goal"
                  value={goal}
                  onChange={(event) =>
                    setGoal((event.target as HTMLSelectElement).value)
                  }
                >
                  <option defaultChecked={goal === "Lose weight"}>
                    Lose weight
                  </option>
                  <option defaultChecked={goal === "Maintain weight"}>
                    Maintain weight
                  </option>
                  <option defaultChecked={goal === "Gain weight"}>
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
                  placeholder={weight}
                  value={Number(weight).toFixed()}
                  onChange={(event) =>
                    setWeight((event.target as HTMLInputElement).value)
                  }
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
                  placeholder={targetWeight}
                  value={Number(targetWeight).toFixed()}
                  onChange={(event) =>
                    setTargetWeight((event.target as HTMLInputElement).value)
                  }
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
                  placeholder={height}
                  value={Number(height).toFixed()}
                  onChange={(event) =>
                    setHeight((event.target as HTMLInputElement).value)
                  }
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
      </div>
      <ButtonTemplate
        onClick={() => {
          updateProfileData(
            firstName,
            lastName,
            gender === "FEMALE" ? EGender.FEMALE : EGender.MALE,
            birth,
            weight,
            Number(height),
            // eslint-disable-next-line no-nested-ternary
            goal === "Lose weight"
              ? EGoal.LOSE
              : goal === "Gain weight"
              ? EGoal.GAIN
              : EGoal.MAINTAIN,
            targetWeight,
          );
        }}
      >
        Save changes
      </ButtonTemplate>
    </div>
  );
};

export default EditProfileDataScreen;
