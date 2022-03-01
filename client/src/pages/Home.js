import React, { useEffect, useState } from "react";
import BlogList from "../Components/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("/blogs")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        // console.log(data);
        setBlogs(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <BlogList title="All Blogs!" blogs={blogs} />
    </div>
  );
};

export default Home;
