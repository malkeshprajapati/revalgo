import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  font-size: 16px;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #e6f7ff;
  }
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  text-align: left;
  padding: 8px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #4caf50;
  color: white;
  text-align: left;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #45a049;
  }
`;

const SkeletonWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

const SkeletonItem = styled.div`
  width: 100%;
  height: 50px;
  background-color: #ddd;
  animation: skeleton-loading 1.5s infinite ease-in-out;

  @keyframes skeleton-loading {
    0% {
      background-color: #ddd;
    }
    50% {
      background-color: #f5f5f5;
    }
    100% {
      background-color: #ddd;
    }
  }
`;
const Dropdown = styled.select`
  padding: 8px;
  margin: 0 10px 10px 0;
  font-size: 16px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export {
  Container,
  Title,
  StyledTable,
  TableHead,
  TableRow,
  TableCell,
  TableHeader,
  PaginationContainer,
  Button,
  SkeletonWrapper,
  SkeletonItem,
  Dropdown,
};
