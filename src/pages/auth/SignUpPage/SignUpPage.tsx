import * as S from "./SignUpPage.styles";
import SignUpForm from "../../../components/auth/SignUpForm/SignUpForm";

export default function SignUpPage() {
  return (
    <S.Page>
      <S.Content>
        <SignUpForm />
      </S.Content>
    </S.Page>
  );
}
