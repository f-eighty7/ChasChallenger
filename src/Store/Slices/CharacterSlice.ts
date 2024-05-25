import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import SelectedCharacter from "../../types/SelectedCharacter";

const initialState: SelectedCharacter = {
    id: 0,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    selectedCharacterId: (state, action: PayloadAction<number | undefined>) => {
      state.id = action.payload;
      console.log(state.id);
      
    },
  },
});


export const { selectedCharacterId } = characterSlice.actions;

export default characterSlice.reducer;
