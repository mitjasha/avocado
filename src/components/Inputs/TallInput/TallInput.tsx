/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import ScrollContainer from "react-indiana-drag-scroll";
import "./TallInput.scss";

interface TallInputProps {
  register: UseFormRegisterReturn;
}

const TallInput: React.FC<TallInputProps> = ({ register }) => {
  const minTall = 150;
  const maxTall = 250;
  const getTallInputs = () => {
    const content = [];
    for (let i = minTall; i <= maxTall; i += 1) {
      content.push(
        <input
          type="radio"
          className="tall-input__input"
          key={i}
          value={i}
          id={`tall-${i}`}
          {...register}
        />,
        <label
          htmlFor={`tall-${i}`}
          key={`label-${i}`}
          className="tall-input__label"
        >
          {i}
        </label>,
      );
    }
    return <div className="tall-input">{content}</div>;
  };
  return (
    <ScrollContainer className="scroll-container">
      {getTallInputs()}
    </ScrollContainer>
  );
};

export default TallInput;
