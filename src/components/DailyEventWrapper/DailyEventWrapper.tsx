import React from "react";
import plus from "../../assets/svg/plus-light.svg";
import "./DailyEventWrapper.scss";
import Button from "../Buttons/Button/Button";
import PlusMinusButton from "../Buttons/PlusMinusButton/PlusMinusButton";

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
        {title === "Exercise" && (
          <Button to="/activity" className="add-event__button">
            <img src={plus} alt="plus" className="plus-minus-img" />
          </Button>
        )}

        {title === "Water" && (
          <PlusMinusButton>
            <img src={plus} alt="plus" className="plus-minus-img" />
          </PlusMinusButton>
        )}
        {title !== "Exercise" && title !== "Water" && (
          <Button to="/event" className="add-event__button">
            <img src={plus} alt="plus" className="plus-minus-img" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default DailyEventWrapper;
