import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./MainPageReducer/MainPageReducer";

export const store = configureStore({
  reducer: {
    main: mainSlice,
  },
});
