import { createContext, useReducer } from "react";
import reducer from "../reducers/posts";

export const MemoriesContext = createContext();

const initialState = {
  posts: [],
  currentId: null,
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MemoriesContext.Provider value={{ state, dispatch }}>
      {children}
    </MemoriesContext.Provider>
  );
};

export default Provider;
