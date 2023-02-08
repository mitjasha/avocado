import React from "react";
import "./NextRegButton.scss";

export interface NextButtonProps {
  children?: React.ReactNode;
  to?: string;
  onClick?: () => void;
  firstDegree: number;
  secondDegree: number;
}

const NextButton: React.FC<NextButtonProps> = ({
  to,
  children,
  onClick,
  firstDegree,
  secondDegree,
  ...attrs
}) => {
  return (
    <div className="btn-circle">
      <div
        className="progress"
        style={{
          backgroundImage: `linear-gradient(${firstDegree}deg, transparent 50%, #e8f2e1 50%), linear-gradient(${secondDegree}deg, #e8f2e1 50%, transparent 50%)`,
        }}
      >
        <a href="/" rel="noopener noreferrer" className="next-btn" {...attrs}>
          <div className="next-btn-icon" />
        </a>
      </div>
    </div>
  );
};

export default NextButton;
