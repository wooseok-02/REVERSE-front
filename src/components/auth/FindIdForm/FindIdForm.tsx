import AuthShell from "../AuthShell/AuthShell";
import FormField from "../FormField/FormField";
import * as C from "../FormField/AuthControls.styles";

export default function FindIdForm() {
  return (
    <AuthShell title='아이디 찾기'>
      <C.Form>
        <FormField label='이름' htmlFor='find-id-name'>
          <C.Input
            id='find-id-name'
            type='text'
            placeholder='이름을 입력하세요.'
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
            <C.GhostButton type='button'>인증 번호 전송</C.GhostButton>
          </C.EmailRow>
        </FormField>

        <FormField label='인증번호' htmlFor='find-id-code'>
          <C.Row>
            <C.Input
              id='find-id-code'
              type='text'
              placeholder='인증번호를 입력하세요.'
            />
            <C.GhostButton type='button'>인증번호 확인</C.GhostButton>
          </C.Row>
        </FormField>

        <C.PrimaryButton type='button'>아이디 찾기</C.PrimaryButton>
      </C.Form>
    </AuthShell>
  );
}