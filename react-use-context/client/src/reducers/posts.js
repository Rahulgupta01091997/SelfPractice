import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  FETCH_ALL_POST,
} from "../utils/actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_ALL_POST:
      return { ...state, posts: action.payload };
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    default: {
      throw Error("Unknown action", action.type);
    }
  }
};

export default reducer;
