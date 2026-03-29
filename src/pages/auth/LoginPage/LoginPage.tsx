import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../../components/auth/LoginForm/LoginForm";
import * as S from "./LoginPage.styles";

export default function LoginPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleLogin = async (values: { id: string; password: string }) => {
    try {
      setLoading(true);

      console.log("login request", values);

      // 예시:
      // await login({ loginId: values.id, password: values.password });
      // navigate("/");

      setTimeout(() => {
        navigate("/");
      }, 700);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (values: { id: string; password: string }) => {
    console.log(values);
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
