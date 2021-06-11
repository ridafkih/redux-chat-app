import React from "react";
import { useSelector } from "react-redux";

import styles from "./ConversationHeader.module.css";

import { FiMessageSquare, FiVideo, FiPhone } from "react-icons/fi";

function ConversationHeader() {
  const { conversationId } = useSelector((state) => state.ui);
  const { conversations } = useSelector((state) => state.chat);

  const index = conversations.findIndex((x) => x.id === conversationId);
  const conversation = conversations[index];

  return (
    <div className={styles.container}>
      {conversation && (
        <>
          <div className={styles.recipient}>
            <div className={styles.avatar_container}>
              <img
                className={styles.avatar}
                src={conversation.target.avatarUrl}
                alt="avatar"
              />
            </div>
            <div className={styles.name}>{conversation.target.name}</div>
          </div>
          <div className={styles.actions}>
            <FiMessageSquare className={`${styles.icon} ${styles.selected}`} />
            <FiVideo className={styles.icon} />
            <FiPhone className={styles.icon} />
          </div>
        </>
      )}
    </div>
  );
}

export default ConversationHeader;
