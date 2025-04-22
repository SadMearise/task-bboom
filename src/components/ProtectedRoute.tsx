import { FC, PropsWithChildren } from "react";
import { LINKS } from "../utils/constants";
import { Navigate, Outlet } from "react-router";

type Props = {
  isAllowed: boolean;
  redirectPath?: string;
};

const ProtectedRoute: FC<PropsWithChildren<Props>> = ({
  isAllowed,
  redirectPath = LINKS.login.route,
  children,
}) => {
  if (!isAllowed) {
    return (
      <Navigate
        to={redirectPath}
        replace
      />
    );
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
