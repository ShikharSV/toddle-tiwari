import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalBlogs: [],
  currentBlog: [],
};

//creating a student Slice for the redux store that will store total students, assigned students and unassigned students
export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    getTotalBlogs(state, action) {
      state.totalBlogs = action.payload;
    },
    getCurrentBlog(state, action) {
      state.currentBlog = action.payload;
    },
  },
});

export const { getTotalBlogs, getCurrentBlog } = blogSlice.actions;
export default blogSlice.reducer;
