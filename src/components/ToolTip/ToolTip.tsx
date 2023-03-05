import React from "react";
import cn from "classnames";
import "./ToolTip.scss";

interface ToolTipProps {
  className?: string;
  classContainer?: string;
  text: string;
}

const ToolTip: React.FC<ToolTipProps> = ({
  className,
  text,
  classContainer,
}) => (
  <div className={cn("tool-tip__container", classContainer)}>
    <p className={cn("tool-tip__error", className)}>{text}</p>
  </div>
);

export default ToolTip;
