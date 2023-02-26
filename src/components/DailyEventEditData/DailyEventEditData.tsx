/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unneeded-ternary */
import React, { useEffect, useState } from "react";
import {
  EventActivityResponse,
  EventMealResponse,
} from "../../api/api.interface";
import "./DailyEventEditData.scss";
import eventMealController from "../../api/event-meal.controller";
import eventActivityController from "../../api/event-activity.controller";
import ProductInput from "../Inputs/ProductInput/ProductInput";

export interface DailyEventData {
  type: string;
  dataMeal?: EventMealResponse[];
  dataActivity?: EventActivityResponse[];
}

const updateMealEvent = async (
  id: string,
  name: string,
  startTime: string,
  weight: number,
  description: string,
) => {
  await eventMealController.updateEvent({
    id,
    name,
    startTime,
    weight,
    description,
  });
};

const updateActivityEvent = async (
  id: string,
  startTime: string,
  endTime: string,
  description: string,
) => {
  await eventActivityController.updateEvent({
    id,
    startTime,
    endTime,
    description,
  });
};

const deleteMealEvent = async (
  id: string,
  name: string,
  startTime: string,
  weight: number,
  description: string,
) => {
  await eventMealController.delEvent({
    id,
    name,
    startTime,
    weight,
    description,
  });
};

const deleteActivityEvent = async (
  id: string,
  startTime: string,
  endTime: string,
  description: string,
) => {
  await eventActivityController.delEvent({
    id,
    startTime,
    endTime,
    description,
  });
};

const getMinutes = (start: Date, end: Date) =>
  new Date(end).getMinutes() - new Date(start).getMinutes();

const getEndTime = (start: Date, minutes: number) =>
  new Date(Date.parse(String(start)) + minutes).toISOString();

const getBurned = (start: string, end: string, cal: number) => {
  const duration = Date.parse(end) - Date.parse(start);
  let minutes = 0;
  if (duration < 3600000) {
    minutes = Math.floor((duration / (1000 * 60)) % 60);
  } else {
    minutes =
      Math.floor((duration / (1000 * 60 * 60)) % 24) * 60 +
      Math.floor((duration / (1000 * 60)) % 60);
  }
  return minutes * cal;
};

const DailyEventEditData: React.FC<DailyEventData> = ({
  type,
  dataMeal,
  dataActivity,
}) => {
  const [weight, setWeight] = useState<number>();
  const [timeEnd, setEndTime] = useState<string>();

  useEffect(() => {}, [
    [weight, setWeight],
    [timeEnd, setEndTime],
  ]);

  return (
    <ul className="container__info__ul">
      {type === "meal"
        ? dataMeal?.map((item) => (
            <li className="container__info__li" key={item.product.id}>
              <div className="container__info__text">
                <div style={{ display: "flex", gap: "5px" }}>
                  <span className="info__name">{item.product.name}</span>
                  <div className="input__container">
                    <ProductInput
                      type="number"
                      placeholder={String(item.weight)}
                      className="info__input"
                      onChange={(event) => {
                        setWeight(
                          Number((event.target as HTMLSelectElement).value),
                        );
                        updateMealEvent(
                          item.id,
                          item.product.name,
                          item.startTime,
                          Number((event.target as HTMLSelectElement).value),
                          item.description,
                        );
                      }}
                    />
                    <span>g</span>
                  </div>
                </div>
                <span className="info__name">
                  {(weight ? weight / 100 : item.weight / 100) *
                    item.product.calories_100g}{" "}
                  kcal
                </span>
              </div>
              <span
                className="info__delete"
                onClick={() =>
                  deleteMealEvent(
                    item.id,
                    item.product.name,
                    item.startTime,
                    weight ? weight : item.weight,
                    item.description,
                  )
                }
              >
                delete
              </span>
            </li>
          ))
        : dataActivity?.map((item) => (
            <li className="container__info__li" key={item.activity.id}>
              <div className="container__info__text">
                <div style={{ display: "flex", gap: "5px" }}>
                  <span className="info__name">{item.activity.name}</span>
                  <div className="input__container">
                    <ProductInput
                      type="number"
                      placeholder={String(
                        getMinutes(
                          new Date(item.startTime),
                          new Date(item.endTime),
                        ),
                      )}
                      className="info__input"
                      onChange={(event) => {
                        setEndTime(
                          getEndTime(
                            new Date(item.startTime),
                            Number((event.target as HTMLSelectElement).value),
                          ),
                        );
                        updateActivityEvent(
                          item.activity.id,
                          item.startTime,
                          timeEnd ? timeEnd : item.endTime,
                          item.description,
                        );
                      }}
                    />
                    <span>min</span>
                  </div>
                </div>
                <span className="info__name">
                  {getBurned(
                    item.startTime,
                    item.endTime,
                    item.activity.calories_per_min,
                  )}{" "}
                  kcal
                </span>
              </div>
              <span
                className="info__delete"
                onClick={() => {
                  deleteActivityEvent(
                    item.activity.id,
                    item.startTime,
                    timeEnd ? timeEnd : item.endTime,
                    item.description,
                  );
                }}
              >
                delete
              </span>
            </li>
          ))}
    </ul>
  );
};

export default DailyEventEditData;
