import Button from "../../../components/common/Button";
import Image from "../../../components/common/Image";
import TextInputField from "../../../components/common/TextInputField";
import FileInput from "../../../components/common/FileInput";

import styles from "./styles.module.scss";

const Profile = () => {
  const handleSubmit = () => {};
  const handleCancel = () => {};

  return (
    <form>
      <Image alt="Profile Image" />
      <FileInput labelText="Profile Image" />
      <div className={styles.field_group_sides}>
        <TextInputField labelText="Username" />
        <TextInputField labelText="Email" />
      </div>
      <div className={styles.field_group_sides}>
        <TextInputField labelText="First Name" />
        <TextInputField labelText="Last Name" />
      </div>
      <div className={styles.field_group_sides}>
        <TextInputField labelText="Age" />
        <TextInputField labelText="Phone" />
      </div>
      <TextInputField labelText="Address" />
      <TextInputField labelText="Address 2" />
      <TextInputField labelText="Zip Code" />
      <div className={styles.button_group}>
        <Button text="Cancel" onClick={handleCancel} />
        <Button text="Save" onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default Profile;
