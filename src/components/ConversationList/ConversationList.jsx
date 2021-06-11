import React from "react";
import styles from "./ConversationList.module.css";

import ConversationSearch from "./molecules/ConversationSearch/ConversationSearch";
import ConversationPreview from "./molecules/ConversationPreview/ConversationPreview";

function ConversationList() {
  return (
    <div className={styles.container}>
      <ConversationSearch></ConversationSearch>
      <div className={styles.list}>
        <ConversationPreview></ConversationPreview>
        <ConversationPreview></ConversationPreview>
        <ConversationPreview></ConversationPreview>
      </div>
    </div>
  );
}

export default ConversationList;
