import { useRef } from "react";

import TextInputField from "../../components/common/TextInputField";
import Button from "../../components/common/Button";

import pageStyles from "../styles.module.scss";
import styles from "./styles.module.scss";

const Register = () => {
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const handleFormSubmit = () => {};

  return (
    <div className={pageStyles.container}>
      <h1>Create New Account</h1>
      <form className={styles.registerForm}>
        <TextInputField
          inputRef={usernameRef}
          name="username"
          labelText="Username"
        />
        <TextInputField
          inputRef={emailRef}
          name="email"
          labelText="Email"
          isPassword={true}
        />
        <TextInputField
          inputRef={passwordRef}
          name="password"
          labelText="Password"
          isPassword={true}
        />
        <TextInputField
          inputRef={confirmPasswordRef}
          name="confirmPassword"
          labelText="Confirm password"
        />
        <Button text="Submit" onClick={handleFormSubmit} />
      </form>
    </div>
  );
};

export default Register;
