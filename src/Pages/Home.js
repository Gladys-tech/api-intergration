import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);
  return (
    <div  className="App-header1">
      <h1>MY LATIN BLOG</h1>
      {!data ? (
        // <h2>Load...</h2>

        <div class="d-flex justify-content-center">
        <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        </div>

      ) : (
        <div className="App-header">
          {[...data].map((info) => (
            <article key={info.id} className="App-id">
              <Link to={`/article/${info.id}`}>
                <h4>{info.title}</h4>
                <p>{info.body}</p>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;