import { useState, type ChangeEvent, type FormEvent } from "react";

import AuthShell from "../AuthShell/AuthShell";
import * as C from "../FormField/AuthControls.styles";
import FormField from "../FormField/FormField";
import * as S from "./LoginForm.styles";

type LoginValues = {
  id: string;
  password: string;
};

type LoginFormProps = {
  onSubmit: (values: LoginValues) => void | Promise<void>;
  onClickSignUp?: () => void;
};

export default function LoginForm({ onSubmit, onClickSignUp }: LoginFormProps) {
  const [values, setValues] = useState<LoginValues>({
    id: "",
    password: "",
  });

  const handleChange =
    (key: keyof LoginValues) => (e: ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(values);
  };

  return (
    <AuthShell title='로그인'>
      <C.Form onSubmit={handleSubmit}>
        <FormField label='아이디' htmlFor='login-id'>
          <C.Input
            id='login-id'
            type='text'
            placeholder='아이디를 입력하세요.'
            value={values.id}
            onChange={handleChange("id")}
            autoComplete='username'
          />
        </FormField>

        <FormField label='비밀번호' htmlFor='login-password'>
          <C.Input
            id='login-password'
            type='password'
            placeholder='비밀번호를 입력하세요.'
            value={values.password}
            onChange={handleChange("password")}
            autoComplete='current-password'
          />
        </FormField>

        <C.PrimaryButton type='submit'>로그인</C.PrimaryButton>

        <S.BottomText>
          아직 회원이 아니신가요?
          <C.TextButton type='button' onClick={onClickSignUp}>
            [회원가입 하기]
          </C.TextButton>
        </S.BottomText>
      </C.Form>
    </AuthShell>
  );
}
