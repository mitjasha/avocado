import React from "react";
import { Link } from "react-router-dom";
import "./BackButton.scss";

export interface BackButtonProps {
  children?: React.ReactNode;
  to?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to, children, ...attrs }) => {
  return (
    <Link to={to as string} className="back-btn" {...attrs}>
      <div className="back-btn-icon" />
    </Link>
  );
};

export default BackButton;
