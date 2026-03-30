import * as S from "./RuleSection.styles";
import { ruleData } from "./ruleData";

export default function RuleSection() {
  return (
    <S.Section>
      <S.Inner>
        <S.Title>규정</S.Title>
        <S.Subtitle>REVERSE 규정 잘 지키자.</S.Subtitle>

        <S.RuleList>
          {ruleData.map((rule, index) => (
            <S.RuleItem key={index}>
              {index + 1}. {rule}
            </S.RuleItem>
          ))}
        </S.RuleList>
      </S.Inner>
    </S.Section>
  );
}
