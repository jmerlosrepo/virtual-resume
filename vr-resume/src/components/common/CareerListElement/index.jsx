import ListElementDates from "../ListElementDates";
import ListElementDescription from "../ListElementDescription";
import ListElementHeader from "../ListElementHeader";

import styles from "./styles.module.scss";

const CareerListElement = ({ careerData, elementControls }) => {
  const { companyName, jobTitle, startDate, endDate, activities } = careerData;
  return (
    <div>
      <ListElementHeader className={styles.company} title={companyName} />
      <ListElementHeader className={styles.jobTitle} title={jobTitle} />
      <ListElementDates
        className={styles.dates}
        startDate={startDate}
        endDate={endDate}
      />
      <ListElementDescription className={styles.activities} text={activities} />
      {elementControls}
    </div>
  );
};

export default CareerListElement;
