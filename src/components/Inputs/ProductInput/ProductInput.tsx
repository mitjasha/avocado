import React from "react";
import "../BaseInput/BaseInput.scss";

export interface ProductInputProps {
  type: string;
  placeholder?: string;
  value?: string;
  className?: string;
  minLength?: number;
  maxLength?: number;
  id?: string;
  defaultValue?: number;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent) => void | undefined;
}

const ProductInput: React.FC<ProductInputProps> = ({
  type,
  placeholder,
  value,
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
      value={value}
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
export default ProductInput;
