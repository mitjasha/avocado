import React from "react";
import female from "../../assets/png/female.png";
import male from "../../assets/png/male.png";
import "./ProfileScreen.scss";

const ProfileScreen: React.FC = () => {
  const userName = "Amanda";
  const userGender = "female";
  const userAvatar = userGender === "female" ? female : male;
  return (
    <div className="profile-screen">
      <div className="user-data">
        <div className="container">
          <div className="user-data__heading">
            <img
              src={userAvatar}
              alt="user avatar"
              className="user-data__heading__avatar"
            />
            <h1 className="user-data__heading__title">
              Hello,
              <br /> {userName}!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileScreen;
