import styles from "./styles.module.scss";

const LinkButton = ({
  text,
  onClick = () => {},
  classes = "",
  customStyles = {},
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };
  return (
    <a
      style={customStyles}
      className={`${styles.default_linkButton_styles} ${classes}`}
      href="/#"
      onClick={(e) => handleClick(e)}
    >
      {text}
    </a>
  );
};

export default LinkButton;
