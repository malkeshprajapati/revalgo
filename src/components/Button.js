import React from "react";
import { ButtonContainer, ButtonStyle } from "../styles/buttonStyle";

const Button = ({ label, type }) => {
  return (
    <ButtonContainer>
      <ButtonStyle type={type ? type : "submit"}>{label}</ButtonStyle>
    </ButtonContainer>
  );
};

export default Button;
