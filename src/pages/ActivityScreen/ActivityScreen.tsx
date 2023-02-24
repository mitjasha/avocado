import React, { useEffect, useState } from "react";
import ActivityWrapper from "../../components/ActivityWrapper/ActivityWrapper";
import ActivityModal from "../../containers/ActivityModal/ActivityModal";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import "./ActivityScreen.scss";
import { ActivityResponse } from "../../api/api.interface";
import activitiesController from "../../api/activity.controller";

const ActivityScreen: React.FC = () => {
  const [activities, setActivities] = useState<ActivityResponse[]>([]);
  const [activityData, setActivityData] = useState<ActivityResponse>({
    id: "",
    name: "",
    calories_per_min: 0,
    image: "",
  });

  const openActivityPopUp = (item: ActivityResponse) => {
    const popUp = document.querySelector(
      ".activity-popup",
    ) as HTMLButtonElement;
    popUp.style.opacity = "1";
    popUp.style.visibility = "visible";
    setActivityData(item);
  };

  const getAllActivities = async () => {
    const result = await activitiesController.getAllActivity();
    if (result) {
      setActivities(result);
    }
  };

  useEffect(() => {
    getAllActivities();
  }, []);

  return (
    <div className="activity-screen">
      <div className="container">
        <div className="activity-screen__title-wrapper">
          <BackButton />
          <h1 className="activity-screen__title">Activities</h1>
        </div>
        <p className="activity-screen__subtitle">What did you do today?</p>
        <div className="activity-screen__wrapper">
          {activities.map((item) => {
            return (
              <ActivityWrapper
                name={item.name}
                image={item.image}
                handleClick={() => openActivityPopUp(item)}
                key={activities.indexOf(item)}
              />
            );
          })}
        </div>
      </div>
      <ActivityModal
        name={activityData.name}
        kcalPerMin={activityData.calories_per_min}
      />
    </div>
  );
};
export default ActivityScreen;
