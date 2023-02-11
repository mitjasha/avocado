import React from "react";
import "./DailyEventEditData.scss";

export interface DailyEventData {
  type: string;
  data: string[][];
}

const DailyEventEditData: React.FC<DailyEventData> = ({ type, data }) => {
  return (
    <ul className="container__info__ul">
      {data.map((item) => (
        <li className="container__info__li">
          <div className="container__info__text">
            <span className="info__name">{item[0]}</span>
            <div className="input__container">
              <input
                className="info__input"
                type="number"
                placeholder={item[1]}
              />
              <span>{type === "meal" ? "g" : "min"}</span>
            </div>
            <span className="info__name">{item[2]}kcal</span>
          </div>
          <span className="info__delete">delete</span>
        </li>
      ))}
    </ul>
  );
};

export default DailyEventEditData;
