import LinkButton from "../LinkButton";

import styles from "./styles.module.scss";

const EditDeleteControls = ({ elementId, onEdit, onDelete }) => {
  return (
    <div>
      <LinkButton onClick={() => onEdit(elementId)} text="Edit" />{" "}
      {onDelete && (
        <LinkButton onClick={() => onDelete(elementId)} text="Delete" />
      )}
    </div>
  );
};

export default EditDeleteControls;
