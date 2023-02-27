import React from "react";
import {
  EventActivityResponse,
  EventMealResponse,
} from "../../api/api.interface";
import "./DailyEventEditData.scss";
import EventEditDataMeal from "../EventEditDataMeal/EventEditDataMeal";
import EventEditDataActivity from "../EventEditDataActivity/EventEditDataActivity";

export interface DailyEventData {
  type: string;
  dataMeal?: EventMealResponse[];
  dataActivity?: EventActivityResponse[];
}

const DailyEventEditData: React.FC<DailyEventData> = ({
  type,
  dataMeal,
  dataActivity,
}) => {
  return (
    <ul className="container__info__ul">
      {type === "meal"
        ? dataMeal?.map((item) => (
            <EventEditDataMeal data={item} className="container__info__li" />
          ))
        : dataActivity?.map((item) => (
            <EventEditDataActivity
              data={item}
              className="container__info__li"
            />
          ))}
    </ul>
  );
};

export default DailyEventEditData;
