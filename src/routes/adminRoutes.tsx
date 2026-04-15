import AdminPage from "../pages/admin/AdminPage";
import ClubIntroManagePage from "../pages/clubIntroManage/ClubIntroManagePage";
import OfficerManagePage from "../pages/officerManage/OfficerManagePage";
import ProjectManagePage from "../pages/projectManage/ProjectManagePage";
import TermsManagePage from "../pages/termsManage/TermsManagePage";

export const adminRoutes = [
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/admin/club-intro",
    element: <ClubIntroManagePage />,
  },
  {
    path: "/admin/officer",
    element: <OfficerManagePage />,
  },
  {
    path: "/admin/terms",
    element: <TermsManagePage />,
  },
  {
    path: "/admin/project",
    element: <ProjectManagePage />,
  },
];
