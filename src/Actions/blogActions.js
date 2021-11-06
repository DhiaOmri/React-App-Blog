import axios from "axios";
import { GET_BLOG, BLOG_ERRORS, SHOW_BLOG, FILTRE_BLOG, SEARCH_BLOG } from "./types";

export const getBlogs = () => async (dispatch) => {
  try {
    const res = await axios.get("/blogs"); // we added "proxy": "http://localhost:5000" in package.json
    dispatch({
      type: GET_BLOG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BLOG_ERRORS,
      payload: err.message,
    });
  }
};
export const showBloge = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/blogs/${id}`); // we added "proxy": "http://localhost:5000" in package.json
    dispatch({
      type: SHOW_BLOG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BLOG_ERRORS,
      payload: err.message,
    });
  }
};

export const filterBlog = (x) => {

  return {
    type: FILTRE_BLOG,
    payload:x,
  };
};
export const searchBloge = (y) => {
console.log(y);
  return {
    type: SEARCH_BLOG,
    payload:y,
  };
};