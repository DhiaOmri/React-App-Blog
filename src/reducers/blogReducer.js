import { GET_BLOG, BLOG_ERRORS, ADD_BLOG } from "../Actions/types";

const initialState = {
  blogs: null,
  current: null,
  loading: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOG:
      return {
        ...state,
        blogs: action.payload,
        loading: false,
    };
    case ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
        loading: false,
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
