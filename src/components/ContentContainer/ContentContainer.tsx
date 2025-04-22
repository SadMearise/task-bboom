import clsx from "clsx";
import styles from "./ContentContainer.module.css";
import { FC, PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const ContentContainer: FC<PropsWithChildren<Props>> = ({ className, children }) => {
  return <div className={clsx(styles["content-container"], className)}>{children}</div>;
};

export default ContentContainer;
