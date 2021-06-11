import React from "react";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={styles.name}>Kendrick Lamar</div>
      <div className={styles.dropdown}></div>
    </div>
  );
}

export default Profile;
