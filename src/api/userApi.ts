import axios from "axios";
import type { Register } from "../types/types";

const BASE_URL = "http://localhost:3000/user";

// CREATE
export const createUser = async (user: Register) => {
  const response = await axios.post(BASE_URL, user);
  return response.data;
};

//READ
export const getAllUser = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

//UPDATE
export const updateUser = async (user: Register) => {
  const response = await axios.put(`${BASE_URL}/${user.email}`, user);
  return response.data;
};

//DELETE
export const deleteStory = async (email: string) => {
  const response = await axios.delete(`${BASE_URL}/${email}`);
  return response.data;
};
