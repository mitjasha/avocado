import React from "react";
import "./PlusMinusButton.scss";

export interface PlusMinusButtonProps {
  onClick?: () => void;
  children?: JSX.Element;
  className: string;
}

const PlusMinusButton: React.FC<PlusMinusButtonProps> = ({
  onClick,
  children,
  className,
}) => {
  const classes = `${"plus-minus-btn"} ${className}`;
  return (
    <button
      type="button"
      className={classes}
      aria-label="plus-minus"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PlusMinusButton;
