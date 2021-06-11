import React from "react";
import { useDispatch } from "react-redux";
import { conversationSwitched } from "../../../../redux/slices/uiSlice";
import { messageReceived } from "../../../../redux/slices/chatSlice";

import styles from "./ConversationPreview.module.css";

/**
 *
 * @param {{ id: number, name: string, previewText: string }} param0
 * @returns
 */
function ConversationPreview({ id, selected, read, name, previewText }) {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(conversationSwitched(id));
  };

  return (
    <div
      className={`
        ${styles.container} 
        ${read ? "" : styles.unread} ${selected ? styles.selected : ""}`}
      onClick={() => handleClick(id)}
    >
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
