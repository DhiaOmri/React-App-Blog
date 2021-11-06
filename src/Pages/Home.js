import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogListe from "./Components/BlogListe";
import Header from "./Components/Header";
import {getBlogs} from "../Actions/blogActions"
import "./Home.css";
const Home=()=> {
  const dispatch=useDispatch()
 
  
  return (
    <div className="mt-5">
  <Header></Header> 

 <BlogListe/> 

    </div>
  );
}

export default Home;
