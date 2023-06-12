import { createAsyncThunk } from "@reduxjs/toolkit";
import { postAdminMealsRequest } from "../../api/mealsService";
import { getFoods } from "../meals/mealsThunk";

export const postAdminMeals = createAsyncThunk(
  "admin/postAdminMeals",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await postAdminMealsRequest(payload);

      dispatch(getFoods());

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
