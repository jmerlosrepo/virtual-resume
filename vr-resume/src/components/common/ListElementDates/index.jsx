import styles from "./styles.module.scss";

const ListElementDates = ({
  startDate,
  endDate,
  classNames = "",
  customStyles = {},
}) => {
  return (
    <div className={classNames} style={customStyles}>
      <span>{startDate}</span> - <span>{endDate}</span>
    </div>
  );
};

export default ListElementDates;
