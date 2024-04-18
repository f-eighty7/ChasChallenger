//@ts-nocheck
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';


interface DataState {
  entities: any[];
  loading: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

interface FetchResponse {
  [key: string]: any;
}

export const fetchData = createAsyncThunk<FetchResponse, string, {rejectValue: string }>(
    'data/fetchData',
    async (url, thunkAPI) => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        console.log("KOLLA DET FUNKADE!!!! FÖR FAN!!!!", response)
        const data = await response.json();
        return data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


const dataSlice = createSlice({
  name: 'data',
  initialState: {
    entities: [],
    loading: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.entities = action.payload;
      })
      .addCase(fetchData.rejected, (state, action: PayloadAction<string>) => {
        state.loading = 'failed';
        state.error = action.payload;
      });
  }
});

export default dataSlice.reducer;
