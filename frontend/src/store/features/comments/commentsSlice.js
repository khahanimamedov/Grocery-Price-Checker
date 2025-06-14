import { createSlice } from "@reduxjs/toolkit";
import saveComments from "./commentsThunk";

const initialState = {
  status: null,
};

const comments = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveComments.fulfilled, (state, action) => {
      return { ...state, status: action.payload };
    });
  },
});

export default comments.reducer;
