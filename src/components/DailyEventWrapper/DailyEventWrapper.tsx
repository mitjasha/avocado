import React from "react";
import "./DailyEventWrapper.scss";

export interface DailyEventWrapperProps {
  //   color: string;
  title: string;
  recommended?: string;
  //   children?: React.ReactNode;
  //   className?: string;
}

const DailyEventWrapper: React.FC<DailyEventWrapperProps> = ({
  //   color,
  title,
  recommended,
  //   children,
  //   className,
}) => {
  return (
    <div className="daily-events__meal daily-events__meal_breakfast">
      <div className="meal-text">
        <p className="meal-title meal-title_breakfast">{title}</p>
        <p className="recom recom_breakfast">{recommended}</p>
      </div>
      <button type="button" className="add-meal" aria-label="plus" />
    </div>
  );
};

export default DailyEventWrapper;
