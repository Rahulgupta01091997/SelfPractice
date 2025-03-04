import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { MemoriesContext } from "../../context/Provider";
import { MEMORIES_URL } from "../../utils/constants";
import { CREATE_POST, UPDATE_POST } from "../../utils/actionTypes";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
  });

  const { state, dispatch } = useContext(MemoriesContext);
  console.log(state);
  const post = state.posts.find((post) => currentId === post._id);
  const clear = () => {
    setCurrentId(null);
    setPostData({ creator: "", title: "", message: "", tags: "" });
  };

  const createPost = async (newPost) => {
    try {
      const response = await axios.post(MEMORIES_URL, newPost);
      dispatch({ type: CREATE_POST, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  const updatePost = async (id, updatedPost) => {
    try {
      const response = await axios.patch(`${MEMORIES_URL}/${id}`, updatedPost);
      dispatch({ type: UPDATE_POST, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentId === null) {
      createPost(postData);
    } else {
      updatePost(currentId, postData);
    }
    clear();
  };

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  return (
    <Paper sx={{ padding: 2 }}>
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
        <Typography variant="h6">
          {currentId ? `Editing a memory` : "Creating a memory"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          sx={{ marginTop: "10px" }}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          sx={{ marginTop: "10px" }}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          sx={{ marginTop: "10px" }}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
          sx={{ marginTop: "10px" }}
        />
        <Button
          sx={{ margin: "20px 0px 10px" }}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth>
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          onClick={clear}
          fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
