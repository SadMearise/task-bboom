import styles from "./LoginPage.module.css";
import { SignInForm } from "../../components";

const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <SignInForm />
    </div>
  );
};

export default LoginPage;
