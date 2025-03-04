import React, { useContext } from "react";
import axios from "axios";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { MemoriesContext } from "../../../context/Provider";
import { MEMORIES_URL } from "../../../utils/constants";
import { DELETE_POST, UPDATE_POST } from "../../../utils/actionTypes";

const Post = ({ post, setCurrentId }) => {
  const { dispatch } = useContext(MemoriesContext);

  const likePost = async (id) => {
    try {
      const response = await axios.patch(`${MEMORIES_URL}/${id}/likePost`);
      dispatch({ type: UPDATE_POST, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`${MEMORIES_URL}/${id}`);
      dispatch({ type: DELETE_POST, payload: id });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        height: "100%",
        position: "relative",
        boxShadow: "none",
        margin: "10px",
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}>
        <div style={{ width: "80%", textAlign: "left", paddingRight: "5px" }}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div style={{ width: "20%", textAlign: "center" }}>
          <Button
            style={{ color: "black" }}
            size="small"
            onClick={() => {
              setCurrentId(post._id);
            }}>
            <MoreHorizIcon fontSize="medium" />
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0px 20px 0px",
        }}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        style={{ textAlign: "left", wordWrap: "break-word" }}
        variant="h5"
        gutterBottom>
        {post.title}
      </Typography>
      <CardContent sx={{ padding: "0px", marginBottom: "10px" }}>
        <Typography
          style={{ textAlign: "left", wordWrap: "break-word" }}
          variant="body2"
          color="textSecondary"
          component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          padding: "0px",
          display: "flex",
          justifyContent: "space-between",
        }}>
        <Button
          size="small"
          color="primary"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          onClick={() => {
            likePost(post._id);
          }}>
          <FavoriteBorderIcon fontSize="small" /> &nbsp; {post.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            deletePost(post._id);
          }}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
