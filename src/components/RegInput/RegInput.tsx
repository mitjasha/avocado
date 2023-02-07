import React from "react";
import "./RegInput.scss";

interface RegInputProps {
  type: string;
  placeholder: string;
}

const RegInput: React.FC<RegInputProps> = ({ type, placeholder }) => {
  return <input type={type} className="reg-input" placeholder={placeholder} />;
};

export default RegInput;
