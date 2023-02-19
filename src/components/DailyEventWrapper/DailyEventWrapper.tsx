import React from "react";
import { Link } from "react-router-dom";
import plus from "../../assets/svg/plus-light.svg";
import PlusMinusButton from "../Buttons/PlusMinusButton/PlusMinusButton";
import "./DailyEventWrapper.scss";

export interface DailyEventWrapperProps {
  title: string;
  recommended?: string;
  quantity?: string;
  content?: JSX.Element;
  className?: string;
  minusButton?: JSX.Element;
  curWeight?: JSX.Element;
  handleClick?: () => void;
}

const DailyEventWrapper: React.FC<DailyEventWrapperProps> = ({
  title,
  recommended,
  quantity,
  content,
  className,
  minusButton,
  curWeight,
  handleClick,
}) => {
  const events = ["activity", "breakfast", "lunch", "dinner", "snack"];
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
        {events.map((item) => {
          const itemTitle = item[0].toUpperCase() + item.slice(1);
          return (
            title === itemTitle && (
              <Link to={`/event/${item}`} key={item}>
                <PlusMinusButton>
                  <img src={plus} alt="plus" className="plus-minus-img" />
                </PlusMinusButton>
              </Link>
            )
          );
        })}

        {title === "Water" && (
          <PlusMinusButton>
            <img src={plus} alt="plus" className="plus-minus-img" />
          </PlusMinusButton>
        )}

        {title === "Weight" && (
          <PlusMinusButton onClick={handleClick}>
            <img src={plus} alt="plus" className="plus-minus-img" />
          </PlusMinusButton>
        )}
      </div>
    </div>
  );
};

export default DailyEventWrapper;
