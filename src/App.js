import Home from "./pages/Home";
import data from "./data.json";
import { users } from "./users";
import { blogs } from "./blogs";
import { walls } from "./walls";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBlog from "./pages/CreateBlog";
import CreateWall from "./pages/CreateWall";
import CreateUser from "./pages/CreateUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTotalUsers } from "./store/userSlice";
import { getTotalWalls } from "./store/wallSlice";
import { getTotalBlogs } from "./store/blogSlice";
import { UserWall } from "./pages/UserWall";
import Wall from "./pages/Wall";

function App() {
  const dispatch = useDispatch();

  //we want to get the data from the backend as soon as the homepage loads
  useEffect(() => {
    dispatch(getTotalUsers(users));
    dispatch(getTotalWalls(walls));
    dispatch(getTotalBlogs(blogs));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/create-blog" exact element={<CreateBlog />}></Route>
        <Route path="/create-wall" exact element={<CreateWall />}></Route>
        <Route path="/create-user" exact element={<CreateUser />}></Route>
        <Route path="/user-wall" exact element={<UserWall />}></Route>
        <Route path="/wall" exact element={<Wall />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
<div className="App">
  <Home />
</div>;
