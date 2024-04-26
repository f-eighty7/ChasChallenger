import axios from "axios";
import { Story, StoryId } from "../types/types";

const BASE_URL = "http://localhost:3000/storyId";

// CREATE
export const createStoryId = async (id: StoryId) => {
  const response = await axios.post(BASE_URL, id);
  return response;
};

//READ
export const getStoryId = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

//UPDATE
export const updateStoryId = async (story: Story) => {
  const response = await axios.put(`${BASE_URL}/${story.id}`, story);
  return response.data;
};

//DELETE
export const deleteStoryId = async (id: StoryId) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
