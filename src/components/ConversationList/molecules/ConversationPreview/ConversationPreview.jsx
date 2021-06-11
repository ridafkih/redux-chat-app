import React from "react";
import styles from "./ConversationPreview.module.css";

/**
 *
 * @param {{ id: number, name: string, previewText: string }} param0
 * @returns
 */
function ConversationPreview({ id, name, previewText }) {
  return (
    <div className={`${styles.container} ${styles.unread}`}>
      <div className={styles.avatar_container}></div>
      <div className={styles.metadata}>
        <div className={styles.name}>{name}</div>
        <div
          className={`${previewText ? styles.preview : styles.empty_preview}`}
        >
          {previewText || "No Messages..."}
        </div>
      </div>
    </div>
  );
}

export default ConversationPreview;
