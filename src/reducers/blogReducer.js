import {
  GET_BLOG,
  BLOG_ERRORS,
  SHOW_BLOG,
  FILTRE_BLOG,
  SEARCH_BLOG,
} from "../Actions/types";

const initialState = {
  blogs: null,
  current: null,
  loading: true,
  error: null,
  filtredBlogs: [],
  searchResult: [],
};

export default (state = initialState, action, payload) => {
  switch (action.type) {
    case GET_BLOG:
      return {
        ...state,
        blogs: action.payload,
        loading: false,
      };
    case SHOW_BLOG:
      return {
        ...state,
        blogs: action.payload,
        loading: false,
      };
    case FILTRE_BLOG:
      return {
        ...state,
        filtredBlogs:
          action.payload.toLowerCase() === "it"?
           state.blogs.filter((blog) => blog.category.toLowerCase() === "it"):
           action.payload.toLowerCase() === "sport"?
           state.blogs.filter((blog) => blog.category.toLowerCase() === "sport"):
           action.payload.toLowerCase() === "fitness"?
           state.blogs.filter((blog) => blog.category.toLowerCase() === "fitness"):
           action.payload.toLowerCase() === "lifestyle"?
           state.blogs.filter((blog) => blog.category.toLowerCase() === "lifestyle"):
           action.payload.toLowerCase() === "music"?
           state.blogs.filter((blog) => blog.category.toLowerCase() === "music"):
           action.payload.toLowerCase() === "travel"?
           state.blogs.filter((blog) => blog.category.toLowerCase() === "travel"):
             state.blogs,
      };
      case SEARCH_BLOG:
        return {
          ...state,
          searchResult: state.blogs.filter((blog) => blog.title.toLowerCase().startsWith(action.payload.toLowerCase().trim()))
        };
    case BLOG_ERRORS:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
