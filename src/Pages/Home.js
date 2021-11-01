import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogListe from "./Components/BlogListe";
import Header from "./Components/Header";
import {getBlogs} from "../Actions/blogActions"

import "./Home.css";
import BlogCard from "./Components/BlogCard";
function Home() {
  const {loading,blogs,error}= useSelector(state => state.blog);

  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getBlogs());
   
  }, []);

  if (loading) {
    return <div>LOADING...</div>;
  }

   if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }
  
  return (
    <div className="mt-5">
  <Header></Header> 

{blogs && blogs.length > 0 && <BlogListe blog={blogs}  /> 
// {blogs && blogs.length > 0 && blogs.map((e,i) =><BlogListe blog={e} key={i} /> 
        }
    </div>
  );
}

export default Home;
