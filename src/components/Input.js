import React from "react";
import {
  InputBox,
  InputLabel,
  InputStyleContainer,
} from "../styles/inputstyle";

const Input = ({
  name,
  onChange,
  value,
  label,
  placeholder,
  type,
  ...props
}) => {
  return (
    <InputStyleContainer {...props}>
      {label && <InputLabel>{label}</InputLabel>}
      <InputBox
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder ? `Enter ${placeholder}` : "Enter"}
        type={type}
      />
    </InputStyleContainer>
  );
};

export default Input;
