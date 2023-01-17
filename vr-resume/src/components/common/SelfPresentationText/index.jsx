import styles from "./styles.module.scss";

const SelfPresentationText = ({
  selfPresentationData,
  customStyles,
  classNames,
  controls,
}) => {
  return (
    <div>
      Title
      <p>{selfPresentationData.title}</p>
      About Me Text
      <p className={classNames} style={customStyles}>
        {selfPresentationData.aboutMe}
      </p>
      {controls}
    </div>
  );
};

export default SelfPresentationText;
