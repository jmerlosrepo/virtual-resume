import DisplayLabel from "../DisplayLabel";
import Image from "../Image";

import styles from "./styles.module.scss";

const UserProfile = ({ profileData, controls }) => {
  const {
    username,
    email,
    profileImage,
    firstName,
    lastName,
    age,
    gender,
    phone,
    address,
    address2,
    country,
    state,
    zip,
  } = profileData;
  return (
    <div>
      <Image
        classNames={styles.userProfileImage}
        alt={`${username} profile image`}
        src={profileImage}
      />
      <DisplayLabel title="Username" text={username} />
      <DisplayLabel title="Email" text={email} />
      <DisplayLabel title="First name" text={firstName} />
      <DisplayLabel title="Last name" text={lastName} />
      <DisplayLabel title="Age" text={age} />
      <DisplayLabel title="Gender" text={gender} />
      <DisplayLabel title="Phone" text={phone} />
      <DisplayLabel title="Address" text={address} />
      <DisplayLabel title="Address 2" text={address2} />
      <DisplayLabel title="Country" text={country} />
      <DisplayLabel title="State" text={state} />
      <DisplayLabel title="Zip Code" text={zip} />
      {controls}
    </div>
  );
};

export default UserProfile;
