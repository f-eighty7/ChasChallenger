import axios from "axios";
import type { Story } from "../types/types";

const BASE_URL = "http://localhost:3000/resumeStory";

// CREATE
export const createStory = async (story: Story) => {
  const response = await axios.post(BASE_URL, story);
  return response.data;
};

//READ
export const getStories = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

//UPDATE
export const updateStory = async (story: Story) => {
  const response = await axios.put(`${BASE_URL}/${story.name}`, story);
  return response.data;
};

//DELETE
export const deleteStory = async (name: string) => {
  const response = await axios.delete(`${BASE_URL}/${name}`);
  return response.data;
};
