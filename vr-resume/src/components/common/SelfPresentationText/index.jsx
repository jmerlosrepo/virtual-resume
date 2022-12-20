import styles from "./styles.module.scss";

const SelfPresentationText = ({ text, customStyles, classNames, controls }) => {
  return (
    <div>
      <p className={classNames} style={customStyles}>
        {text}
      </p>
      {controls}
    </div>
  );
};

export default SelfPresentationText;
