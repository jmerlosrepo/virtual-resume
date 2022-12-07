import React from "react";

import styles from "./styles.module.scss";

const LinkButton = ({ text, onClick, classes = "", customStyles = {} }) => {
  return (
    <a
      style={customStyles}
      className={`${styles.default_linkButton_styles} ${classes}`}
      href="/#"
      onClick={onClick}
    >
      {text}
    </a>
  );
};

export default LinkButton;
