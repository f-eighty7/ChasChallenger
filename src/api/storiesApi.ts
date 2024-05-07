import axios from "axios";
import type { StoryText } from "../types/types";

const BASE_URL = "http://localhost:8000/stories";

// CREATE
export const promptStoryText = async (text: StoryText) => {
  const response = await axios.post(BASE_URL, text);
  return response.data;
};

//READ
// export const getStory = async () => {
//   const response = await axios.get(BASE_URL);
//   return response.data;
// };

//UPDATE
// export const updateStory = async (story: Story) => {
//   const response = await axios.put(`${BASE_URL}/${story.name}`, story);
//   return response.data;
// };

//DELETE
// export const deleteStory = async (name: string) => {
//   const response = await axios.delete(`${BASE_URL}/${name}`);
//   return response.data;
// };
