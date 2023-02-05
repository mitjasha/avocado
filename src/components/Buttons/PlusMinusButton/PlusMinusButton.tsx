import React from "react";
import "./PlusMinusButton.scss";

export interface PlusMinusButtonProps {
  onClick?: () => void;
  children: JSX.Element;
}

const PlusMinusButton: React.FC<PlusMinusButtonProps> = ({
  onClick,
  children,
}) => {
  return (
    <button
      type="button"
      className="plus-minus-btn"
      aria-label="plus-minus"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PlusMinusButton;
