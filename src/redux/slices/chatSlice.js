import faker from "faker";
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

function makeKeyGenerator(key = -1) {
  return function () {
    return ++key;
  };
}

const generateConversationKey = makeKeyGenerator();
const generateAuthorKey = makeKeyGenerator();

// I would never actually name a function this.
const generateMumboJumboConvo = () => {
  return [...Array(Math.ceil(Math.random() * 10))].map(() => {
    return {
      timestamp: new Date().getTime(),
      content: faker.hacker.phrase(),
      outgoing: Math.random() > 0.5,
    };
  });
};

const generateConversations = () => {
  return [...Array(Math.ceil(Math.random() * 15 + 3))].map(() => {
    return {
      id: generateConversationKey(),
      read: Math.random() > 0.5,
      target: {
        id: generateAuthorKey(),
        name: faker.fake("{{name.firstName}} {{name.lastName}}"),
        avatarUrl: faker.image.avatar(),
      },
      messages: generateMumboJumboConvo(),
    };
  });
};

const initialState = {
  conversations: generateConversations(),
};

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
          {
            ...conversation,
            messages: [...conversation.messages, message],
          },
          ...state.conversations.filter(
            (conversation) => conversation.id !== conversationId
          ),
        ],
      };
    },
    messageReceived: (state, action) => {
      const {
        conversationId,
        timestamp = new Date().getTime(),
        content,
      } = action.payload;

      const message = { timestamp, content, outgoing: false };
      const conversation = getRelevantConversation(state, conversationId);

      return {
        ...state,
        conversations: [
          {
            ...conversation,
            messages: [...conversation.messages, message],
            read: false,
          },
          ...state.conversations.filter(
            (conversation) => conversation.id !== conversationId
          ),
        ],
      };
    },
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
