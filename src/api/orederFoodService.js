import { axiosInstance } from "../config/axiosInstance";

export const getAllOrderRequest = () => {
  return axiosInstance.get("/foods");
};

export const getBasketRequest = () => {
  return axiosInstance.get("/basket");
};

export const addBasketRequest = (payload) => {
  return axiosInstance.post(`/foods/${payload.id}/addToBasket`, {
    amount: payload.amount,
  });
};

export const incrementBasketRequest = (payload) => {
  return axiosInstance.put(`/basketItem/${payload.id}/update`, {
    amount: payload.amount + 1,
  });
};

export const decrementBasketRequest = (payload) => {
  return axiosInstance.put(`/basketItem/${payload.id}/update`, {
    amount: payload.amount,
  });
};

export const deleteBasketRequest = (payload) => {
  return axiosInstance.delete(`/basketItem/${payload.id}/delete`);
};
