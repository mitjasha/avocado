import React from "react";
import "./EditButton.scss";

interface EditButtonProps {
  className?: string;
}

const EditButton: React.FC<EditButtonProps> = ({ className }) => {
  const classes = `${"edit-btn"} ${className}`;
  return <button type="button" className={classes} aria-label="edit" />;
};

export default EditButton;
