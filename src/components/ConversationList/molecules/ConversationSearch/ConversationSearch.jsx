import React from "react";
import styles from "./ConversationSearch.module.css";

function ConversationSearch() {
  return (
    <div className={styles.container}>
      <label className={styles.field_region}>
        <div className={styles.input_icon}></div>
        <input className={styles.input} type="text" placeholder="Search..." />
      </label>
      <button className={styles.add_conversation}></button>
    </div>
  );
}

export default ConversationSearch;
