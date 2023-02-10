/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import "./WeightInput.scss";

const WeightInput: React.FC = () => {
  const minWeight = 30;
  const maxWeight = 200;
  const getWeightInputs = () => {
    const content = [];
    for (let i = minWeight; i <= maxWeight; i += 1) {
      content.push(
        <input
          type="radio"
          className="weight-input__input"
          key={i}
          id={`weight-${i}`}
          name="weight"
        />,
        <label htmlFor={`weight-${i}`} className="weight-input__label">
          {i}
        </label>,
      );
    }
    return <div className="weight-input">{content}</div>;
  };
  return (
    <ScrollContainer className="scroll-container">
      {getWeightInputs()}
    </ScrollContainer>
  );
};

export default WeightInput;
