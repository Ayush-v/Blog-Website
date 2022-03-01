import React, { useEffect, useState } from "react";

const About = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <h1>About</h1>
      <p>{message && message}</p>
    </div>
  );
};

export default About;
