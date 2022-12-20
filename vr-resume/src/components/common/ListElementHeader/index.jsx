import styles from "./styles.module.scss";

const ListElementHeader = ({ title, classNames = "", customStyles = {} }) => {
  return (
    <div styles={customStyles} className={classNames}>
      {title}
    </div>
  );
};

export default ListElementHeader;
