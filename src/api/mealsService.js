import { axiosInstance } from "../config/axiosInstance";

export const postAdminMealsRequest = (data) => {
  return axiosInstance.post("foods", data);
};
