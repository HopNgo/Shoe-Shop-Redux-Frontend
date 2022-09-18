import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getComments,
  addComment,
  deleteComment,
  updateComment,
} from "../../api/commentApi.js";

export const getCommentsFn = createAsyncThunk(
  "comment/getComments",
  async () => {
    const res = await getComments();

    return res.data;
  }
);
export const addCommentFn = createAsyncThunk(
  "comment/addComment",
  async (payload) => {
    const res = await addComment(payload);

    return res.data;
  }
);
export const deleteCommentFn = createAsyncThunk(
  "comment/deleteComment",
  async (payload) => {
    const res = await deleteComment(payload);

    return res.data;
  }
);
export const updateCommentFn = createAsyncThunk(
  "comment/updateComment",
  async (payload) => {
    const res = await updateComment(payload);

    return res.data;
  }
);

const comment = createSlice({
  name: "comment",
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: {
    [getCommentsFn.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [addCommentFn.fulfilled]: (state, action) => {
      state.list.unshift(action.payload);
    },
    [deleteCommentFn.fulfilled]: (state, action) => {
      state.list = state.list.filter(
        (comment) => comment._id !== action.payload._id
      );
    },
    [updateCommentFn.fulfilled]: (state, action) => {
      const commentUpdate = action.payload;
      const indexCommentUpdate = state.list.findIndex(
        (comment) => comment._id === commentUpdate._id
      );

      if (indexCommentUpdate >= 0) {
        state.list[indexCommentUpdate] = commentUpdate;
      }
    },
  },
});

const { reducer } = comment;

export default reducer;
