import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState(null);

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const goback = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch("/blogs/" + path)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPost(data);
      })
      .catch((err) => console.log(err));
  }, [path]);

  const deleteIt = () => {
    fetch(`/blogs/${post._id}`, { method: "DELETE" })
      .then(() => {
        console.log("delete");
        navigate(-1);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="details-container">
      <button onClick={goback} className="back-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
            fill="rgba(255,255,255,1)"
          />
        </svg>
      </button>
      {post && (
        <div className="wrapper">
          <h1>{post.title}</h1>
          <p>{post.author}</p>
          <p>{post.body}</p>
        </div>
      )}
      <button onClick={deleteIt} className="delete">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M17 4h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5V2h10v2zM9 9v8h2V9H9zm4 0v8h2V9h-2z"
            fill="rgba(255,255,255,1)"
          />
        </svg>
      </button>
    </div>
  );
};

export default Detail;
