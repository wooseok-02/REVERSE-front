import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { mainRoutes } from "./mainRoutes";
import { authRoutes } from "./authRoutes";

export default function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {mainRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}

        {authRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}
