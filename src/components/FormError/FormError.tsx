import { FC } from "react";
import styles from "./FormError.module.css";
import clsx from "clsx";

type Props = {
  className?: string;
  message: string;
};

const FormError: FC<Props> = ({ className, message }) => {
  return <div className={clsx(styles["form-error"], className)}>{message}</div>;
};

export default FormError;
