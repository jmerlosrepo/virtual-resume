import styles from "./styles.module.scss";

const ListElementDescription = ({
  text,
  classNames = "",
  customStyles = {},
}) => {
  return (
    <p style={customStyles} className={classNames}>
      {text}
    </p>
  );
};

export default ListElementDescription;
