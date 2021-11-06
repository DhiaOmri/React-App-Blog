import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../Actions/blogActions";
import BlogCard from "./BlogCard";

const BlogListe = () => {
  const dispatch = useDispatch();

  const [blogList, setBlogListe] = useState([]);
  const filtreBlogs = useSelector((state) => state.blog.filtredBlogs);
  const blogs = useSelector((state) => state.blog.blogs);
  const search = useSelector((state) => state.blog.searchResult);
  console.log(search);
  useEffect(() => {
    setBlogListe(blogs);
  }, [blogs]);

  useEffect(() => {
    setBlogListe(filtreBlogs);
  }, [filtreBlogs]);

  useEffect(() => {
    setBlogListe(search);
  }, [search]);
  
  const { loading, error } = useSelector((state) => state.blog);
  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  if (loading) {
    return <div>LOADING...</div>;
  }

  if (error) {
    return <div style={{ color: "red", marginTop: "100px" }}>{error}</div>;
  }
  return (
    <div className="container">
      <div className="row my-5">
        {blogList &&
          blogList.length > 0 &&
          blogList.map((e, i) => <BlogCard blog={e} key={i} />)}
      </div>
    </div>
  );
};

export default BlogListe;
