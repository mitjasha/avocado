/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import ScrollContainer from "react-indiana-drag-scroll";
import "./WeightInput.scss";

interface WeightInputProps {
  idName: string;
  register: UseFormRegisterReturn;
}

const WeightInput: React.FC<WeightInputProps> = ({ idName, register }) => {
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
          value={i}
          id={`${idName}-${i}`}
          {...register}
        />,
        <label
          key={`label-${i}`}
          htmlFor={`${idName}-${i}`}
          className="weight-input__label"
        >
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
