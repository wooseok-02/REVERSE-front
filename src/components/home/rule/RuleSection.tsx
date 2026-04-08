import * as S from "./RuleSection.styles";
import { ruleData } from "./ruleData";
import rule_bg_img from "../../../assets/images/rule-bg.png";

export default function RuleSection() {
  return (
    <S.Section>
      <S.BgWrap>
        <S.BgImage src={rule_bg_img} alt="REVERSE rule background" />
      </S.BgWrap>
      <S.Inner>
        <S.Title>Regulations</S.Title>
        <S.Subtitle>REVERSE 동아리 규정</S.Subtitle>

        <S.RuleList>
          {ruleData.map((rule, index) => (
            <S.RuleItem key={index}>
              {index + 1}. {rule}
            </S.RuleItem>
          ))}
        </S.RuleList>

        <S.ButtonWrap>
          <S.Button>Learn More</S.Button>
        </S.ButtonWrap>
      </S.Inner>
    </S.Section>
  );
}
