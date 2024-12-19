import styled from "styled-components";

const ErrorContainer = styled.div`
  color: red;
  top: 0;
  padding: 20px;
  border: 1px solid red;
  border-radius: 5px;
  background-color: #ffe6e6;
  margin: 10px 0;
  position: absolute;
  transition: 0.3s ease out;
`;

const ErrorMessage = styled.p`
  margin: 0;
`;

export { ErrorContainer, ErrorMessage };
