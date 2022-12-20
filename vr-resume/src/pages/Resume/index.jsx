import Image from "../../components/common/Image";
import ResumeNavigation from "../../components/common/ResumeNavigation";

import pageStyles from "../styles.module.scss";
import styles from "./styles.module.scss";

const Resume = () => {
  return (
    <div className={pageStyles.container}>
      <div className={styles.resumeContainer}>
        <div>
          <Image
            src="http://localhost:3001/assets/profiles/profile1.jpeg"
            alt="Profile image"
            classNames={styles.profileImage}
          />
          <p>Name: </p>
          <p>Title: </p>
          <div>
            <div>
              <p>Phone:</p>
              <p>Email:</p>
            </div>
          </div>
          <div>
            <p>Social Networks</p>
          </div>
        </div>
        <ResumeNavigation />
      </div>
    </div>
  );
};

export default Resume;
