import React from "react";
import Header from "./Header";
import styles from "./layout.module.scss";

const PrivateLayout = ({ children }) => {
  return (
    <div className={styles.mainConatiner}>
      <Header />
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
};

export default PrivateLayout;
