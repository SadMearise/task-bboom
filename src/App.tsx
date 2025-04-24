import styles from "./App.module.css";
import { Route, Routes } from "react-router";
import { LINKS } from "./utils/constants";
import { AdminPage, ErrorPage, SignInPage } from "./pages";
import { ProtectedRoute } from "./components";
import useAuth from "./utils/hooks/useAuth";

const App = () => {
  const { isAuth } = useAuth();

  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route
          element={<SignInPage />}
          path={LINKS.signin.route}
        />
        <Route
          element={
            <ProtectedRoute
              isAllowed={isAuth}
              redirectPath={LINKS.signin.route}
            />
          }
        >
          <Route
            element={<AdminPage />}
            path={LINKS.admin.route}
          />
        </Route>
        <Route
          element={<ErrorPage />}
          path={LINKS.error.route}
        />
      </Routes>
    </div>
  );
};

export default App;
