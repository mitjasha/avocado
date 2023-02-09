/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "./TallInput.scss";

const TallInput: React.FC = () => {
  const minTall = 100;
  const maxTall = 300;
  const getTallInputs = () => {
    const content = [];
    for (let i = minTall; i < maxTall; i += 1) {
      content.push(
        <div>
          <input
            type="radio"
            className="tall-input__input"
            key={i}
            id={`${i}`}
            name="tall"
          />
          <label htmlFor="tall" className="tall-input__label">
            {i}
          </label>
        </div>,
      );
    }
    return <div className="tall-input">{content}</div>;
  };
  return getTallInputs();
};

export default TallInput;
