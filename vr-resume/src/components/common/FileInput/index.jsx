import { useRef } from "react";
import styles from "./styles.module.scss";

const FileInput = ({
  labelText,
  name,
  fileRef,
  classes = "",
  customStyles = {},
}) => {
  const fileInputId = useRef(`file_input_${name}`);

  return (
    <div style={customStyles} className={`${styles.default_style} ${classes}`}>
      <label htmlFor={fileInputId.current}>{labelText}</label>
      <input
        className=""
        id={fileInputId.current}
        ref={fileRef}
        type="file"
        name={name}
      />
    </div>
  );
};

export default FileInput;
