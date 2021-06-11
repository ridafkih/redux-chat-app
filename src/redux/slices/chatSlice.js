import { createSlice } from "@reduxjs/toolkit";

/**
 * A user object.
 * @typedef {{ id: number, name: string, avatarUrl: string }} User
 */

/**
 * A message object.
 * @typedef {{ conversationId: number, timestamp: Date, content: string, outgoing: boolean }} Message
 */

/**
 * A conversation object.
 * @typedef {{ id: number, target: User, messages: Message[] }}
 */

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    conversations: [
      {
        id: 0,
        target: {
          id: 0,
          name: "Lupe Fiasco",
          avatarUrl: "",
        },
        messages: [
          {
            conversationId: 0,
            timestamp: new Date(),
            content:
              "I got two tickets to see this awesome movie, called Spongebob!",
            outgoing: false,
          },
          {
            conversationId: 0,
            timestamp: new Date(),
            content:
              "I got two tickets to see this awesome movie, called Spongebob!",
            outgoing: false,
          },
          {
            conversationId: 0,
            timestamp: new Date(),
            content:
              "I got two tickets to see this awesome movie, called Spongebob!",
            outgoing: true,
          },
          {
            conversationId: 0,
            timestamp: new Date(),
            content:
              "I got two tickets to see this awesome movie, called Spongebob!",
            outgoing: true,
          },
          {
            conversationId: 0,
            timestamp: new Date(),
            content: "",
            outgoing: false,
          },
        ],
      },
    ],
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
