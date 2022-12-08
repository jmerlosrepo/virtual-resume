import { useRouteError } from "react-router-dom";
import styles from "./styles.module.scss";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Error</h1>
      <section>
        <p>{error.statusText || error.message}</p>
      </section>
    </div>
  );
};

export default ErrorPage;
