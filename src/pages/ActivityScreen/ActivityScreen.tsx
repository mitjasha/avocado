import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ActivityWrapper from "../../components/ActivityWrapper/ActivityWrapper";
import ActivityModal from "../../containers/ActivityModal/ActivityModal";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import "./ActivityScreen.scss";
import { ActivityResponse } from "../../api/api.interface";
import activitiesController from "../../api/activity.controller";

const ActivityScreen: React.FC = () => {
  const { t } = useTranslation();

  const [activities, setActivities] = useState<ActivityResponse[]>([]);
  const [activityData, setActivityData] = useState<ActivityResponse>({
    id: "",
    name: "",
    nameRU: "",
    calories_per_min: 0,
    image: "",
  });

  const lang = localStorage.getItem("language");

  const openActivityPopUp = (item: ActivityResponse) => {
    setActivityData(item);
    const popUp = document.querySelector(
      ".activity-popup",
    ) as HTMLButtonElement;
    popUp.style.opacity = "1";
    popUp.style.visibility = "visible";
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
          <BackButton to="/main" />
          <h1 className="activity-screen__title">{t("activities_title")}</h1>
        </div>
        <p className="activity-screen__subtitle">{t("activities_subtitle")}</p>
        <div className="activity-screen__wrapper">
          {activities.map((item) => {
            return (
              <ActivityWrapper
                name={lang === "ru" ? item.nameRU : item.name}
                image={item.image}
                handleClick={() => openActivityPopUp(item)}
                key={activities.indexOf(item)}
              />
            );
          })}
        </div>
      </div>
      <ActivityModal data={activityData} />
    </div>
  );
};
export default ActivityScreen;
