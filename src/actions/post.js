import axios from "axios";
import { setAlert } from "./alert";
import {
  FETCH_POSTS,
  GET_POSTS,
  GET_SEARCH_POSTS,
  GET_POST,
  POST_ERROR,
  DELETE_POST,
  ADD_POST,
} from "./types";
import { baseurl } from "../constants";

// Get posts
export const getPosts = (pageNumber, limit) => async (dispatch) => {
  dispatch({
    type: FETCH_POSTS,
  });
  try {
    const res = await axios.get(
      `${baseurl}/api/posts/?pageNumber=${pageNumber}&limit=${limit}`
    );

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getSearchPosts = (key, pageNumber, limit) => async (dispatch) => {
  if (!key) {
    dispatch(getPosts(pageNumber, limit));
    return;
  }
  dispatch({
    type: FETCH_POSTS,
  });
  try {
    const res = await axios.get(`${baseurl}/api/posts/search/${key}`);

    dispatch({
      type: GET_SEARCH_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(
      setAlert(err.response.statusText + " " + err.response.status, "red")
    );
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete Post
export const deletePost = (id, pageNumber, limit) => async (dispatch) => {
  try {
    await axios.delete(`${baseurl}/api/posts/${id}`);
    dispatch({
      type: DELETE_POST,
      payload: id,
    });
    dispatch(getPosts(pageNumber, limit));
    dispatch(setAlert("Post Removed", "green"));
  } catch (err) {
    dispatch(
      setAlert(err.response.statusText + " " + err.response.status, "red")
    );
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Post
export const addPost = (formData, callback) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(`${baseurl}/api/posts`, formData, config);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
    dispatch(setAlert("Post Added", "green"));
    callback();
  } catch (err) {
    dispatch(
      setAlert(err.response.statusText + " " + err.response.status, "red")
    );
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updatePost = (formData, id, callback) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.put(`${baseurl}/api/posts/${id}`, formData, config);
    // dispatch({
    //   type: ADD_POST,
    //   payload: res.data,
    // });
    dispatch(setAlert("Post updated", "green"));
    callback();
  } catch (err) {
    dispatch(
      setAlert(err.response.statusText + " " + err.response.status, "red")
    );
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get post
export const getPost = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_POSTS,
  });
  try {
    const res = await axios.get(`${baseurl}/api/posts/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch(
      setAlert(err.response.statusText + " " + err.response.status, "red")
    );
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
