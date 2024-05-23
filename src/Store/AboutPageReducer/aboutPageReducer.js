import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetcAboutPage = createAsyncThunk(
  "aboutPage/getAboutPage",

  async () => {
    let result = await axios.get(
      "http://mainserver.dealferov.ru/public/api/podofcast/aboutpage"
    );

    return result;
  }
);

const initialState = {
  aboutPageData: [],
  isLoading: false,
  isError: false,
};

export const aboutSlice = createSlice({
  name: "aboutPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetcAboutPage.pending, (state, action) => {
      console.log("fetcAboutPage-->", action);
      state.isLoading = true;
    });
    builder.addCase(fetcAboutPage.fulfilled, (state, action) => {
      console.log("fetcAboutPage-->", action);
      state.aboutPageData = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(fetcAboutPage.rejected, (state, action) => {
      console.log("fetcAboutPage-->", action.error.message);
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export default aboutSlice.reducer;
