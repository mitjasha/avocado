import React from "react";
import "./MunisButton.scss";

export interface MunisButtonProps {
  onClick?: () => void;
}

const MunisButton: React.FC<MunisButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      className="remove-btn"
      aria-label="minus"
      onClick={onClick}
    />
  );
};

export default MunisButton;
