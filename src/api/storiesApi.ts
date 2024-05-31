import axios from "axios";
import type { StoryText } from "../types/types";

/* const BASE_URL = "https://localhost:7110/api/ActiveStory/AddStory"; */
const BASE_URL =
  /* "https://chasfantasy.azurewebsites.net/api/ActiveStory/AddStory" */ "/api/ActiveStory/AddStory";

/* "https://localhost:7110/api/ActiveStory/AddStory" */
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

