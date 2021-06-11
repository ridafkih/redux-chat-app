import React from "react";
import styles from "./ChatInput.module.css";

function ChatInput() {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input type="text" className={styles.input} />
      </label>
      <div className={styles.buttons}></div>
    </div>
  );
}

export default ChatInput;
