import AuthShell from "../AuthShell/AuthShell";
import FormField from "../FormField/FormField";
import * as C from "../FormField/AuthControls.styles";
import { useState } from "react";

export default function FindPasswordForm() {
  const [message, setMessage] = useState<{
    text: string;
    type?: "error" | "success";
  }>({ text: "", type: undefined });

  return (
    <AuthShell title='비밀번호 찾기'>
      <C.Form>
        <FormField label='이름' htmlFor='find-pw-name'>
          <C.Input
            id='find-pw-name'
            type='text'
            placeholder='이름을 입력하세요.'
          />
        </FormField>

        <FormField label='아이디' htmlFor='find-pw-id'>
          <C.Input
            id='find-pw-id'
            type='text'
            placeholder='아이디를 입력하세요.'
          />
        </FormField>

        <FormField label='이메일'>
          <C.EmailRow>
            <C.Input type='text' placeholder='이메일을 입력하세요.' />
            <C.At>@</C.At>
            <C.Select defaultValue=''>
              <option value='' disabled>
                선택하세요.
              </option>
              <option value='gmail.com'>gmail.com</option>
              <option value='naver.com'>naver.com</option>
              <option value='daum.net'>daum.net</option>
            </C.Select>

            <C.GhostButton
              type='button'
              onClick={() =>
                setMessage({
                  text: "인증번호가 전송되었습니다.",
                  type: "success",
                })
              }
            >
              인증번호 전송
            </C.GhostButton>
          </C.EmailRow>
        </FormField>

        <FormField label='인증번호' htmlFor='find-pw-code'>
          <C.Row>
            <C.Input
              id='find-pw-code'
              type='text'
              placeholder='인증번호를 입력하세요.'
            />
            <C.GhostButton
              type='button'
              onClick={() =>
                setMessage({
                  text: "인증이 완료되었습니다.",
                  type: "success",
                })
              }
            >
              인증번호 확인
            </C.GhostButton>
          </C.Row>
        </FormField>

        {message.text && (
          <p
            style={{
              marginTop: "12px",
              fontSize: "13px",
              textAlign: "center",
              color: message.type === "error" ? "#ff7b7b" : "#7ea6ff",
            }}
          >
            {message.text}
          </p>
        )}

        <C.PrimaryButton
          type='button'
          onClick={() =>
            setMessage({
              text: "임시 비밀번호가 이메일로 전송되었습니다.",
              type: "success",
            })
          }
        >
          비밀번호 찾기
        </C.PrimaryButton>
      </C.Form>
    </AuthShell>
  );
}