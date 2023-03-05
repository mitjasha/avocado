import React from "react";
import "./ButtonTemplate.scss";

export interface ButtonTemplateProps {
  children?: React.ReactNode;
  to?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: JSX.IntrinsicElements["button"]["type"];
  form?: string;
}

const ButtonTemplate: React.FC<ButtonTemplateProps> = ({
  children,
  className,
  disabled,
  onClick,
  form,
  type,
  ...attrs
}) => {
  const classes = `${"basic-button"} ${className}`;
  return (
    <button
      onClick={onClick}
      className={classes}
      // eslint-disable-next-line react/button-has-type
      type={type}
      form={form}
      {...attrs}
    >
      {children}
    </button>
  );
};

export default ButtonTemplate;
