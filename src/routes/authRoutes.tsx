import LoginPage from "../pages/auth/LoginPage/LoginPage";
import SignUpPage from "../pages/auth/SignUpPage/SignUpPage";

export const authRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
];
