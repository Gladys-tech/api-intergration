// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// // import Api from "../Api/index";


// const Home = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   // const [loading, setLoading] = useState(true);
//   // const [parcels, setParcels] = useState([]);

//   // const fetchParcels = async () => {
//   //   const res = await Api.get("/parcels");
//   //   const data = await res.json();
//   //   console.log(data);
//   //   setParcels(data.parcels);
//   //   setLoading(false);
//   // }

//   // const fetchParcelsById = async () => {
//   //   const res = await Api.get(`/parcels/${2}`);
//   //   const data = await res.json();
//   //   console.log(data);
//   // }

//   const [data, setData] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((json) => setData(json));
//   }, []);
//   console.log(data);


//   useEffect(() => {
//     const _user = JSON.parse(localStorage.getItem("user"));
//     if (typeof _user !== "undefined" || _user !== null) {
//       setUser(_user);
//     }

//     // fetchParcels();
//     // fetchParcelsById();

//     if(_user === null) {
//         navigate("/login");
//     }
    
//   }, [navigate]);
//   return <div className="App">
//     <h1>Home</h1>
//     <h3> Welcome {user?.email} </h3>


//     {!data ? (
//         // <h2>Load...</h2>

//         <div class="d-flex justify-content-center">
//         <div class="spinner-border text-warning" role="status">
//         <span class="visually-hidden">Loading...</span>
//         </div>
//         </div>

//       ) : (
//         <div className="App-header">
//           {[...data].map((info) => (
//             <article key={info.id} className="App-id">
//               <Link to={`/article/${info.id}`}>
//                 <h4>{info.title}</h4>
//                 <p>{info.body}</p>
//               </Link>
//             </article>
//           ))}
//         </div>
//       )}
//   </div>;
// };

// export default Home;