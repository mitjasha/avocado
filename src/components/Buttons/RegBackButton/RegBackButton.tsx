import React from "react";
import "../BackButton/BackButton.scss";

export interface BackButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const RegBackButton: React.FC<BackButtonProps> = ({
  children,
  onClick,
  ...attrs
}) => {
  return (
    <button className="back-btn" type="button" onClick={onClick} {...attrs}>
      <div className="back-btn-icon" />
    </button>
  );
};

export default RegBackButton;
