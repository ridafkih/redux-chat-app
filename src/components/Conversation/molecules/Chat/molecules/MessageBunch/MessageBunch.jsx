import React from "react";
import styles from "./MessageBunch.module.css";

/**
 * Message bunch component
 * @param {{ outgoing: boolean, messages: string | string[], timestamp: Date }}
 * @returns {React.ReactNode}
 */
function MessageBunch({ outgoing, messages, timestamp }) {
  return (
    <div
      className={`${styles.bunch} ${outgoing ? styles.outgoing : ""}`}
      data-timestamp={parseDateObject(timestamp)}
    >
      {typeof messages === "string" ? (
        <Message content={messages} />
      ) : (
        messages.map((messageContent, key) => {
          return <Message content={messageContent} key={key} />;
        })
      )}
    </div>
  );
}

/**
 * Singular message component.
 * @param {{ content: string }}
 * @returns {React.ReactNode}
 */
function Message({ content }) {
  return <div className={styles.message}>{content}</div>;
}

function parseDateObject(date = new Date()) {
  return date.toLocaleString();
}

export default MessageBunch;
