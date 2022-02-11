import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const fetchData = createAsyncThunk(
  "dictionary/fetchData",
  async function (word, { rejectWithValue }) {
    try {
      const res = await fetch(baseURL + word);
      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState: {
    word: "",
    response: null,
    status: null,
    error: null,
  },
  reducers: {
    setWord(state, action) {
      state.word = action.payload;
    },
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.response = action.payload;
    },
    [fetchData.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default dictionarySlice.reducer;
export const { setWord } = dictionarySlice.actions;
