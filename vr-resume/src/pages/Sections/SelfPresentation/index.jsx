import Button from "../../../components/common/Button";
import TextAreatField from "../../../components/common/TextAreaField";

import styles from "./styles.module.scss";

const SelfPresentation = () => {
  const handleSubmit = () => {};
  const handleCancel = () => {};

  return (
    <form>
      <TextAreatField labelText="About Me Text" />
      <div className={styles.button_group}>
        <Button text="Cancel" onClick={handleCancel} />
        <Button text="Save" onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default SelfPresentation;
