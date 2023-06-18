import React, { useEffect } from "react";
import FeedTuners from "../components/FeedTuners";
import BlogCard from "../components/BlogCard";
import styles from "./feed.module.css";
import { useSelector } from "react-redux";

const Feed = () => {
  const blogs = useSelector((state) => state.blogs.totalBlogs);
  console.log("blogs         ");
  console.log(blogs);
  return (
    <div>
      <FeedTuners></FeedTuners>
      <div className={styles.blogGrid}>
        {blogs && blogs.map((blog) => <BlogCard data={blog} key={blog.id} />)}
      </div>
    </div>
  );
};

export default Feed;
