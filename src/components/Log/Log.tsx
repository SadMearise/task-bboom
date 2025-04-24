import { FC, memo } from "react";
import styles from "./Log.module.css";

type Props = {
  log: string;
};

const Log: FC<Props> = ({ log }) => {
  return <div className={styles.log}>{log}</div>;
};

export default memo(Log);
