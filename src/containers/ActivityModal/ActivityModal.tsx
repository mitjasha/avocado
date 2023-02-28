import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BasicModalComponent from "../../components/Modals/BasicModalComponent/BasicModalComponent";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import eventActivityController from "../../api/event-activity.controller";
import { ActivityResponse } from "../../api/api.interface";
import "./ActivityModal.scss";

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

  const correctData = (date: number) => {
    return date > 9 ? `${date}` : `0${date}`;
  };

  const date = `${new Date().getFullYear()}-${correctData(
    new Date().getMonth() + 1,
  )}-${correctData(new Date().getDate())} ${correctData(
    new Date().getHours(),
  )}:${correctData(new Date().getMinutes())}`;

  const addEventActivity = async () => {
    const modalInput = document.querySelector(
      ".activity-popup__input",
    ) as HTMLInputElement;
    if (modalInput.value.length > 0) {
      const endMin = new Date();
      endMin.setMinutes(endMin.getMinutes() + Number(modalInput.value));
      const endDate = `${endMin.getFullYear()}-${correctData(
        endMin.getMonth() + 1,
      )}-${correctData(endMin.getDate())} ${correctData(
        endMin.getHours(),
      )}:${correctData(endMin.getMinutes())}`;
      await eventActivityController.addEvent(
        {
          startTime: date,
          endTime: endDate,
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
