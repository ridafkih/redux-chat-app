import React from "react";
import styles from "./Body.module.css";

import ConversationList from "../ConversationList/ConversationList";
import Conversation from "../Conversation/Conversation";

function Body() {
  return (
    <div className={styles.container}>
      <ConversationList></ConversationList>
      <Conversation></Conversation>
    </div>
  );
}

export default Body;
