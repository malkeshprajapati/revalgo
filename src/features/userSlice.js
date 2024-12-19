import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    limit: 5,
    search: false,
    detailUser: null,
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
  },
});
export const { setUsers, setSearch, setLimit, setUserDetail } =
  userSlice.actions;
export default userSlice.reducer;
