import React from "react";
import "./BasicModalComponent.scss";

export interface BasicModalComponentProps {
  className?: string;
}

const BasicModalComponent: React.FC<BasicModalComponentProps> = ({
  className,
}) => {
  const classes = `${"pop-up"} ${className}`;
  return <div className={classes}>1</div>;
};

export default BasicModalComponent;
