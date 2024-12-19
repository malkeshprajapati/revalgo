import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    limit: 5,
    search: false,
    detailUser: null,
    currentPage: 1,
    totalPages: 0,
    sortBy: "",
    filter: "",
    status: "",
  },
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
    setLimit: (state) => {
      state.limit = state.limit + 10;
    },
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
    setUserDetail: (state, { payload }) => {
      state.detailUser = payload;
    },
    setTotalPages: (state, { payload }) => {
      state.totalPages = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    setSortBy: (state, { payload }) => {
      state.sortBy = payload;
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setSortAndFilter: (state, { payload }) => {
      state.sortBy = payload.sortBy;
      state.filter = payload.filter;
      state.currentPage = 1;
    },
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
  },
});

export const {
  setUsers,
  setSearch,
  setLimit,
  setUserDetail,
  setCurrentPage,
  setTotalPages,
  setSortBy,
  setFilter,
  setSortAndFilter,
  setStatus,
} = userSlice.actions;

export default userSlice.reducer;
