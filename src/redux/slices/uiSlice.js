import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    conversationId: 0,
  },
  reducers: {
    conversationSwitched: (state, action) => {
      return { conversationId: action.payload };
    },
    conversationClosed: (state, action) => {},
  },
});

export const { conversationSwitched, conversationClosed } = uiSlice.actions;
export default uiSlice.reducer;
