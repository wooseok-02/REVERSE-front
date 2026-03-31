import * as S from "./AboutSection.styles";
import bgImage from "../../../assets/images/about-bg.jpg";

export default function AboutSection() {
  return (
    <S.Section>
      <S.Background src={bgImage} />

      <S.Overlay />

      <S.Content>
        <S.Title>REVERSE 소개</S.Title>

        <S.SubTitle>REVERS0E란?</S.SubTitle>

        <S.Description>
          ABCDEFG ABCD AAAA BBBBBBBBBBBB <br />
          ABCCCCCCC FFFFFFFFFFFFFFDDDDDDDDD <br />
          EEEEEEEEEEEEEEEEEEEEDDDDFRRRRR
        </S.Description>

        <S.ButtonGroup>
          <S.PrimaryButton>▶ 인스타 바로가기</S.PrimaryButton>
          <S.SecondButton>▶ 학과 홈페이지 바로가기</S.SecondButton>
        </S.ButtonGroup>
      </S.Content>
    </S.Section>
  );
}
