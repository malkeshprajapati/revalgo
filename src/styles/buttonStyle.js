import styled from "styled-components";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ButtonStyle = styled.button`
  width: 100%;
  text-align: center;
  border: none;
  background: #04aa6d;
  min-height: 60px;
  border-radius: 10px;
  font-size: 25px;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid #04aa6d;
  }
`;

export { ButtonContainer, ButtonStyle };
