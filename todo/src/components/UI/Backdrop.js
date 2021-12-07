import React from "react";
import { createPortal } from "react-dom";
import styles from "./Backdrop.module.scss";

const Backdrop = (props) => {
  const root = document.getElementById("backdrop-root");
  return (
    <React.Fragment>
      {createPortal(
        <div className={styles.overlay} onClick={props.onClick}></div>,
        root
      )}
    </React.Fragment>
  );
};

export default Backdrop;
