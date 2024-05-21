//@ts-nocheck
import axios from "axios";

const BASE_URL = "http://localhost:8000/addCharacter";

// CREATE
export const createCharacter = async (character) => {
  const response = await axios.post(BASE_URL, character);
  return response.data;
};

//READ
export const getAllCharacters = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

//UPDATE
export const updateCharacter = async (character) => {
  const response = await axios.put(`${BASE_URL}/${character.name}`, character);
  return response.data;
};

//DELETE
export const deleteCharacter = async (name: string) => {
  const response = await axios.delete(`${BASE_URL}/${name}`);
  return response.data;
};
