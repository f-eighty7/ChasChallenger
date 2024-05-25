import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./Slices/FetchSlice";
import CharacterReducer from "./Slices/CharacterSlice";

const store = configureStore({
  reducer: {
    data: dataSlice,
    character: CharacterReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
