import React from "react";
import { Link } from "react-router-dom";
import female from "../../assets/png/female.png";
import male from "../../assets/png/male.png";
import EditButton from "../../components/Buttons/EditButton/EditButton";
import "./ProfileScreen.scss";

const ProfileScreen: React.FC = () => {
  const userName = "Amanda" as string;
  const userGender = "female" as string;
  const userAvatar = userGender === "female" ? female : male;
  const userAge = 25 as number;
  const userHeight = 167 as number;
  const userWeight = 67 as number;
  const userGoal = "lose weight" as string;
  const userTargetWeight = 63 as number;
  return (
    <div className="profile-screen">
      <h1 className="profile-screen__title">Your Profile</h1>
      <div className="user-data container">
        <EditButton className="user-data__edit" />
        <div className="user-data__heading">
          <img
            src={userAvatar}
            alt="user avatar"
            className="user-data__heading__avatar"
          />
          <h2 className="user-data__heading__title">
            Hello,
            <br /> <span style={{ color: "#559c4f" }}>{userName}</span>!
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
            <p>{userGender}</p>
            <p>{userAge}</p>
            <p>{userHeight} cm</p>
            <p>{userWeight} kg</p>
            <p>{userGoal}</p>
            <p>{userTargetWeight} kg</p>
          </div>
        </div>
      </div>
      <div className="profile-menu container">
        <ul className="profile-menu__list">
          <li className="list-item">
            <Link to="/progress" className="list-item__link">
              <div className="list-item__icon list-item__icon_progress" />
              <p className="list-item__name">Your Progress</p>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/recipes" className="list-item__link">
              <div className="list-item__icon list-item__icon_recipes" />
              <p className="list-item__name">Favorite Recipes</p>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/settings" className="list-item__link">
              <div className="list-item__icon list-item__icon_settings" />
              <p className="list-item__name">Settings</p>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/about" className="list-item__link">
              <div className="list-item__icon list-item__icon_about" />
              <p className="list-item__name">About</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ProfileScreen;
