import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllOrderRequest } from "../../api/orederFoodService";

export const getFoods = createAsyncThunk(
  "meals/getMeals",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllOrderRequest();
      return data.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.message || "Something went wrong "
      );
    }
  }
);
