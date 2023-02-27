/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unneeded-ternary */
import React, { useEffect, useState } from "react";
import { EventActivityResponse } from "../../api/api.interface";
import eventActivityController from "../../api/event-activity.controller";
import ProductInput from "../Inputs/ProductInput/ProductInput";
import "./EventEditDataActivity.scss";

interface DailyActivity {
  data: EventActivityResponse;
  className: string;
}

const EventEditDataActivity: React.FC<DailyActivity> = ({
  data,
  className,
}) => {
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

  const [timeEnd, setEndTime] = useState<string>();

  useEffect(() => {}, [[timeEnd, setEndTime]]);

  return (
    <li className={className} key={data.activity.id}>
      <div className="container__info__text">
        <div style={{ display: "flex", gap: "5px" }}>
          <span className="info__name">{data.activity.name}</span>
          <div className="input__container">
            <ProductInput
              type="number"
              placeholder={String(
                getMinutes(new Date(data.startTime), new Date(data.endTime)),
              )}
              className="info__input"
              onChange={(event) => {
                setEndTime(
                  getEndTime(
                    new Date(data.startTime),
                    Number((event.target as HTMLSelectElement).value),
                  ),
                );
                updateActivityEvent(
                  data.activity.id,
                  data.startTime,
                  timeEnd ? timeEnd : data.endTime,
                  data.description,
                );
              }}
            />
            <span>min</span>
          </div>
        </div>
        <span className="info__name">
          {getBurned(
            data.startTime,
            data.endTime,
            data.activity.calories_per_min,
          )}{" "}
          kcal
        </span>
      </div>
      <span
        className="info__delete"
        onClick={() => {
          deleteActivityEvent(
            data.activity.id,
            data.startTime,
            timeEnd ? timeEnd : data.endTime,
            data.description,
          );
        }}
      >
        delete
      </span>
    </li>
  );
};

export default EventEditDataActivity;
