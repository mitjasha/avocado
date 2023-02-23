import React from "react";
import { EventMealResponse } from "../../api/api.interface";
import RegInput from "../Inputs/BaseInput/BaseInput";
import "./DailyEventEditData.scss";

export interface DailyEventData {
  type: string;
  data: EventMealResponse[];
}

const DailyEventEditData: React.FC<DailyEventData> = ({ type, data }) => {
  return (
    <ul className="container__info__ul">
      {data.map((item) => (
        <li className="container__info__li" key={item.product.id}>
          <div className="container__info__text">
            <div style={{ display: "flex", gap: "5px" }}>
              <span className="info__name">{item.product.name}</span>
              <div className="input__container">
                <RegInput
                  type="number"
                  defaultValue={item.weight}
                  className="info__input"
                />
                <span>{type === "meal" ? " g" : " min"}</span>
              </div>
            </div>
            <span className="info__name">
              {(item.weight / 100) * item.product.calories_100g} kcal
            </span>
          </div>
          <span className="info__delete">delete</span>
        </li>
      ))}
    </ul>
  );
};

export default DailyEventEditData;
