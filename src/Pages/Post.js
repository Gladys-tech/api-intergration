import React, {  useState } from 'react'

function Post() {
const [data, setData] = useState("")
const [loading, setLoading] = useState(false);
const [inputs, setInputs] = useState({});

function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
}

function handleSubmit(event){
    event.preventDefault();
    setLoading(true);
    //
    //http://api-v3.safe-courier.ml/api/v1/auth/login
    fetch('https://jsonplaceholder.typicode.com/posts  ', {
        method: 'POST',
        body: JSON.stringify({
          title: inputs.title,
          body: inputs.body,
          userId: inputs.userId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
            setData(json)
    setLoading(false);
        
        });
}


// console.log(data);


  return (
    <div className="App">
    {loading ? 
    <div class="d-flex justify-content-center">
    <div class="spinner-border text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    </div>
     : (
      <>
    <h1>Forms</h1>
    <h2>title - {data.title}</h2>
    <p>{data.body}</p>
    <h2>userId - {data.userId}</h2>
    </>
    )}
    

    <form onSubmit={handleSubmit}>
      <label>title</label>
      <input
        type="text"
        name="title"
        value={inputs.title || ""}
        onChange={handleChange}
      />
      <br />
      <label>body</label>
      <input
        type="text"
        name="body"
        value={inputs.body || ""}
        onChange={handleChange}
      />
      <br />
      <label>userId</label>
      <input
        name="userId"
        type="text"
        value={inputs.userId || ""}
        onChange={handleChange}
      />
    
    <br></br>
      <input type="submit" />
    </form>
  </div>
  )
}

export default Post