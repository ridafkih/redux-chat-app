import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    conversationId: 0,
  },
  reducers: {
    switchConversation: (state, action) => {},
    closeConversation: (state, action) => {},
  },
});

export const { switchConversation, closeConversation } = uiSlice.actions;
export default uiSlice.reducer;
