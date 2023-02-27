/* eslint-disable no-unneeded-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { EventMealResponse } from "../../api/api.interface";
import eventMealController from "../../api/event-meal.controller";
import ProductInput from "../Inputs/ProductInput/ProductInput";
import "./EventEditDataMeal.scss";

interface DailyMeal {
  data: EventMealResponse;
  className: string;
}

const EventEditDataMeal: React.FC<DailyMeal> = ({ data, className }) => {
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

  const [weight, setWeight] = useState<number>();

  useEffect(() => {}, [[weight, setWeight]]);

  return (
    <li className={className} key={data.product.id}>
      <div className="container__info__text">
        <div style={{ display: "flex", gap: "5px" }}>
          <span className="info__name">{data.product.name}</span>
          <div className="input__container">
            <ProductInput
              type="number"
              placeholder={String(data.weight)}
              value={weight ? String(weight) : String(data.weight)}
              className="info__input"
              onChange={(event) => {
                setWeight(Number((event.target as HTMLSelectElement).value));
                updateMealEvent(
                  data.id,
                  data.product.name,
                  data.startTime,
                  Number((event.target as HTMLSelectElement).value),
                  data.description,
                );
              }}
            />
            <span>g</span>
          </div>
        </div>
        <span className="info__name">
          {(
            (weight ? weight / 100 : data.weight / 100) *
            data.product.calories_100g
          ).toFixed(2)}{" "}
          kcal
        </span>
      </div>
      <span
        className="info__delete"
        onClick={() =>
          deleteMealEvent(
            data.id,
            data.product.name,
            data.startTime,
            weight ? weight : data.weight,
            data.description,
          )
        }
      >
        delete
      </span>
    </li>
  );
};

export default EventEditDataMeal;
