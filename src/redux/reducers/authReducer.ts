import { createSlice } from "@reduxjs/toolkit";
import { Root } from "react-dom/client";
import { RootState } from "../store";

const initialState = {
  token: "",
  _id: "",
  rule: 0,
  name: "",
};

export interface AuthTypeState {
  token: string;
  _id: string;
  rule: number;
  name: string;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: initialState,
  },
  reducers: {
    addAuth: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { addAuth } = authSlice.actions;

export const authSelector = (state: RootState) => state.authReducer.data;
