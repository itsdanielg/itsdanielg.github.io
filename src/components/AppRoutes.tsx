import { Route, Routes } from "react-router-dom";
import { Error, Landing, Overview, Projects } from "./Pages";

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Landing />}></Route>
        <Route
          path="/overview"
          element={<Overview />}
        />
        <Route
          path="/projects"
          element={<Projects />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </>
  );
}
