import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  FETCH_ALL_POST,
  SET_CURRENT_POST_ID,
} from "../utils/actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_ALL_POST:
      return { ...state, posts: action.payload, currentId: null };
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        currentId: null,
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
        currentId: null,
      };
    case SET_CURRENT_POST_ID:
      return { ...state, currentId: action.payload };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
        currentId: null,
      };
    default: {
      throw Error("Unknown action", action.type);
    }
  }
};

export default reducer;
