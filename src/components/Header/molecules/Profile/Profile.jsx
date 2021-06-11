import React from "react";
import styles from "./Profile.module.css";

import faker from "faker";

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar_container}>
        <img
          src={faker.image.avatar()}
          alt="user avatar"
          className={styles.avatar}
        />
      </div>
      <div className={styles.name}>
        {faker.fake("{{name.firstName}} {{name.lastName}}")}
      </div>
      <div className={styles.dropdown}></div>
    </div>
  );
}

export default Profile;
