import React from "react";
import PlusButton from "../Buttons/PlusButton/PlusButton";
import "./DailyEventWrapper.scss";

export interface DailyEventWrapperProps {
  title: string;
  recommended?: string;
  quantity?: string;
  content?: React.ReactNode;
  className?: string;
}

const DailyEventWrapper: React.FC<DailyEventWrapperProps> = ({
  title,
  recommended,
  quantity,
  content,
  className,
}) => {
  return (
    <div className={className}>
      <div className="meal-info">
        <div style={{ display: "flex", gap: "5px" }}>
          <h4 className="meal-title">{title}</h4>
          <p className="quantity">{quantity}</p>
        </div>
        <p className="recom">{recommended}</p>
      </div>
      {content}
      <PlusButton />
    </div>
  );
};

export default DailyEventWrapper;
