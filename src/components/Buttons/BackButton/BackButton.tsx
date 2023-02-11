import React from "react";
import "./BackButton.scss";

export interface BackButtonProps {
  children?: React.ReactNode;
  to?: string;
  onClick?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({
  to,
  children,
  onClick,
  ...attrs
}) => {
  return (
    <a href="/" rel="noopener noreferrer" className="back-btn" {...attrs}>
      <div className="back-btn-icon" />
    </a>
  );
};

export default BackButton;
