import { useRef } from "react";
import { useParams } from "react-router-dom";

import Button from "../../../components/common/Button";
import TextInputField from "../../../components/common/TextInputField";
import TextAreatField from "../../../components/common/TextAreaField";

import styles from "./styles.module.scss";

const Career = () => {
  let carrerId = "";

  if (Object.keys(useParams()).length > 0) {
    carrerId = useParams().carrerId;
  }

  const career = {
    companyName: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    activities: "",
  };

  const companyRef = useRef("");
  const jobTitleRef = useRef("");
  const startDateRef = useRef("");
  const endDateRef = useRef("");
  const jobActivitiesRef = useRef("");

  const handleSubmit = () => {
    career.companyName = companyRef.current.value;
    career.jobTitle = jobTitleRef.current.value;
    career.startDate = startDateRef.current.value;
    career.endDate = endDateRef.current.value;
    career.activities = jobActivitiesRef.current.value;
  };

  const handleCancel = () => {};

  return (
    <form className="">
      <TextInputField
        labelText="Company"
        inputRef={companyRef}
        name="company"
      />
      <TextInputField
        labelText="Job Title"
        inputRef={jobTitleRef}
        name="jobTitle"
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
      <TextAreatField
        name="jobActivities"
        labelText="Activities"
        textAreaRef={jobActivitiesRef}
      />
      <div className={styles.button_group}>
        <Button text="Cancel" onClick={handleCancel} />
        <Button text="Save" onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default Career;
