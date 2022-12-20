import ListElementDates from "../ListElementDates";
import ListElementHeader from "../ListElementHeader";

import styles from "./styles.module.scss";

const EducationListElement = ({ educationData, elementControls }) => {
  const { institution, startDate, endDate, degree } = educationData;
  return (
    <div>
      <ListElementHeader
        classNames={styles.instutionName}
        title={institution}
      />
      <ListElementHeader className={styles.degree} title={degree} />
      <ListElementDates
        classNames={styles.dates}
        startDate={startDate}
        endDate={endDate}
      />
      {elementControls}
    </div>
  );
};

export default EducationListElement;
