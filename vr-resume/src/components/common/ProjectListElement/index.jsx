import Image from "../Image";
import ListElementDates from "../ListElementDates";
import ListElementDescription from "../ListElementDescription";
import ListElementHeader from "../ListElementHeader";

import styles from "./styles.module.scss";

const ProjectListElement = ({ projectData, elementControls }) => {
  const { projectName, startDate, endDate, description, images } = projectData;
  return (
    <div>
      <ListElementHeader title={projectName} />
      <ListElementDates startDate={startDate} endDate={endDate} />
      <ListElementDescription text={description} />
      <div className={styles.gallery}>
        {images.map((image) => (
          <Image key={`img-${image.id}`} src={image.url} />
        ))}
      </div>
      {elementControls}
    </div>
  );
};

export default ProjectListElement;
