import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BasicModalComponent from "../../components/Modals/BasicModalComponent/BasicModalComponent";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import eventActivityController from "../../api/event-activity.controller";
import { ActivityResponse } from "../../api/api.interface";
import "./ActivityModal.scss";
import { eventTime } from "../../helpers/getEventTime";

interface ActivityModalProps {
  data: ActivityResponse;
}

const ActivityModal: React.FC<ActivityModalProps> = ({ data }) => {
  const { t } = useTranslation();

  const [kcalBurned, setKcalBurned] = useState<number>(
    Math.round(data.calories_per_min),
  );

  const calcKcalBurned = () => {
    const input = document.querySelector(
      ".activity-popup__input",
    ) as HTMLInputElement;
    setKcalBurned(Math.round(Number(input.value) * data.calories_per_min));
  };

  const addEventActivity = async () => {
    const modalInput = document.querySelector(
      ".activity-popup__input",
    ) as HTMLInputElement;
    if (modalInput.value.length > 0) {
      const endDate = new Date(eventTime(new Date().toString()));
      endDate.setMinutes(endDate.getMinutes() + Number(modalInput.value));

      await eventActivityController.addEvent(
        {
          startTime: eventTime(new Date().toString()),
          endTime: eventTime(endDate.toString()),
          description: "",
        },
        data,
      );
      const modal = document.querySelector(".activity-popup") as HTMLElement;
      modal.style.visibility = "hidden";
      modal.style.opacity = "0";
    }
  };

  const lang = localStorage.getItem("language");

  return (
    <BasicModalComponent
      title={lang === "en" ? data.name : data.nameRU}
      className="activity-popup"
    >
      <div className="activity-popup__wrapper">
        <div className="activity-popup__input-wrapper">
          <RegInput
            type="number"
            placeholder="1"
            className="activity-popup__input"
            onChange={calcKcalBurned}
          />
          {t("min")}
        </div>
        <div className="activity-popup__arrow" />
        <div className="activity-popup__kcal">
          {t("recipe_kal")} {t("main_burnt_min")}: {kcalBurned}
        </div>
      </div>
      <ButtonTemplate onClick={addEventActivity}>{t("save")}</ButtonTemplate>
    </BasicModalComponent>
  );
};
export default ActivityModal;
