import React from "react";
import "../DailyEventWrapper/DailyEventWrapper.scss";

export interface DailyEventWrapperProps {
  title: string;
  quantity?: string;
  recommended: string;
  content?: JSX.Element;
  className?: string;
}

const DailyEventEditWrapper: React.FC<DailyEventWrapperProps> = ({
  title,
  quantity,
  recommended,
  content,
  className,
}) => {
  return (
    <div className={className}>
      <div className="item-info" style={{ width: "100%" }}>
        <div style={{ display: "flex", gap: "5px" }}>
          <h4 className="meal-title">{title}</h4>
          <p className="quantity">{quantity}</p>
        </div>
        <p className="recom">{recommended}</p>
        {content}
      </div>
    </div>
  );
};

export default DailyEventEditWrapper;
