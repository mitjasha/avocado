import React from "react";
import "./PlusButton.scss";

export interface PlusButtonProps {
  onClick?: () => void;
}

const PlusButton: React.FC<PlusButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      className="add-meal"
      aria-label="plus"
      onClick={onClick}
    />
  );
};

export default PlusButton;
