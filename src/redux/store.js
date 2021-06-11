import { configureStore } from "@reduxjs/toolkit";
import chat from "./slices/chatSlice";
import ui from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    chat,
    ui,
  },
});
