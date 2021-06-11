import React from "react";
import styles from "./ConversationHeader.module.css";

import { FiMessageSquare, FiVideo, FiPhone } from "react-icons/fi";

function ConversationHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.recipient}>
        <div className={styles.avatar}></div>
        <div className={styles.name}>Lupe Fiasco</div>
      </div>
      <div className={styles.actions}>
        <FiMessageSquare className={`${styles.icon} ${styles.selected}`} />
        <FiVideo className={styles.icon} />
        <FiPhone className={styles.icon} />
      </div>
    </div>
  );
}

export default ConversationHeader;
