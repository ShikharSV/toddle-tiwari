import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import blogReducer from "./blogSlice";
import wallReducer from "./wallSlice";

//creating a redux store
const store = configureStore({
  reducer: {
    users: userReducer,
    blogs: blogReducer,
    walls: wallReducer,
  },
});

export default store;
