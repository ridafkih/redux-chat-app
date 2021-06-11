import React from "react";
import styles from "./Conversation.module.css";
import ConversationHeader from "./molecules/ConversationHeader/ConversationHeader";

function Conversation() {
  return (
    <div className={styles.container}>
      <ConversationHeader></ConversationHeader>
    </div>
  );
}

export default Conversation;
