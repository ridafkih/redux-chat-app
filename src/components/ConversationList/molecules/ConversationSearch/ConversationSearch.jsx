import React from "react";
import styles from "./ConversationSearch.module.css";

import { FiSearch, FiEdit } from "react-icons/fi";

function ConversationSearch() {
  return (
    <div className={styles.container}>
      <label className={styles.field_region}>
        <FiSearch className={styles.icon} />
        <input className={styles.input} type="text" placeholder="Search..." />
      </label>
      <button className={styles.add_conversation}>
        <FiEdit />
      </button>
    </div>
  );
}

export default ConversationSearch;
