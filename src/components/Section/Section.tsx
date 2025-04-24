import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./Section.module.css";

type Props = {
  className?: string;
  title?: string;
};

const Section: FC<PropsWithChildren<Props>> = ({ className, title, children }) => {
  return (
    <section className={clsx(styles.section, className)}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
