import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { mainRoutes } from "./mainRoutes";
import { authRoutes } from "./authRoutes";
import ClubIntroManagePage from "../pages/clubIntroManage/ClubIntroManagePage";
import OfficerManagePage from "../pages/officerManage/OfficerManagePage";
import TermsManagePage from "../pages/termsManage/TermsManagePage";
import ProjectManagePage from "../pages/projectManage/ProjectManagePage"; // 추가

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
        <Route path='/admin/club-intro' element={<ClubIntroManagePage />} />
        <Route path='/admin/officer' element={<OfficerManagePage />} />
        <Route path='/admin/terms' element={<TermsManagePage />} />
        <Route path='/admin/project' element={<ProjectManagePage />} />{" "}
        {/* 추가 */}
      </Route>
    </Routes>
  );
}
