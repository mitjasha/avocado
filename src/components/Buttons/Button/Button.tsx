import React from "react";
import "./Button.scss";

export interface ButtonProps {
  children?: React.ReactNode;
  to?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  to,
  children,
  className,
  disabled,
  onClick,
  ...attrs
}) => {
  const classes = `${"button"} ${className}`;
  return (
    <a href="/" rel="noopener noreferrer" className={classes} {...attrs}>
      {children}
    </a>
  );
};

export default Button;
