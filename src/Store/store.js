import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./MainPageReducer/MainPageReducer";
import aboutSlice from "./AboutPageReducer/aboutPageReducer";

export const store = configureStore({
  reducer: {
    main: mainSlice,
    about: aboutSlice,
  },
});
