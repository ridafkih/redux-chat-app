import React from "react";
import styles from "./Chat.module.css";

function Chat() {
  return (
    <div className={styles.container}>
      <div
        className={styles.bunch}
        data-timestamp="10:30am on Tue, Mar 23, 2015"
      >
        <div className={styles.message}>This is the message content.</div>
        <div className={styles.message}>
          This is the message contentThis is the message contentThis is the
          message contentThis is the message contentThis is the message
          contentThis is the message contentThis is the message contentThis is
          the message content.
        </div>
      </div>
      <div
        className={`${styles.bunch} ${styles.outgoing}`}
        data-timestamp="10:30am on Tue, Mar 23, 2015"
      >
        <div className={styles.message}>This is the message content.</div>
        <div className={styles.message}>
          This is the message contentThis is the message contentThis is the
          message contentThis is the message contentThis is the message
          contentThis is the message contentThis is the message contentThis is
          the message content.
        </div>
      </div>
    </div>
  );
}

export default Chat;
