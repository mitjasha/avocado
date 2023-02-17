import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FromInputProps {
  type: string;
  placeholder?: string;
  className?: string;
  register: UseFormRegisterReturn;
}

const FormInput: React.FC<FromInputProps> = ({
  type,
  placeholder,
  className,
  register,
}) => {
  const classes = `${"reg-input"} ${className}`;
  return (
    <input
      type={type}
      className={classes}
      placeholder={placeholder}
      {...register}
    />
  );
};

export default FormInput;
