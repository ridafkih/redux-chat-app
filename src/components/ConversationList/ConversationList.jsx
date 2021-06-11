import React from "react";
import { useSelector } from "react-redux";

import styles from "./ConversationList.module.css";

import ConversationSearch from "./molecules/ConversationSearch/ConversationSearch";
import ConversationPreview from "./molecules/ConversationPreview/ConversationPreview";

function ConversationList() {
  const { conversations } = useSelector((state) => state.chat);
  const { conversationId } = useSelector((state) => state.ui);

  return (
    <div className={styles.container}>
      <ConversationSearch></ConversationSearch>
      <div className={styles.list}>
        {conversations.map(({ id, read, target, messages }, index) => {
          const lastMessage = messages[messages.length - 1];
          const previewText = lastMessage ? lastMessage.content : "";

          return (
            <ConversationPreview
              id={id}
              selected={conversationId === id}
              read={read}
              avatar={target.avatarUrl}
              name={target.name}
              previewText={previewText}
              key={index}
            ></ConversationPreview>
          );
        })}
      </div>
    </div>
  );
}

export default ConversationList;
