import React from "react";
import { Link } from "react-router-dom";
import "./EditButton.scss";

interface EditButtonProps {
  className?: string;
  to?: string;
}

const EditButton: React.FC<EditButtonProps> = ({ className, to }) => {
  const classes = `${"edit-btn"} ${className}`;
  return (
    <Link
      to={to || "/404"}
      type="button"
      className={classes}
      aria-label="edit"
    />
  );
};

export default EditButton;
