import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const fetchData = createAsyncThunk(
  "dictionary/fetchData",
  async function (word, { rejectWithValue }) {
    const res = await fetch(baseURL + word);
    const data = await res.json();
    if (res.status === 404) return rejectWithValue(data);
    return data;
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
      console.log(action.payload);
    },
  },
});

export default dictionarySlice.reducer;
export const { setWord } = dictionarySlice.actions;
