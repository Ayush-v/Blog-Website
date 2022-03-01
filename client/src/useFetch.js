import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [comments, setComments] = useState(null);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setComments(data);
        setLoding(false);
        setError(null);
      })
      .catch((err) => {
        setLoding(false);
        console.log(err.message);
        setError(err.message);
      });
  });
  return { comments, loading, error };
};

export default useFetch;
