import { Route, Routes } from "react-router";
import { LINKS } from "./utils/constants";
import { Admin, Login } from "./pages";
import { ProtectedRoute } from "./components";

const App = () => {
  return (
    <Routes>
      <Route
        element={<Login />}
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
  );
};

export default App;
