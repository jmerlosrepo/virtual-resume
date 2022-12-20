import { useRef } from "react";
import Button from "../../components/common/Button";
import LinkButton from "../../components/common/LinkButton";
import TextInputField from "../../components/common/TextInputField";

import pageStyles from "../styles.module.scss";
import styles from "./styles.module.scss";

const Login = () => {
  const usernameFieldRef = useRef(null);
  const passwordFieldRef = useRef(null);

  const handleSubmit = () => {};
  const handleFormSubmit = () => {
    handleSubmit();
  };

  return (
    <div className={pageStyles.container}>
      <h1>Virtual Resume User Access</h1>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <TextInputField
          name="username"
          labelText="Username"
          inputRef={usernameFieldRef}
        />
        <TextInputField
          name="password"
          labelText="Password"
          inputRef={passwordFieldRef}
          isPassword={true}
        />
        <LinkButton text="Forgot password" />
        <Button text="Login" onClick={handleFormSubmit} />
      </form>
    </div>
  );
};

export default Login;
