import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.window_buttons}>
        <button className={`${styles.window_button} ${styles.close}`}></button>
        <button
          className={`${styles.window_button} ${styles.minimize}`}
        ></button>
        <button
          className={`${styles.window_button} ${styles.fullscreen}`}
        ></button>
      </div>
    </div>
  );
}

export default Header;
