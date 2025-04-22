import styles from "./SignInPage.module.css";
import { SignInForm } from "../../components";

const SignInPage = () => {
  return (
    <div className={styles.wrapper}>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
