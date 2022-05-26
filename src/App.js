import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home"
import Post from "./Pages/Post"
import Article from "./Pages/Article"
import Error from "./Pages/Error"
import Navigation from "./Components/Navigation/Index"
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login";
// import Home from "./Pages/home1";
import Logout from "./Pages/Logout";


import './App.css';
import { createContext, useState } from "react";


export const DataCreateContext = createContext();

function App() {


  const [data] = useState("hanniel");
  return (
    <div className="App">
      <DataCreateContext.Provider value={data}>
      <BrowserRouter>
      
      <Navigation/>
      
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route index element={<Home />} />
      <Route path="/post" element={<Post />}></Route>
      <Route path="/article/:id" element={<Article />}></Route>
      <Route path="*" element={<Error />}></Route>
      <Route path="/logout" element={<Logout/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </DataCreateContext.Provider>
    </div>
  );
}

export default App;
