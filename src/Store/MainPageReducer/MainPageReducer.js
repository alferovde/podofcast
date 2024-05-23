import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchMainPage = createAsyncThunk(
  "mainPage/getMainPage",

  async () => {
    let result = await axios.get(
      "http://mainserver.dealferov.ru/public/api/podofcast"
    );

    return result;
  }
);

const initialState = {
  mainPageData: [],
  isLoading: false,
  isError: false,
};

export const mainSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMainPage.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMainPage.fulfilled, (state, action) => {
      state.mainPageData = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(fetchMainPage.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export default mainSlice.reducer;
