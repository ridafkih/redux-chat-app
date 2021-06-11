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
 * @typedef {{ id: number, target: User, messages: Message[], read: boolean }}
 */

const initialState = {
  conversations: [
    {
      id: 0,
      read: false,
      target: {
        id: 0,
        name: "Lupe Fiasco",
        avatarUrl: "",
      },
      messages: [
        {
          timestamp: 1623391625250,
          content: "B",
          outgoing: false,
        },
        {
          timestamp: 1623391625250,
          content: "B",
          outgoing: true,
        },
        {
          timestamp: 1623391625250,
          content: "B",
          outgoing: false,
        },
        {
          timestamp: 1623391625250,
          content: "B",
          outgoing: true,
        },
        {
          timestamp: 1623391625250,
          content: "B",
          outgoing: false,
        },
        {
          timestamp: 1623391625250,
          content: "B",
          outgoing: true,
        },
        {
          timestamp: 1623391625250,
          content: "B",
          outgoing: true,
        },
      ],
    },
    {
      id: 1,
      read: true,
      target: {
        id: 0,
        name: "Dua Lipa",
        avatarUrl: "",
      },
      messages: [
        {
          timestamp: new Date().getTime(),
          content:
            "I got two tickets to see this awesome movie, called Spongebob!",
          outgoing: false,
        },
        {
          timestamp: new Date().getTime(),
          content:
            "I got two tickets to see this awesome movie, called Spongebob!",
          outgoing: false,
        },
        {
          timestamp: new Date().getTime(),
          content:
            "I got two tickets to see this awesome movie, called Spongebob!",
          outgoing: true,
        },
        {
          timestamp: new Date().getTime(),
          content:
            "I got two tickets to see this awesome movie, called Spongebob!",
          outgoing: true,
        },
        {
          timestamp: new Date().getTime(),
          content: "We don't do that here.",
          outgoing: false,
        },
      ],
    },
  ],
};

function makeKeyGenerator(key = -1) {
  return function () {
    return ++key;
  };
}

const { conversations } = initialState;
const generateKey = makeKeyGenerator(
  Math.max(...conversations.map((conversation) => conversation.id))
);

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    conversationAdded: (state, action) => {
      // ...
    },
    conversationRead: (state, action) => {
      return {
        ...state,
        conversations: state.conversations.map((conversation) => {
          if (conversation.id !== action.payload) return conversation;
          return { ...conversation, read: true };
        }),
      };
    },
    messageSent: (state, action) => {
      const {
        conversationId,
        timestamp = new Date().getTime(),
        content,
      } = action.payload;

      const message = { timestamp, content, outgoing: true };
      const conversation = getRelevantConversation(state, conversationId);

      return {
        ...state,
        conversations: [
          { ...conversation, messages: [...conversation.messages, message] },
          ...state.conversations.filter(
            (conversation) => conversation.id !== conversationId
          ),
        ],
      };
    },
    messageReceived: (state, action) => {},
  },
});

function getRelevantConversation(state, conversationId) {
  const conversationIndex = state.conversations.findIndex((conversation) => {
    return conversation.id === conversationId;
  });

  return state.conversations[conversationIndex];
}

export const {
  conversationAdded,
  conversationRead,
  messageSent,
  messageReceived,
} = chatSlice.actions;

export default chatSlice.reducer;
