import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Article() {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  function deleteHandler(event) {
    event.preventDefault();
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [id]);
  console.log(data);
  return (
    <div>
      {loading && <h1>Deleting....</h1>}

      {!data ? (
        // <h2>Loading...</h2>

        <div class="d-flex justify-content-center">
        <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        </div>
      ) : (
        <article className="article">
          <h3>USER-ID: {data.userId}</h3>
          <h5>{data.title}</h5>
          <p>{data.body}</p>
        </article>
      )}
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default Article;