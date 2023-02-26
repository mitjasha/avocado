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
  startTime: string,
  weight: number,
  description: string,
) => {
  await eventMealController.updateEvent({
    id,
    startTime,
    weight,
    description,
    name: "",
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
  startTime: string,
  weight: number,
  description: string,
) => {
  await eventMealController.delEvent({
    id,
    startTime,
    weight,
    description,
    name: "",
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

export const getMinutes = (start: Date, end: Date) =>
  new Date(end).getMinutes() - new Date(start).getMinutes();

export const getEndTime = (start: Date, minutes: number) =>
  new Date(new Date(start).getMinutes() + minutes);

const DailyEventEditData: React.FC<DailyEventData> = ({
  type,
  dataMeal,
  dataActivity,
}) => {
  const [weight, setWeight] = useState<number>();
  const [timeEnd, setEndTime] = useState<Date>();

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
                      value={weight ? String(weight) : String(item.weight)}
                      className="info__input"
                      onChange={(event) => {
                        setWeight(
                          Number((event.target as HTMLSelectElement).value),
                        );
                        updateMealEvent(
                          item.product.id,
                          item.startTime,
                          weight ? weight : item.weight,
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
                    item.product.id,
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
                      value={String(
                        timeEnd
                          ? getMinutes(new Date(item.startTime), timeEnd)
                          : getMinutes(
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
                          timeEnd ? String(timeEnd) : String(item.endTime),
                          item.description,
                        );
                      }}
                    />
                    <span>min</span>
                  </div>
                </div>
                <span className="info__name">
                  {(timeEnd
                    ? getMinutes(new Date(item.startTime), timeEnd)
                    : getMinutes(
                        new Date(item.startTime),
                        new Date(item.endTime),
                      )) * item.activity.calories_per_min}{" "}
                  min
                </span>
              </div>
              <span
                className="info__delete"
                onClick={() =>
                  deleteActivityEvent(
                    item.activity.id,
                    item.startTime,
                    timeEnd ? String(timeEnd) : String(item.endTime),
                    item.description,
                  )
                }
              >
                delete
              </span>
            </li>
          ))}
    </ul>
  );
};

export default DailyEventEditData;
