import styles from "./styles.module.scss";

const Butron = ({ text, classes, customStyles, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={customStyles}
      className={`${styles.default_button_style} ${classes}`}
      value={text}
    >
      {text}
    </button>
  );
};

export default Butron;
