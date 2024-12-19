import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    scrollRef: "",
  },
  reducers: {
    setScroll: (state, { payload }) => {
      state.scrollRef = payload;
    },
  },
});

export const { setScroll } = layoutSlice.actions;
export default layoutSlice.reducer;
