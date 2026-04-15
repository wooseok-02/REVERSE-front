import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/common/header/Header";
import { headerMenus } from "../components/common/header/headerData";
//Outlet / 접속하면 main페이지 /login 접속하면 outlet이 login페이지로 바뀜

export default function MainLayout() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  };

  return (
    <>
      <Header
        menus={headerMenus}
        onLogoClick={handleLogoClick}
        onLoginClick={() => navigate("/login")}
      />
      <Outlet />
    </>
  );
}
