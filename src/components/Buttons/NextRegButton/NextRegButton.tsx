import React from "react";
import "./NextRegButton.scss";

export interface NextRegButtonProps {
  to?: string;
  onClick?: () => void;
  degree: number;
}

const NextRegButton: React.FC<NextRegButtonProps> = ({
  to,
  onClick,
  degree,
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
        <a href="/" rel="noopener noreferrer" className="next-btn" {...attrs}>
          <div className="next-btn-icon" />
        </a>
      </div>
    </div>
  );
};

export default NextRegButton;
