import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { messageSent } from "../../../../../../redux/slices/chatSlice";

import styles from "./ChatInput.module.css";

import { FiMic, FiMessageSquare } from "react-icons/fi";

function ChatInput() {
  const { conversationId } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleChange = (ev) => {
    setValue(ev.target.value);
  };

  const handleKeyDown = (ev) => {
    if (ev.key !== "Enter" || !value) return;
    dispatch(
      messageSent({
        conversationId,
        timestamp: new Date().getTime(),
        content: value,
        outgoing: true,
      })
    );

    setValue("");
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input
          type="text"
          placeholder="Write a message..."
          className={styles.input}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
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
