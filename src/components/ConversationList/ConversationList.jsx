import React from "react";
import { useSelector } from "react-redux";
import styles from "./ConversationList.module.css";

import ConversationSearch from "./molecules/ConversationSearch/ConversationSearch";
import ConversationPreview from "./molecules/ConversationPreview/ConversationPreview";

function ConversationList() {
  const { conversations } = useSelector((state) => state.chat);
  console.log(conversations);

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
              read={read}
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
