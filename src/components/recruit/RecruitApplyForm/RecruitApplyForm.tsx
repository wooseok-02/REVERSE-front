import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RecruitInterviewCalendar from "../RecruitInterviewCalendar/RecruitInterviewCalendar";
import * as S from "./RecruitApplyForm.styles";
import useRecruitApplyForm, {
  CUSTOM_EMAIL_DOMAIN,
  EMAIL_DOMAINS,
  GRADES,
  SUPPORT_FIELDS,
} from "./useRecruitApplyForm";

const getErrorMessage = (message: unknown) =>
  typeof message === "string" ? message : null;

export default function RecruitApplyForm() {
  const navigate = useNavigate();
  const {
    errors,
    register,
    selectEmailDomain,
    setField,
    toggleSupportField,
    validate,
    values,
  } = useRecruitApplyForm();
  const [isDomainMenuOpen, setIsDomainMenuOpen] = useState(false);
  const [isSubmitConfirmOpen, setIsSubmitConfirmOpen] = useState(false);

  const isCustomEmailDomain = values.emailDomain === CUSTOM_EMAIL_DOMAIN;
  const domainDisplayText = values.emailDomain || "선택";

  const handleDomainSelect = (domain: string) => {
    selectEmailDomain(domain);
    setIsDomainMenuOpen(false);
  };

  const handleSubmitClick = async () => {
    const isValid = await validate();

    if (!isValid) {
      return;
    }

    setIsSubmitConfirmOpen(true);
  };

  const handleConfirmSubmit = () => {
    setIsSubmitConfirmOpen(false);
    navigate("/recruit/apply/complete");
  };

  return (
    <>
      <S.FormPanel aria-label='REVERSE 부원 지원서'>
        <S.FormGrid>
          <S.Field>
            <S.Label htmlFor='apply-name'>이름</S.Label>
            <S.Input
              id='apply-name'
              type='text'
              {...register("name", { required: "이름을 입력해 주세요." })}
            />
            {errors.name ? (
              <S.ErrorMessage>{getErrorMessage(errors.name.message)}</S.ErrorMessage>
            ) : null}
          </S.Field>

          <S.Field>
            <S.Label htmlFor='apply-major'>학과</S.Label>
            <S.Input
              id='apply-major'
              type='text'
              {...register("major", { required: "학과를 입력해 주세요." })}
            />
            {errors.major ? (
              <S.ErrorMessage>{getErrorMessage(errors.major.message)}</S.ErrorMessage>
            ) : null}
          </S.Field>

          <S.Field>
            <S.Label htmlFor='apply-student-id'>학번</S.Label>
            <S.Input
              id='apply-student-id'
              type='text'
              {...register("studentId", { required: "학번을 입력해 주세요." })}
            />
            {errors.studentId ? (
              <S.ErrorMessage>
                {getErrorMessage(errors.studentId.message)}
              </S.ErrorMessage>
            ) : null}
          </S.Field>

          <S.Field>
            <S.Label htmlFor='apply-phone'>휴대폰 번호</S.Label>
            <S.Input
              id='apply-phone'
              type='tel'
              {...register("phone", {
                required: "휴대폰 번호를 입력해 주세요.",
              })}
            />
            {errors.phone ? (
              <S.ErrorMessage>{getErrorMessage(errors.phone.message)}</S.ErrorMessage>
            ) : null}
          </S.Field>
        </S.FormGrid>

        <S.Fieldset>
          <S.Legend>지원 분야</S.Legend>
          <S.OptionRow>
            {SUPPORT_FIELDS.map((field) => (
              <S.RadioLabel key={field}>
                <input
                  type='checkbox'
                  name='supportField'
                  value={field}
                  checked={values.supportFields.includes(field)}
                  onChange={() => toggleSupportField(field)}
                />
                <span>{field}</span>
              </S.RadioLabel>
            ))}
          </S.OptionRow>
          {errors.supportFields ? (
            <S.ErrorMessage>
              {getErrorMessage(errors.supportFields.message)}
            </S.ErrorMessage>
          ) : null}
        </S.Fieldset>

        <S.Fieldset>
          <S.Legend>학년</S.Legend>
          <S.OptionRow>
            {GRADES.map((grade) => (
              <S.RadioLabel key={grade}>
                <input
                  type='radio'
                  name='grade'
                  value={grade}
                  checked={values.grade === grade}
                  onChange={() => setField("grade", grade)}
                />
                <span>{grade}</span>
              </S.RadioLabel>
            ))}
          </S.OptionRow>
          {errors.grade ? (
            <S.ErrorMessage>{getErrorMessage(errors.grade.message)}</S.ErrorMessage>
          ) : null}
        </S.Fieldset>

        <S.EmailGroup>
          <S.Field>
            <S.Label htmlFor='apply-email'>이메일</S.Label>
            <S.EmailRow>
              <S.Input
                id='apply-email'
                type='text'
                {...register("emailLocal", {
                  required: "이메일을 입력해 주세요.",
                })}
              />
              <S.AtSign>@</S.AtSign>
              <S.DomainControl>
                {isCustomEmailDomain ? (
                  <S.DomainInput
                    type='text'
                    aria-label='이메일 도메인 직접 입력'
                    placeholder='도메인 입력'
                    value={values.customEmailDomain}
                    onChange={(event) =>
                      setField("customEmailDomain", event.target.value)
                    }
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
                    {EMAIL_DOMAINS.map((domain) => (
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
            {errors.emailLocal ? (
              <S.ErrorMessage>
                {getErrorMessage(errors.emailLocal.message)}
              </S.ErrorMessage>
            ) : null}
            {errors.emailDomain ? (
              <S.ErrorMessage>
                {getErrorMessage(errors.emailDomain.message)}
              </S.ErrorMessage>
            ) : null}
            {errors.customEmailDomain ? (
              <S.ErrorMessage>
                {getErrorMessage(errors.customEmailDomain.message)}
              </S.ErrorMessage>
            ) : null}
          </S.Field>
        </S.EmailGroup>

        <RecruitInterviewCalendar
          selectedDate={values.interviewDate}
          onSelectDate={(date) => setField("interviewDate", date)}
          error={getErrorMessage(errors.interviewDate?.message) ?? undefined}
        />

        <S.AgreeLabel>
          <input
            type='checkbox'
            checked={values.isPrivacyAgreed}
            onChange={(event) =>
              setField("isPrivacyAgreed", event.target.checked)
            }
          />
          <span>개인정보 수집 및 이용 동의</span>
        </S.AgreeLabel>
        {errors.isPrivacyAgreed ? (
          <S.ErrorMessage>
            {getErrorMessage(errors.isPrivacyAgreed.message)}
          </S.ErrorMessage>
        ) : null}

        <S.SubmitButton type='button' onClick={handleSubmitClick}>
          제출
        </S.SubmitButton>
      </S.FormPanel>

      {isSubmitConfirmOpen ? (
        <S.ModalOverlay role='presentation'>
          <S.ModalCard
            role='dialog'
            aria-modal='true'
            aria-labelledby='submit-confirm-title'
          >
            <S.ModalCloseButton
              type='button'
              aria-label='닫기'
              onClick={() => setIsSubmitConfirmOpen(false)}
            >
              ×
            </S.ModalCloseButton>
            <S.ModalTitle id='submit-confirm-title'>
              제출 후 해당 내용은 수정할 수 없습니다.
            </S.ModalTitle>
            <S.ModalText>
              위의 내용을 확인했습니다. 이대로 제출하시겠습니까?
            </S.ModalText>
            <S.ModalActions>
              <S.ModalSecondaryButton
                type='button'
                onClick={() => setIsSubmitConfirmOpen(false)}
              >
                취소
              </S.ModalSecondaryButton>
              <S.ModalPrimaryButton type='button' onClick={handleConfirmSubmit}>
                확인
              </S.ModalPrimaryButton>
            </S.ModalActions>
          </S.ModalCard>
        </S.ModalOverlay>
      ) : null}
    </>
  );
}
