import React from "react";
import { useTranslation } from "react-i18next";
import RegInput from "../Inputs/BaseInput/BaseInput";
import "./DailyEventEditData.scss";

export interface DailyEventData {
  type: string;
  data: string[][];
}

const DailyEventEditData: React.FC<DailyEventData> = ({ type, data }) => {
  const { t } = useTranslation();
  return (
    <ul className="container__info__ul">
      {data.map((item, index) => (
        <li className="container__info__li" key={item[index]}>
          <div className="container__info__text">
            <div style={{ display: "flex", gap: "5px" }}>
              <span className="info__name">{item[0]}</span>
              <div className="input__container">
                <RegInput
                  type="number"
                  placeholder={item[1]}
                  className="info__input"
                />
                <span>{type === "meal" ? t("g") : t("min")}</span>
              </div>
            </div>
            <span className="info__name">
              {item[2]} {t("main_kcal")}
            </span>
          </div>
          <span className="info__delete">{t("edit_event_delete")}</span>
        </li>
      ))}
    </ul>
  );
};

export default DailyEventEditData;
