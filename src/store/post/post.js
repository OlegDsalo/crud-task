import { createSlice, current } from "@reduxjs/toolkit";

const post = createSlice({
  name: 'post',
  initialState: {
    posts: [
      {
        id: 0,
        title: 'God of war',
        description: 'lorem',
      },
      {
        id: 1,
        title: 'dog eats banana',
        description: 'loredmd dasdasdasdas  das dsa dasd',
      },
    ],
    singlePost: '',
  },
  reducers: {
    getPost: (state, action) => {
      state.singlePost = state.posts.find((post) => post.id === action.payload);
    },
    addPost: (state, action) => {
      state.posts = [action.payload, ...state.posts];
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    editPost: (state, action) => {
      const {id} = action.payload;
      const posts = current(state.posts);
      state.posts = posts.map((post) => (post.id === id ? action.payload : post));
    },
  }
})

export const {addPost, deletePost, editPost, getPost} = post.actions;

export default post.reducer
