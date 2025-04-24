import styles from "./AuditLogs.module.css";
import clsx from "clsx";
import { FC } from "react";
import { Log } from "../Log";

type Props = {
  className?: string;
  logs: string[];
};

const AuditLogs: FC<Props> = ({ className, logs }) => {
  return (
    <div className={clsx(styles.logs, className)}>
      {logs.map((log, index) => (
        <Log
          key={index}
          log={log}
        />
      ))}
    </div>
  );
};

export default AuditLogs;
