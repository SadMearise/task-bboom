import styles from "./App.module.css";
import { Route, Routes } from "react-router";
import { LINKS } from "./utils/constants";
import { Admin, LoginPage } from "./pages";
import { ProtectedRoute } from "./components";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route
          element={<LoginPage />}
          path={LINKS.login.route}
        />
        <Route
          element={
            <ProtectedRoute
              isAllowed
              redirectPath={LINKS.login.route}
            />
          }
        >
          <Route
            element={<Admin />}
            path={LINKS.admin.route}
          />
        </Route>
        <Route
          path={LINKS.error.route}
          element={<p>There's nothing here: 404!</p>}
        />
      </Routes>
    </div>
  );
};

export default App;
