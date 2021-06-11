import React from "react";
import styles from "./Header.module.css";

import WindowActions from "./molecules/WindowActions/WindowActions";

function Header() {
  return (
    <div className={styles.container}>
      <WindowActions></WindowActions>
    </div>
  );
}

export default Header;
