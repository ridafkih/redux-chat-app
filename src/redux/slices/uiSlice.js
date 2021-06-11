import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    conversation: null,
  },
  reducers: {
    switchConversation: (state, action) => {},
  },
});

export const { switchConversation } = uiSlice.actions;
export default uiSlice.reducer;
