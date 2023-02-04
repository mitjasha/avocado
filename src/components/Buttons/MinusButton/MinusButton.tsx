import React from "react";
import "./MinusButton.scss";

export interface MinusButtonProps {
  onClick?: () => void;
}

const MinusButton: React.FC<MinusButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      className="remove-btn"
      aria-label="minus"
      onClick={onClick}
    />
  );
};

export default MinusButton;
