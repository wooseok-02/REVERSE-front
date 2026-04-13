import { useState } from "react";
import { recruitCards, recruitFields } from "../recruitData";
import * as S from "./RecruitFieldSection.styles";

export default function RecruitFieldSection() {
  const [isFieldTabsOpen, setIsFieldTabsOpen] = useState(false);

  return (
    <S.Section>
      <S.Header>
        <S.Title>모집 분야</S.Title>
        <S.TitleRule />
      </S.Header>

      <S.Content>
        <S.FieldTabs aria-label="모집 분야 목록" $visible={isFieldTabsOpen}>
          {recruitFields.map((field, index) => (
            <S.FieldTab
              key={field}
              type="button"
              $visible={isFieldTabsOpen}
              style={{ transitionDelay: `${index * 0.07}s` }}
            >
              {field}
            </S.FieldTab>
          ))}
        </S.FieldTabs>

        <S.CardGrid>
          {recruitCards.map((card, index) => (
            <S.RecruitCard
              key={card.title}
              onMouseEnter={() => {
                if (index === 0) {
                  setIsFieldTabsOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (index === 0) {
                  setIsFieldTabsOpen(false);
                }
              }}
            >
              <S.CardImage src={card.image} alt={card.title} />
              <S.CardTitle>{card.title}</S.CardTitle>
              <S.CardSubtitle>{card.subtitle}</S.CardSubtitle>
              <S.CardDescription>{card.description}</S.CardDescription>
            </S.RecruitCard>
          ))}
        </S.CardGrid>
      </S.Content>

      <S.BottomRule />
    </S.Section>
  );
}
