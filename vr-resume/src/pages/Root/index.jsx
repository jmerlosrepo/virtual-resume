import { Outlet, useNavigation } from "react-router-dom";
import GeneralNavigation from "../../components/common/GeneralNavigation";

import styles from "./styles.module.scss";

const Root = () => {
  const navigation = useNavigation();

  return (
    <div>
      <GeneralNavigation />
      <section
        className={`${styles.pageContent}  ${
          navigation.state === "loading" ? styles.pageLoading : ""
        }`}
      >
        <Outlet />
      </section>
    </div>
  );
};

export default Root;
