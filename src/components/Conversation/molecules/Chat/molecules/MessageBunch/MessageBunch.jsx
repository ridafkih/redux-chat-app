import React from "react";
import styles from "./MessageBunch.module.css";

/**
 * Message bunch component
 * @param {{ outgoing: boolean, messages: string | string[], timestamp: number }}
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

function parseDateObject(timestamp = new Date().getTime()) {
  const date = new Date(timestamp);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const meridiem = hours >= 12 ? "pm" : "am";
  const parsedHours = hours === 0 ? 12 : hours % 12;
  const parsedMinutes = minutes < 10 ? "0" + minutes : minutes;

  const parsedTime = `${parsedHours}:${parsedMinutes}${meridiem}`;

  const weekday = date.toLocaleString("en", {
    weekday: "short",
  });

  const month = date.toLocaleString("en", {
    month: "short",
  });

  const day = date.getDate();
  const year = date.getFullYear();

  const parsed = `${parsedTime} on ${weekday}, ${month} ${day}, ${year}`;

  return parsed;
}

export default MessageBunch;
