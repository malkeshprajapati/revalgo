import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  max-width: 400px;
  margin: 20px auto;
  // background-color: #f9f9f9;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 16px;

  &:focus {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  }
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  background-color: #b6ffa1;
  border: none;
  color: #639567;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    font-weight: bolder;
    border: 2px solid #b6ffa1;
  }
`;
export { SearchContainer, SearchInput, SearchButton };
