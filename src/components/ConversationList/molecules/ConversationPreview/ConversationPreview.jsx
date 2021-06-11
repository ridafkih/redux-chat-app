import React from "react";
import styles from "./ConversationPreview.module.css";

function ConversationPreview() {
  return (
    <div className={`${styles.container} ${styles.unread}`}>
      <div className={styles.avatar_container}></div>
      <div className={styles.metadata}>
        <div className={styles.name}>Lupe Fiasco</div>
        <div className={styles.preview}>
          I got two tickets to go see this awesome show, it's called Spongebob
          Squarepants.
        </div>
      </div>
    </div>
  );
}

export default ConversationPreview;
