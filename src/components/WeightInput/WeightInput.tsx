/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import "./WeightInput.scss";

interface WeightInputProps {
  idName: string;
  name: string;
}

const WeightInput: React.FC<WeightInputProps> = ({ idName, name }) => {
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
          id={`${idName}-${i}`}
          name={name}
        />,
        <label htmlFor={`${idName}-${i}`} className="weight-input__label">
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
