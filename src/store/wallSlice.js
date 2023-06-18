const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  totalWalls: [],
  currentWall: [],
};

//creating a student Slice for the redux store that will store total students, assigned students and unassigned students
const wallSlice = createSlice({
  name: "walls",
  initialState,
  reducers: {
    getTotalWalls(state, action) {
      state.totalWalls = action.payload;
    },
    getCurrentWall(state, action) {
      state.currentWall = action.payload;
    },
  },
});

export const { getTotalWalls, getCurrentWall } = wallSlice.actions;
export default wallSlice.reducer;
