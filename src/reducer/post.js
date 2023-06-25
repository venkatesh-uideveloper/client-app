import {
  FETCH_POSTS,
  GET_POSTS,
  GET_POST,
  GET_SEARCH_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "../actions/types";

const intitialState = {
  posts: [],
  post: null,
  loading: true,
  data: {},
  error: {},
  pagination: true,
};

export default function (state = intitialState, action) {
  const { type, payload } = action;
  //   console.log(payload);
  switch (type) {
    case FETCH_POSTS:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: payload?.data?.records,
        data: payload?.data,
        pagination: true,
        loading: false,
      };
    case GET_SEARCH_POSTS: {
      return {
        ...state,
        posts: payload,
        pagination: false,
        loading: false,
      };
    }
    case GET_POST:
      return { ...state, post: payload, loading: false };
    case ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false,
      };
    case POST_ERROR:
      return { ...state, error: payload, loading: false };
    // case UPDATE_LIKES:
    //   return {
    //     ...state,
    //     posts: state.posts.map((post) =>
    //       post._id === payload.id ? { ...post, likes: payload.likes } : post
    //     ),
    //     loading: false,
    //   };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
        loading: false,
      };
    // case ADD_COMMENT:
    //   return {
    //     ...state,
    //     post: { ...state.post, comments: payload },
    //     loading: false,
    //   };
    // case REMOVE_COMMENT:
    //   return {
    //     ...state,
    //     post: {
    //       ...state.post,
    //       comments: state.post.comments.filter(
    //         (comment) => comment._id !== payload
    //       ),
    //     },
    //     loading: false,
    //   };
    default:
      return state;
  }
}
