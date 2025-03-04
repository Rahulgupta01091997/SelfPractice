import React, { useContext, useEffect, useState } from "react";
import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { MEMORIES_URL } from "./utils/constants";
import { FETCH_ALL_POST } from "./utils/actionTypes";
import axios from "axios";
import { MemoriesContext } from "./context/Provider";

const App = () => {
  const { dispatch } = useContext(MemoriesContext);
  const [currentId, setCurrentId] = useState(null);

  const getPosts = async () => {
    const { data } = await axios.get(MEMORIES_URL);
    dispatch({ type: FETCH_ALL_POST, payload: data });
  };

  useEffect(() => {
    getPosts();
  }, [currentId]);

  return (
    <Container maxWidth="lg">
      <Header />
      <Home currentId={currentId} setCurrentId={setCurrentId} />
    </Container>
  );
};

export default App;
