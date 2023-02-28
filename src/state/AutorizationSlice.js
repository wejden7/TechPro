import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { findAutorizationApi } from "utils/apis/autorization.api";

export const findAutorization = createAsyncThunk(
  "autorization/findAutorization",
  (_, thunkAPI) => findAutorizationApi()
);
const initialState = {
  data: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const AutorizationSlice = createSlice({
  name: "autorization",
  initialState,
  extraReducers(builder) {
    builder.addCase(findAutorization.fulfilled, (state, action) => {
      // console.log("find Autorization successful");
      // console.log(action.payload);
      state.data = action.payload.data;
    });
  },
});

export const getAutorizationStatus = (state) => state.autorization.status;
export const getAutorizationError = (state) => state.autorization.error;
export const getAutorization = (state) => state.autorization.data;

;
export default AutorizationSlice.reducer;
