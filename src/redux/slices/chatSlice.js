import { createSlice } from "@reduxjs/toolkit";

/**
 * A user object.
 * @typedef {{ id: number, name: string, avatarUrl: string }} User
 */

/**
 * A message object.
 * @typedef {{ conversationId: number, timestamp: Date, content: string, me: boolean }} Message
 */

/**
 * A conversation object.
 * @typedef {{ id: number, target: User, messages: Message[] }}
 */

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    conversations: [],
  },
  reducers: {
    conversationAdded: (state, action) => {},
    messageSent: (state, action) => {},
    messageReceived: (state, action) => {},
  },
});

export const { conversationAdded, messageSent, messageReceived } =
  chatSlice.actions;

export default chatSlice.reducer;
