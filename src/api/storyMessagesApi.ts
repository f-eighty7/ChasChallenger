import axios from "axios";
// import type { StoryMessages } from "../types/types";

const BASE_URL =
  "https://localhost:7110/api/Chat/Chathistory?activeStoryId=5&amountPerPage=20&pageNumber=1";

//ADD
// export const addStoryMessage = async (message: StoryMessages) => {
//   const response = await axios.post(BASE_URL, message);
//   return response.data;
// };

//READ
export const getStoryMessages = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch story message:", error);
    return null;
  }
};

//UPDATE
// export const updateStoryMessage = async (message: StoryMessages) => {
//   const response = await axios.put(`${BASE_URL}/${message.text}`, message);
//   return response.data;
// };

//DELETE
// export const deleteStoryMessage = async (text: string) => {
//   const response = await axios.delete(`${BASE_URL}/${text}`);
//   return response.data;
// };
