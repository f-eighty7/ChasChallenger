import { configureStore } from "@reduxjs/toolkit";
import dataSlice from './Slices/FetchSlice'

const store = configureStore({
    reducer: {
      data: dataSlice
    }
  });

  export default store

