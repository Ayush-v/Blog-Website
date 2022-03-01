import React, { useState } from "react";

const Create = () => {
  const [data, setData] = useState({
    name: "",
    author: "",
    body: "",
  });

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("/add-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.name,
          author: data.author,
          body: data.body,
        }),
      });
      await res.json().then(() => {
        setData({
          name: "",
          author: "",
          body: "",
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  // const addNewBlog = (e) => {
  //   e.preventDefault();

  //   fetch("/add-blog", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: data.name,
  //       author: data.author,
  //       body: data.body,
  //     }),
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setData({
  //         name: "",
  //         author: "",
  //         body: "",
  //       });
  //       navigate("/home");
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="container">
      <div className="create">
        <form onSubmit={handleSubmit}>
          <label>Blog Title:</label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => handle(e)}
            required
          />
          <label>Author:</label>
          <input
            id="author"
            type="text"
            value={data.author}
            onChange={(e) => handle(e)}
            required
          />
          <label>Blog Body:</label>
          <textarea
            id="body"
            value={data.body}
            onChange={(e) => handle(e)}
            required
          />
          <button type="submit">Add Blog</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
