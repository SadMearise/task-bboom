import { FC } from "react";

type Props = {
  className?: string;
};

const ErrorPage: FC<Props> = ({ className }) => {
  return <p className={className}>There's nothing here: 404!</p>;
};

export default ErrorPage;
