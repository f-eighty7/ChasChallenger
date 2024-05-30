import axios from "axios";
import type { StoryText } from "../types/types";

/* const BASE_URL = "https://localhost:7110/api/ActiveStory/AddStory"; */
const BASE_URL = "https://chasfantasy.azurewebsites.net/api/ActiveStory/AddStory";

// CREATE
export const promptStoryText = async (text: StoryText) => {
  try {
    const response = await axios.post(BASE_URL, text);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error during API call", error);
    throw new Error("Failed to post story text");
  }
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
