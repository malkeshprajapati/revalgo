import React, { useEffect, useState } from "react";
import useApiRequest from "../htttpClient";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../features/userSlice";
import {
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
} from "../styles/listStyle";
import { useNavigate } from "react-router-dom";

const List = () => {
  const { users, limit, search } = useSelector((state) => state.users);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apiRequest = useApiRequest();

  const fetchUsers = async (page, sortBy, filter) => {
    const filterQuery =
      filter === "" ? "" : `?key=company.department&value=${filter}`;
    const sortQuery = sortBy ? `&sortBy=${sortBy}` : "";

    const data = filter.length
      ? await apiRequest(
          `users/filter${filterQuery}&limit=${limit}&skip=${(page - 1) * limit}`
        )
      : await apiRequest(
          `users?limit=${limit}&skip=${(page - 1) * limit}${sortQuery}`
        );
    dispatch(setUsers(data.users));
    setTotalPages(Math.ceil(data.total / limit));
  };

  useEffect(() => {
    if (!search) {
      fetchUsers(currentPage, sortBy, filter);
    } else {
      const total = Math.ceil(users.total / limit);
      setTotalPages(isNaN(total) ? 1 : total);
    }
  }, [currentPage, sortBy, filter, search, users.total, limit]);

  const handleNext = () => {
    dispatch(setUsers([]));
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    dispatch(setUsers([]));
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setFilter("");
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  if (!users.length) {
    return (
      <SkeletonWrapper>
        <Title>User Data</Title>
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
      </SkeletonWrapper>
    );
  }

  return (
    <Container>
      <Title>User Data</Title>

      <Dropdown onChange={handleSortChange} value={sortBy}>
        <option value="">Sort By</option>
        <option value="age">Age</option>
        <option value="firstName"> Name</option>
        <option value="email"> Email</option>
      </Dropdown>

      <Dropdown onChange={handleFilterChange} value={filter}>
        <option value="all">Filter by Department (All)</option>
        <option value="Accounting">Accounting</option>
        <option value="Support">Support</option>
        <option value="Engineering">Engineering</option>
        <option value="Research and Development">
          Research and Development
        </option>
        <option value="Human Resources">Human Resources</option>
        <option value="Services">Services</option>
      </Dropdown>

      <StyledTable>
        <TableHead>
          <tr>
            <TableHeader>First Name</TableHeader>
            <TableHeader>Last Name</TableHeader>
            <TableHeader>Age</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Phone</TableHeader>
            <TableHeader>Address</TableHeader>
            <TableHeader>University</TableHeader>
            <TableHeader>Company</TableHeader>
            <TableHeader>Department</TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </TableHead>
        <tbody>
          {users?.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                {user.address.address}, {user.address.city},{" "}
                {user.address.state}
              </TableCell>
              <TableCell>{user.university}</TableCell>
              <TableCell>{user.company.name}</TableCell>
              <TableCell>{user.company.department}</TableCell>
              <TableCell>
                <Button onClick={() => navigate(`/list/${user.id}`)}>
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>

      <PaginationContainer>
        <Button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </Button>
      </PaginationContainer>
    </Container>
  );
};

export default List;
