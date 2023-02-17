import React from "react";
import "./BaseInput.scss";

export interface BaseInputProps {
  type: string;
  placeholder?: string;
  className?: string;
  minLength?: number;
  maxLength?: number;
  id?: string;
  defaultValue?: number;
}

const RegInput: React.FC<BaseInputProps> = ({
  type,
  placeholder,
  className,
  minLength,
  maxLength,
  id,
  defaultValue,
}) => {
  const classes = `${"reg-input"} ${className}`;
  return (
    <input
      type={type}
      className={classes}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      id={id}
      defaultValue={defaultValue}
      required
    />
  );
};

export default RegInput;
