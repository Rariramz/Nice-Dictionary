import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const fetchData = createAsyncThunk(
  "dictionary/fetchData",
  async function (word, { rejectWithValue }) {
    try {
      const res = await fetch(baseURL + word);
      const data = await res.json();
      if (res.status === 404) return rejectWithValue(data);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState: {
    word: null,
    response: null,
    status: null,
    error: null,
  },
  reducers: {
    setWord(state, action) {
      state.word = action.payload;
    },
    clearAll(state) {
      state.response = null;
      state.error = null;
      state.status = null;
      state.word = null;
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
export const { setWord, clearAll } = dictionarySlice.actions;
