import { useNavigate } from "react-router-dom";
import LoginForm from "../../../components/auth/LoginForm/LoginForm";
import * as S from "./LoginPage.styles";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = async (values: { id: string; password: string }) => {
    console.log("login request", values);
    navigate("/");
  };

  return (
    <S.Page>
      <S.Content>
        <LoginForm
          onSubmit={handleSubmit}
          onClickSignUp={() => navigate("/signup")}
        />
      </S.Content>
    </S.Page>
  );
}
