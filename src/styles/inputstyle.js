import styled from "styled-components";

const InputStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 10px 0;
`;
const InputBox = styled.input`
  border: 1px solid grey;
  min-height: 50px;
  // width: 100%;
  border-radius: 10px;
  padding: 0 10px;
  &:focus {
    outline: 1px solid #04aa6d;
  }
`;
const InputLabel = styled.label`
  margin: 0 0 5px 0;
  font-weight: 600;
`;

export { InputStyleContainer, InputBox, InputLabel };
