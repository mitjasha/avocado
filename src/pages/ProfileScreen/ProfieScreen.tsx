import React, { useEffect, useState } from "react";
import female from "../../assets/png/female.png";
import male from "../../assets/png/male.png";
import ProfileNavButton from "../../components/Buttons/ProfileNavButton/ProfileNavButton";
import EditButton from "../../components/Buttons/EditButton/EditButton";
import "./ProfileScreen.scss";
import profileController from "../../api/profile.controller";

const ProfileScreen: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState("");
  const [goal, setGoal] = useState("");
  const [targetWeight, setTargetWeight] = useState(0);

  const getProfileData = async () => {
    const profile = await profileController.getProfile();
    setFirstName(profile[0].firstName);
    setGender(profile[0].gender);
    setBirth(profile[0].birth);
    setWeight(profile[0].weight);
    setHeight(String(profile[0].height));
    setGoal(profile[0].goal);
    setTargetWeight(profile[0].targetWeight);
  };

  const profileNavNames = ["progress", "recipes", "settings", "about"];

  const getAge = (birthUser: string) => {
    const userAge = Math.floor(
      (new Date().getTime() - new Date(birthUser).getTime()) /
        (24 * 3600 * 365.25 * 1000),
    );
    return String(userAge);
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div className="profile-screen">
      <h1 className="profile-screen__title">Your Profile</h1>
      <div className="user-data container">
        <EditButton className="user-data__edit" to="/edit-profile" />
        <div className="user-data__heading">
          <img
            src={gender === "MALE" ? male : female}
            alt="user avatar"
            className="user-data__heading__avatar"
          />
          <h2 className="user-data__heading__title">
            Hello,
            <br /> <span style={{ color: "#559c4f" }}>{firstName}</span>!
          </h2>
        </div>
        <div className="user-data__info">
          <div className="user-data__info__titles">
            <p>Gender:</p>
            <p>Age:</p>
            <p>Height:</p>
            <p>Weight:</p>
            <p>Goal:</p>
            <p>Target weight:</p>
          </div>
          <div className="user-data__info__answers">
            <p>{gender[0] + gender.slice(1).toLowerCase()}</p>
            <p>{getAge(birth)}</p>
            <p>{Number(height).toFixed()} cm</p>
            <p>{Number(weight).toFixed()} kg</p>
            <p>{goal}</p>
            <p>{Number(targetWeight).toFixed()} kg</p>
          </div>
        </div>
      </div>
      <div className="profile-menu container">
        <ul className="profile-menu__list">
          {profileNavNames.map((item) => {
            const title = item[0].toUpperCase() + item.slice(1);
            return (
              <ProfileNavButton
                key={item}
                to={`/${item}`}
                title={title}
                className={`list-item__icon_${item}`}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ProfileScreen;
