import React from "react";
import "./NextRegButton.scss";

export interface NextRegButtonProps {
  to?: string;
  onClick?: () => void;
  gradient: string;
  disabled?: boolean;
}

const NextRegButton: React.FC<NextRegButtonProps> = ({
  to,
  onClick,
  gradient,
  disabled,
  ...attrs
}) => {
  return (
    <div className="btn-circle">
      <div
        className="progress"
        style={{
          backgroundImage: gradient,
        }}
      >
        <button
          className="next-btn"
          type="submit"
          disabled={disabled}
          onClick={onClick}
          {...attrs}
        >
          <div className="next-btn-icon" />
        </button>
      </div>
    </div>
  );
};

export default NextRegButton;
