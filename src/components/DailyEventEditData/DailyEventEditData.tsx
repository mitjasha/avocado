import React from "react";
import "./DailyEventEditData.scss";

export interface DailyEventData {
  data: string[][];
}

const DailyEventEditData: React.FC<DailyEventData> = ({ data }) => {
  return (
    <ul className="container__info__ul">
      <span className="info__header__span">Your meal consisted of:</span>
      {data.map((item) => (
        <li className="container__info__li">
          <span className="info__name">
            {item[0]}({item[1]}g) - {item[2]}kcal
          </span>
          <span className="info__delete">delete</span>
        </li>
      ))}
    </ul>
  );
};

export default DailyEventEditData;
