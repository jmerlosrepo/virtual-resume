import styles from "./styles.module.scss";

const DisplayLabel = ({ title, text, classNames = "", customStyles = {} }) => {
  return (
    <div
      className={`${styles.displayLabel} ${classNames}`}
      style={customStyles}
    >
      <span className={styles.labelText}>{title}: </span>
      {text}
    </div>
  );
};

export default DisplayLabel;
