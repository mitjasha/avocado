import React from "react";
import "./RegInput.scss";

interface RegInputProps {
  type: string;
  placeholder: string;
  className: string;
}

const RegInput: React.FC<RegInputProps> = ({
  type,
  placeholder,
  className,
}) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      required
    />
  );
};

export default RegInput;
