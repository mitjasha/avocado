import React from "react";
import "./ButtonTemplate.scss";

export interface ButtonTemplateProps {
  children?: React.ReactNode;
  to?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const ButtonTemplate: React.FC<ButtonTemplateProps> = ({
  children,
  className,
  disabled,
  onClick,
  ...attrs
}) => {
  const classes = `${"button"} ${className}`;
  return (
    <button type="button" className={classes} {...attrs}>
      {children}
    </button>
  );
};

export default ButtonTemplate;
