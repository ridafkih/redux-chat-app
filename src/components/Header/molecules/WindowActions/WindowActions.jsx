import React from "react";
import styles from "./WindowActions.module.css";

function WindowActions() {
  return (
    <div className={styles.container}>
      <button className={`${styles.button} ${styles.close}`}></button>
      <button className={`${styles.button} ${styles.minimize}`}></button>
      <button className={`${styles.button} ${styles.fullscreen}`}></button>
    </div>
  );
}

export default WindowActions;
