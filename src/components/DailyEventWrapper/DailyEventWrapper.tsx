import React from "react";
import PlusMinusButton from "../Buttons/PlusMinusButton/PlusMinusButton";
import plus from "../../assets/svg/plus-light.svg";
import "./DailyEventWrapper.scss";

export interface DailyEventWrapperProps {
  title: string;
  recommended?: string;
  quantity?: string;
  content?: JSX.Element;
  className?: string;
  minusButton?: JSX.Element;
  curWeight?: JSX.Element;
}

const DailyEventWrapper: React.FC<DailyEventWrapperProps> = ({
  title,
  recommended,
  quantity,
  content,
  className,
  minusButton,
  curWeight,
}) => {
  return (
    <div className={className}>
      <div className="item-info">
        <div style={{ display: "flex", gap: "5px" }}>
          <h4 className="meal-title">{title}</h4>
          <p className="quantity">{quantity}</p>
        </div>
        <p className="recom">{recommended}</p>
        {content}
      </div>
      <div className="add-remove-events">
        {minusButton}
        {curWeight}
        <PlusMinusButton>
          <img src={plus} alt="plus" className="plus-minus-img" />
        </PlusMinusButton>
      </div>
    </div>
  );
};

export default DailyEventWrapper;
