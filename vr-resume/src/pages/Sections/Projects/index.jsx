import { useRef } from "react";

import Button from "../../../components/common/Button";
import FileInput from "../../../components/common/FileInput";
import TextAreaField from "../../../components/common/TextAreaField";
import TextInputField from "../../../components/common/TextInputField";
import ThumbnailList from "../../../components/common/ThumbnailList";

import styles from "./styles.module.scss";

const Projects = () => {
  const project = {
    projectName: "",
    startDate: "",
    endDate: "",
    description: "",
    images: [
      {
        url: "",
      },
    ],
  };

  const projectNameRef = useRef("");
  const startDateRef = useRef("");
  const endDateRef = useRef("");
  const descriptionRef = useRef("");
  const projectImagesRef = useRef({});

  const handleThumbnailClick = () => {};
  const handleCancel = () => {};
  const handleAddImage = () => {};
  const handleSubmit = () => {};

  return (
    <form>
      <TextInputField
        labelText="Project Name"
        inputRef={projectNameRef}
        name="projectName"
      />
      <div className={styles.field_group_sides}>
        <TextInputField
          labelText="Start Date"
          inputRef={startDateRef}
          name="startDate"
        />
        <TextInputField
          labelText="End Date"
          inputRef={endDateRef}
          name="endDate"
        />
      </div>
      <TextAreaField
        labelText="Description"
        inputRef={descriptionRef}
        name="description"
      />
      <div
        className={`${styles.field_group_sides} ${styles.file_input_button}`}
      >
        <FileInput
          labelText="Project Screenshots"
          name="projectScreenshots"
          fileRef={projectImagesRef}
        />
        <Button text="Add Image" onClick={handleAddImage} />
      </div>
      <ThumbnailList
        onThumbnailButtonClick={handleThumbnailClick}
        images={[
          {
            src: "https://learn.microsoft.com/es-es/visualstudio/data-tools/media/raddata-data-source-drag-operation.png?view=vs-2022",
          },
        ]}
      />
      <div className={styles.button_group}>
        <Button text="Cancel" onClick={handleCancel} />
        <Button text="Save" onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default Projects;
