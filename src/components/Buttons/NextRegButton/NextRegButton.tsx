import React from "react";
import "./NextRegButton.scss";

export interface NextRegButtonProps {
  to?: string;
  onClick?: () => void;
  degree: number;
  disabled?: boolean;
}

const NextRegButton: React.FC<NextRegButtonProps> = ({
  to,
  onClick,
  degree,
  disabled,
  ...attrs
}) => {
  return (
    <div className="btn-circle">
      <div
        className="progress"
        style={{
          backgroundImage: `linear-gradient(${degree}deg, transparent 50%, #e8f2e1 50%), linear-gradient(90deg, #e8f2e1 50%, transparent 50%)`,
        }}
      >
        <button
          className="next-btn"
          type="submit"
          disabled={disabled}
          {...attrs}
        >
          <div className="next-btn-icon" />
        </button>
      </div>
    </div>
  );
};

export default NextRegButton;
