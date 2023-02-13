import React from "react";
import ActivityWrapper from "../../components/ActivityWrapper/ActivityWrapper";
import activities from "../../assets/activities.json";
import "./ActivityScreen.scss";

const ActivityScreen: React.FC = () => {
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
                key={activities.activities.indexOf(item)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ActivityScreen;
