import { useRef } from "react";

import styles from "./styles.module.scss";

const TextInput = ({
  labelText,
  name,
  inputRef,
  classes = "",
  customStyles = {},
  isPassword = false,
}) => {
  const inputId = useRef(`input_${name}`);
  return (
    <div
      style={customStyles}
      className={`${styles.default_inputField_style} ${classes}`}
    >
      <label htmlFor={inputId.current}>{labelText}</label>
      <input
        ref={inputRef}
        type={isPassword ? "password" : "text"}
        id={inputId.current}
        name={name}
      />
    </div>
  );
};

export default TextInput;
