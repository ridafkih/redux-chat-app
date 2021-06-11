import React from "react";
import styles from "./ChatInput.module.css";

import { FiMic, FiMessageSquare } from "react-icons/fi";

function ChatInput() {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input
          type="text"
          placeholder="Write a message..."
          className={styles.input}
        />
      </label>
      <div className={styles.buttons}>
        <FiMic className={styles.icon} />
        <FiMessageSquare className={styles.icon} />
      </div>
    </div>
  );
}

export default ChatInput;
