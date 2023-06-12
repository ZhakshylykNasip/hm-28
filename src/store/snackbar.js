import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  severity: "",
  message: "",
  open: false,
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    doSuccess(state,action) {
      state.severity = "success";
      state.message = action.payload;
      state.open = true;
    },
    doError(state,action) {
      state.severity = "error";
      state.message = action.payload;
      state.open = true;
    },
    closeSnackbar(state) {
      state.open = false;
    },
  },
});

export const snackbarActions = snackbarSlice.actions;


