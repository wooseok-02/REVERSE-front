import CalendarPage from "../pages/CalendarPage";
import HomePage from "../pages/HomePage/HomePage";
import NoticePage from "../pages/NoticePage";

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
    path: "calendar",
    element: <CalendarPage />,
  },
];
