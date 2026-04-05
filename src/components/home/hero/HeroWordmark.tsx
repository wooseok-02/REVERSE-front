import * as S from "./HeroWordmark.styles";
import aboutLogo from "../../../assets/logos/about_logo.png";

export default function HeroWordmark() {
  return (
    <S.Section>
      <S.TitleImage src={aboutLogo} alt='REVERSE' />
      <S.Subtitle>남서울대학교 컴퓨터 소프트웨어학과 동아리</S.Subtitle>
    </S.Section>
  );
}
