import React from "react";
import "./RegInput.scss";

interface RegInputProps {
  type: string;
  placeholder: string;
  className?: string;
  minLength?: number;
}

const RegInput: React.FC<RegInputProps> = ({
  type,
  placeholder,
  className,
  minLength,
}) => {
  const classes = `${"reg-input"} ${className}`;
  return (
    <input
      type={type}
      className={classes}
      placeholder={placeholder}
      minLength={minLength}
      required
    />
  );
};

export default RegInput;
