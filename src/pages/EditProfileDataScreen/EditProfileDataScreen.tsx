/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "./EditProfileDataScreen.scss";
import profileController from "../../api/profile.controller";
import { EGender, EGoal } from "../../api/api.interface";

const getAge = (birth: string) => {
  const userAge = Math.floor(
    (new Date().getTime() - new Date(birth).getTime()) /
      (24 * 3600 * 365.25 * 1000),
  );
  return String(userAge);
};

const EditProfileDataScreen: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [weight, setWeight] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [goal, setGoal] = useState<string>("");
  const [targetWeight, setTargetWeight] = useState<number>();
  const [userName, setUserName] = useState<string>("");

  const getProfileData = async () => {
    const profileID = JSON.parse(localStorage.getItem("profileID") as string);
    if (profileID) {
      const profile = await profileController.getProfile();
      setFirstName(profile[0].firstName);
      setLastName(profile[0].lastName);
      setGender(profile[0].gender);
      setBirth(profile[0].birth);
      setWeight(profile[0].weight);
      setHeight(profile[0].height);
      setGoal(profile[0].goal);
      setTargetWeight(profile[0].targetWeight);
      setUserName(profile[0].user.username);
    }
  };

  const updateProfileData = async (
    firstNameState: string,
    lastNameState: string,
    genderState: EGender,
    birthState: string,
    weightState: number,
    heightState: number,
    goalState: EGoal,
    targetWeightState: number,
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
                  placeholder={userName}
                  value={userName}
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
                  defaultValue={weight}
                  value={Number(weight).toFixed()}
                  onChange={(event) =>
                    setWeight(Number((event.target as HTMLInputElement).value))
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
                  defaultValue={targetWeight}
                  value={Number(targetWeight).toFixed()}
                  onChange={(event) =>
                    setTargetWeight(
                      Number((event.target as HTMLInputElement).value),
                    )
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
                  defaultValue={height}
                  value={Number(height).toFixed()}
                  onChange={(event) =>
                    setHeight(Number((event.target as HTMLInputElement).value))
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
            Number(weight),
            Number(height),
            // eslint-disable-next-line no-nested-ternary
            goal === "Lose weight"
              ? EGoal.LOSE
              : goal === "Gain weight"
              ? EGoal.GAIN
              : EGoal.MAINTAIN,
            Number(targetWeight),
          );
        }}
      >
        Save changes
      </ButtonTemplate>
    </div>
  );
};

export default EditProfileDataScreen;
