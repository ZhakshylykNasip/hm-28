import { createAsyncThunk } from "@reduxjs/toolkit";
import { signIn, signUp } from "../../api/authService";
import { STOREGE_KEY } from "../../constants";

export const signUpRequest = createAsyncThunk(
  "auth/signUp",
  async (data, { rejectWithValue }) => {
    try {
      const response = await signUp(data);
      console.log("response: ", response);

      localStorage.setItem(
        STOREGE_KEY.AUTH_KEY,
        JSON.stringify(response.data.data.data)
      );

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signInRequest = createAsyncThunk(
  "auth/signIn",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await signIn(payload);

      localStorage.setItem(
        STOREGE_KEY.AUTH_KEY,
        JSON.stringify(response.data.data)
      );

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const logOut = ()=>{
//   return localStorage.clear()
// }
