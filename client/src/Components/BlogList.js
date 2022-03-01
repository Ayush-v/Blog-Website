import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ title, blogs }) => {
  return (
    <div>
      <h1>{title}</h1>
      {blogs &&
        blogs.map((index) => (
          <div key={index._id} className="border">
            <Link to={`/blogs/${index._id}`}>
              <div key={index.id} className="blog-preview">
                <h1>{index.title}</h1>
                <p>Written by {index.author}</p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BlogList;
