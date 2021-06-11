import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { conversationRead } from "../../../../redux/slices/chatSlice";

import ChatInput from "./molecules/ChatInput/ChatInput";
import styles from "./Chat.module.css";

import MessageBunch from "./molecules/MessageBunch/MessageBunch";

function Chat() {
  const dispatch = useDispatch();

  const { conversationId } = useSelector((state) => state.ui);
  const { conversations } = useSelector((state) => state.chat);

  const index = conversations.findIndex((x) => x.id === conversationId);
  const conversation = conversations[index];

  useEffect(() => {
    dispatch(conversationRead(conversationId));
  }, [conversationId, dispatch]);

  /**
   * Bunch the messages by their outgoing status.
   */
  const bunchMessages = () => {
    const bunches = [];

    if (!conversation) return [];
    for (let [index, message] of conversation.messages.entries()) {
      const { messages } = conversation;
      const last = messages[index - 1];

      if (!last) bunches.push([message]);
      else if (last.outgoing !== message.outgoing) bunches.push([message]);
      else bunches[bunches.length - 1].push(message);
    }

    return bunches;
  };

  return (
    <div className={styles.container}>
      <div className={styles.messages}>
        {bunchMessages().map((bunch, index) => {
          const { timestamp, outgoing } = bunch[bunch.length - 1];
          return (
            <MessageBunch
              timestamp={timestamp}
              outgoing={outgoing}
              messages={bunch.map(({ content }) => content)}
              key={index}
            />
          );
        })}
      </div>
      <ChatInput />
    </div>
  );
}

export default Chat;
