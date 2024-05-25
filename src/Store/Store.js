import { configureStore } from "@reduxjs/toolkit";
import dataSlice from './Slices/FetchSlice'
import CharacterReducer from "./Slices/CharacterSlice"

const store = configureStore({
    reducer: {
      data: dataSlice,
      character: CharacterReducer
    }
  });

  export default store

