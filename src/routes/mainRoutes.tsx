import CalendarPage from "../pages/CalendarPage";
import HomePage from "../pages/HomePage/HomePage";
import NoticePage from "../pages/NoticePage";
import RecruitPage from "../pages/RecruitPage/RecruitPage";

export const mainRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/notice",
    element: <NoticePage />,
  },
  {
    path: "/recruit",
    element: <RecruitPage />,
  },

  {
    path: "calendar",
    element: <CalendarPage />,
  },
];
