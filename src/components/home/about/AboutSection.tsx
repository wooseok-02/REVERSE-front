import * as S from "./AboutSection.styles";
import introLogo from "../../../assets/logos/Intro_logo.png";

export default function AboutSection() {
  return (
    <S.Section>
      <S.BackgroundMark src={introLogo} alt='' aria-hidden='true' />

      <S.Content>
        <S.Title>
          <span>ABOUT</span>
          <span>REVERSE</span>
        </S.Title>

        <S.Description>
          REVERSE는 <br />
          전공에 관계없이 프로그래밍에 관심 있는 학생들이 모여
          <br />
          함께 공부하고 프로젝트를 진행하는 컴퓨터소프트웨어학과 동아리입니다.
        </S.Description>

        <S.ButtonGroup>
          <S.LinkButton
            type='button'
            onClick={() =>
              window.open("https://www.instagram.com/nsu_reverse/", "_blank")
            }
          >
            <S.ButtonArrow aria-hidden='true'>▶</S.ButtonArrow>
            <span>인스타그램 바로가기</span>
            <S.ButtonIcon aria-hidden='true'>↗</S.ButtonIcon>
          </S.LinkButton>

          <S.LinkButton
            type='button'
            onClick={() => window.open("https://cs.nsu.ac.kr/", "_blank")}
          >
            <S.ButtonArrow aria-hidden='true'>▶</S.ButtonArrow>
            <span>학과 홈페이지 바로가기</span>
            <S.ButtonIcon aria-hidden='true'>↗</S.ButtonIcon>
          </S.LinkButton>
        </S.ButtonGroup>
      </S.Content>
    </S.Section>
  );
}
