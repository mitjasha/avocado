import React from "react";
import { Link } from "react-router-dom";
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
    <Link to={to || "/404"} className={classes} {...attrs}>
      {children}
    </Link>
  );
};

export default Button;
