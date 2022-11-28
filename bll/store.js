import { configureStore } from "@reduxjs/toolkit";
import taskSliceReducer from "./taskSlise";

export const store = configureStore({
    reducer: {
      task: taskSliceReducer,
    }
  });