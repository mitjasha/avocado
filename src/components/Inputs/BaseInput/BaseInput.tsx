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
  disabled?: boolean;
  onChange?: () => void;
}

const RegInput: React.FC<BaseInputProps> = ({
  type,
  placeholder,
  className,
  minLength,
  maxLength,
  id,
  defaultValue,
  disabled,
  onChange,
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
      disabled={disabled}
      onChange={onChange}
    />
  );
};
export default RegInput;
