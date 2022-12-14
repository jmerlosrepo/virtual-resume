import { useRef } from "react";

import Button from "../../../components/common/Button";
import TextInputField from "../../../components/common/TextInputField";

import styles from "./styles.module.scss";

const Education = () => {
  const education = {
    institution: "",
    degree: "",
    startDate: "",
    endDate: "",
  };

  const institutionRef = useRef("");
  const degreeRef = useRef("");
  const startDateRef = useRef("");
  const endDateRef = useRef("");

  const handleSubmit = () => {
    education.institution = institutionRef.current.value;
    education.degree = degreeRef.current.value;
    education.startDate = startDateRef.current.value;
    education.endDate = endDateRef.current.value;
  };
  const handleCancel = () => {};

  return (
    <form>
      <TextInputField
        labelText="Institution"
        inputRef={institutionRef}
        name="institution"
      />
      <TextInputField labelText="Degree" inputRef={degreeRef} name="degree" />
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
      <div className={styles.button_group}>
        <Button text="Cancel" onClick={handleCancel} />
        <Button text="Save" onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default Education;
