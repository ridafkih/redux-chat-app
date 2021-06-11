import React from "react";
import styles from "./Header.module.css";

import WindowActions from "./molecules/WindowActions/WindowActions";
import Profile from "./molecules/Profile/Profile";

function Header() {
  return (
    <div className={styles.container}>
      <WindowActions></WindowActions>
      <Profile></Profile>
    </div>
  );
}

export default Header;
