import axios from "axios";
import { GET_BLOG, BLOG_ERRORS, ADD_BLOG } from "./types";

export const getBlogs = () => async (dispatch) => {
  try {
    const res = await axios.get("/blogs"); // we added "proxy": "http://localhost:5000" in package.json
    dispatch({
      type: GET_BLOG,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: BLOG_ERRORS,
      payload: err.message,
    });
  }
};

export const addBlog = () => async (dispatch) => {
  try {
    const res = await axios.get("/blogs"); // we added "proxy": "http://localhost:5000" in package.json
    dispatch({
      type: ADD_BLOG,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: BLOG_ERRORS,
      payload: err.message,
    });
  }
};