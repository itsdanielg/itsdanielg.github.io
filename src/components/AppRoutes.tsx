import { Route, Routes, useLocation } from "react-router-dom";
import { Error, Home, Overview, Projects } from "./Pages";

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}></Route>
        <Route
          path="/overview"
          element={<Overview />}
        />
        {/* <Route
        path="/explore"
        element={<Explore />}
      /> */}
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
