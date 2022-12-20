import { useRef } from "react";

import styles from "./styles.module.scss";

const TextAreaField = ({
  labelText,
  name,
  textAreaRef,
  cols = "30",
  rows = "10",
  customStyles = {},
  classes = "",
}) => {
  const itextAreaId = useRef(`text_area_${name}`);

  return (
    <div
      style={customStyles}
      className={`${styles.default_textArea_style} ${classes}`}
    >
      <label htmlFor={itextAreaId.current}>{labelText}</label>
      <textarea
        ref={textAreaRef}
        name={name}
        id={itextAreaId.current}
        cols={cols}
        rows={rows}
      ></textarea>
    </div>
  );
};

export default TextAreaField;
