import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const getAllProduct = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

export const getProductId = async (id) => {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  };


  export const getProductImage = async (id) => {
    const response = await axios.get(`${BASE_URL}/products/${id}/image`);
    return response.data;
  };
