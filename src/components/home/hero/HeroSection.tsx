import * as S from "./HeroSection.styles";
import heroBg from "../../../assets/images/hero-bg.jpg";

export default function HeroSection() {
  return (
    <S.Section>
      <S.BackgroundImage src={heroBg} alt='REVERSE hero background' />
      <S.Overlay />

      <S.Content>
        <S.Title>REVERSE</S.Title>
        <S.Subtitle>남서울대학교 컴퓨터 소프트웨어학과 동아리</S.Subtitle>
      </S.Content>
    </S.Section>
  );
}
