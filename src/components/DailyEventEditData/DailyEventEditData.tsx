/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unneeded-ternary */
import React from "react";
import RegInput from "../Inputs/BaseInput/BaseInput";
import {
  EventActivityResponse,
  EventMealResponse,
} from "../../api/api.interface";
import "./DailyEventEditData.scss";

export interface DailyEventData {
  type: string;
  dataMeal?: EventMealResponse[];
  dataActivity?: EventActivityResponse[];
}

export const getMinutes = (start: Date, end: Date) =>
  new Date(end).getMinutes() - new Date(start).getMinutes();

const DailyEventEditData: React.FC<DailyEventData> = ({
  type,
  dataMeal,
  dataActivity,
}) => {
  return (
    <ul className="container__info__ul">
      {type === "meal"
        ? dataMeal?.map((item) => (
            <li className="container__info__li" key={item.product.id}>
              <div className="container__info__text">
                <div style={{ display: "flex", gap: "5px" }}>
                  <span className="info__name">{item.product.name}</span>
                  <div className="input__container">
                    <RegInput
                      type="number"
                      placeholder={String(item.weight)}
                      className="info__input"
                    />
                    <span>g</span>
                  </div>
                </div>
                <span className="info__name">
                  {(item.weight / 100) * item.product.calories_100g} kcal
                </span>
              </div>
              <span className="info__delete">delete</span>
            </li>
          ))
        : dataActivity?.map((item) => (
            <li className="container__info__li" key={item.activity.id}>
              <div className="container__info__text">
                <div style={{ display: "flex", gap: "5px" }}>
                  <span className="info__name">{item.activity.name}</span>
                  <div className="input__container">
                    <RegInput
                      type="number"
                      placeholder={String(
                        getMinutes(item.startTime, item.endTime),
                      )}
                      className="info__input"
                    />
                    <span>min</span>
                  </div>
                </div>
                <span className="info__name">
                  {getMinutes(item.startTime, item.endTime) *
                    item.activity.calories_per_min}{" "}
                  min
                </span>
              </div>
              <span className="info__delete">delete</span>
            </li>
          ))}
    </ul>
  );
};

export default DailyEventEditData;
