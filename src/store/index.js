import { configureStore } from "@reduxjs/toolkit";
import { mealsSlice } from "./meals/mealsSlice";
import { basketSlice } from "./basket/basketSlice";
import { snackbarSlice } from "./snackbar";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    [mealsSlice.name]: mealsSlice.reducer,
    [basketSlice.name]: basketSlice.reducer,
    [snackbarSlice.name]:snackbarSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
});
