import React from "react";
import activities from "../../assets/activities.json";
import ActivityWrapper from "../../components/ActivityWrapper/ActivityWrapper";
import ActivityPopUpProps from "../../components/ActivityPopUp/ActivityPopUp";
import "./ActivityScreen.scss";

export interface ActivityItemProps {
  name: string;
  nameEng: string;
  kcalPerMin: number;
  image: string;
}

const ActivityScreen: React.FC = () => {
  const openActivityPopUp = (item: ActivityItemProps) => {
    const popUp = document.querySelector(
      ".activity-popup",
    ) as HTMLButtonElement;
    popUp.style.opacity = "1";
    popUp.style.visibility = "visible";
    console.log(item.nameEng);
  };
  return (
    <div className="activity-screen">
      <div className="container">
        <h1 className="activity-screen__title">Activities</h1>
        <p className="activity-screen__subtitle">What did you do today?</p>
        <div className="activity-screen__wrapper">
          {activities.activities.map((item) => {
            return (
              <ActivityWrapper
                name={item.nameEng}
                image={item.image}
                handleClick={() => openActivityPopUp(item)}
                key={activities.activities.indexOf(item)}
              />
            );
          })}
        </div>
      </div>
      <ActivityPopUpProps name="jogging" />
    </div>
  );
};
export default ActivityScreen;
