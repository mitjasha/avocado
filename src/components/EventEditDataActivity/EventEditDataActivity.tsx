/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unneeded-ternary */
import React, { useEffect, useState } from "react";
import { EventActivityResponse } from "../../api/api.interface";
import eventActivityController from "../../api/event-activity.controller";
import "./EventEditDataActivity.scss";

interface DailyActivity {
  data: EventActivityResponse;
  className: string;
}

const EventEditDataActivity: React.FC<DailyActivity> = ({
  data,
  className,
}) => {
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
  const [removedUS, setRemovedUS] = useState<boolean>(false);

  useEffect(() => {}, [[timeEnd, setEndTime]]);

  return (
    <li className={className} key={data.activity.id}>
      <div className="container__info__text">
        <div style={{ display: "flex", gap: "5px" }}>
          <span
            className="info__name"
            style={{ textDecoration: removedUS ? "line-through" : "none" }}
          >
            {data.activity.name}
          </span>
          <div className="input__container">
            <span>
              {getMinutes(
                new Date(data.startTime),
                new Date(data.endTime),
              ).toFixed()}{" "}
              min
            </span>
          </div>
        </div>
        <span className="info__name">
          {getBurned(
            data.startTime,
            data.endTime,
            data.activity.calories_per_min,
          ).toFixed()}{" "}
          kcal
        </span>
      </div>
      <span
        className="info__delete"
        onClick={() => {
          setRemovedUS(!removedUS);
          deleteActivityEvent(
            data.id,
            data.startTime,
            data.endTime,
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
