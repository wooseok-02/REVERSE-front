import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import RecruitInterviewCalendar from "../RecruitInterviewCalendar/RecruitInterviewCalendar";
import * as S from "./RecruitApplyForm.styles";

const supportFields = ["메인 프로젝트", "토이 프로젝트", "스터디"];
const grades = ["1학년", "2학년", "3학년", "4학년"];
const emailDomains = ["naver.com", "gmail.com", "nsu.ac.kr", "직접 입력"];
const customEmailDomain = "직접 입력";

export default function RecruitApplyForm() {
  const navigate = useNavigate();
  const [selectedEmailDomain, setSelectedEmailDomain] = useState("");
  const [customDomain, setCustomDomain] = useState("");
  const [isDomainMenuOpen, setIsDomainMenuOpen] = useState(false);

  const isCustomEmailDomain = selectedEmailDomain === customEmailDomain;
  const domainDisplayText = selectedEmailDomain || "선택";

  const handleCustomDomainChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomDomain(event.target.value);
  };

  const handleDomainSelect = (domain: string) => {
    setSelectedEmailDomain(domain);
    setIsDomainMenuOpen(false);
  };

  return (
    <S.FormPanel aria-label='REVERSE 부원 지원서'>
      <S.FormGrid>
        <S.Field>
          <S.Label htmlFor='apply-name'>이름</S.Label>
          <S.Input id='apply-name' type='text' />
        </S.Field>

        <S.Field>
          <S.Label htmlFor='apply-major'>학과</S.Label>
          <S.Input id='apply-major' type='text' />
        </S.Field>

        <S.Field>
          <S.Label htmlFor='apply-student-id'>학번</S.Label>
          <S.Input id='apply-student-id' type='text' />
        </S.Field>

        <S.Field>
          <S.Label htmlFor='apply-phone'>휴대폰 번호</S.Label>
          <S.Input id='apply-phone' type='tel' />
        </S.Field>
      </S.FormGrid>

      <S.Fieldset>
        <S.Legend>지원 분야</S.Legend>
        <S.OptionRow>
          {supportFields.map((field) => (
            <S.RadioLabel key={field}>
              <input type='radio' name='supportField' value={field} />
              <span>{field}</span>
            </S.RadioLabel>
          ))}
        </S.OptionRow>
      </S.Fieldset>

      <S.Fieldset>
        <S.Legend>학년</S.Legend>
        <S.OptionRow>
          {grades.map((grade) => (
            <S.RadioLabel key={grade}>
              <input type='radio' name='grade' value={grade} />
              <span>{grade}</span>
            </S.RadioLabel>
          ))}
        </S.OptionRow>
      </S.Fieldset>

      <S.EmailGroup>
        <S.Field>
          <S.Label htmlFor='apply-email'>이메일</S.Label>
          <S.EmailRow>
            <S.Input id='apply-email' type='text' />
            <S.AtSign>@</S.AtSign>
            <S.DomainControl>
              {isCustomEmailDomain ? (
                <S.DomainInput
                  type='text'
                  aria-label='이메일 도메인 직접 입력'
                  placeholder='도메인 입력'
                  value={customDomain}
                  onChange={handleCustomDomainChange}
                />
              ) : (
                <S.DomainSelectButton
                  type='button'
                  aria-label='이메일 도메인 선택'
                  onClick={() => setIsDomainMenuOpen((prev) => !prev)}
                >
                  {domainDisplayText}
                </S.DomainSelectButton>
              )}

              <S.DomainArrowButton
                type='button'
                aria-label='이메일 도메인 목록 열기'
                onClick={() => setIsDomainMenuOpen((prev) => !prev)}
              >
                <S.DomainArrow aria-hidden='true' />
              </S.DomainArrowButton>

              {isDomainMenuOpen ? (
                <S.DomainMenu>
                  {emailDomains.map((domain) => (
                    <S.DomainOption
                      key={domain}
                      type='button'
                      onClick={() => handleDomainSelect(domain)}
                    >
                      {domain}
                    </S.DomainOption>
                  ))}
                </S.DomainMenu>
              ) : null}
            </S.DomainControl>
          </S.EmailRow>
        </S.Field>
      </S.EmailGroup>

      <RecruitInterviewCalendar />

      <S.AgreeLabel>
        <input type='checkbox' />
        <span>개인정보 수집 및 이용 동의</span>
      </S.AgreeLabel>

      <S.SubmitButton
        type='button'
        onClick={() => navigate("/recruit/apply/complete")}
      >
        제출
      </S.SubmitButton>
    </S.FormPanel>
  );
}
