import React from "react";
import styles from "./Conversation.module.css";
import Chat from "./molecules/Chat/Chat";
import ConversationHeader from "./molecules/ConversationHeader/ConversationHeader";

function Conversation() {
  return (
    <div className={styles.container}>
      <ConversationHeader />
      <Chat />
    </div>
  );
}

export default Conversation;
