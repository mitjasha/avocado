/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { EventMealResponse } from "../../api/api.interface";
import eventMealController from "../../api/event-meal.controller";
import "./EventEditDataMeal.scss";

interface DailyMeal {
  data: EventMealResponse;
  className: string;
}

const EventEditDataMeal: React.FC<DailyMeal> = ({ data, className }) => {
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

  const [removedUS, setRemovedUS] = useState<boolean>(false);

  return (
    <li className={className} key={data.product.id}>
      <div className="container__info__text">
        <div style={{ display: "flex", gap: "5px" }}>
          <span
            className="info__name"
            style={{ textDecoration: removedUS ? "line-through" : "none" }}
          >
            {data.product.name}
          </span>
          <div className="input__container">
            <span>{data.weight} g</span>
          </div>
        </div>
        <span className="info__name">
          {((data.weight / 100) * data.product.calories_100g).toFixed()} kcal
        </span>
      </div>
      <span
        className="info__delete"
        onClick={() => {
          setRemovedUS(!removedUS);
          deleteMealEvent(
            data.id,
            data.product.name,
            data.startTime,
            data.weight,
            data.description,
          );
        }}
      >
        delete
      </span>
    </li>
  );
};

export default EventEditDataMeal;
