import * as S from "./CalendarSection.styles";
import BlurGlow from "../common/blur/BlurGlow";
import heroImage from "../../assets/images/calendar-bg.jpg";

type CalendarDay = {
  day: number | null;
  event?: string;
  eventColor?: "blue" | "white";
};

const CALENDAR_WEEKS: CalendarDay[][] = [
  [
    { day: 1, eventColor: "blue" },
    { day: 2, event: "리뉴얼", eventColor: "blue" },
    { day: 3, event: "개강", eventColor: "white" },
    { day: 4 },
    { day: 5 },
    { day: 6 },
    { day: 7 },
  ],
  [
    { day: 8 },
    { day: 9 },
    { day: 10 },
    { day: 11 },
    { day: 12 },
    { day: 13 },
    { day: 14 },
  ],
  [
    { day: 15 },
    { day: 16 },
    { day: 17 },
    { day: 18 },
    { day: 19 },
    { day: 20 },
    { day: 21 },
  ],
  [
    { day: 22 },
    { day: 23 },
    { day: 24 },
    { day: 25 },
    { day: 26 },
    { day: 27 },
    { day: 28 },
  ],
  [
    { day: 29 },
    { day: 30 },
    { day: 31 },
    { day: null },
    { day: null },
    { day: null },
    { day: null },
  ],
];

const EVENT_SUMMARY = ["3.1 삼일절", "3.2 개강"];

export default function CalendarSection() {
  return (
    <S.Wrapper>
      <S.Hero $image={heroImage}>
        <S.HeroContent>
          <S.HeroTitle>REVERSE 일정</S.HeroTitle>
          <S.HeroDesc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </S.HeroDesc>
        </S.HeroContent>
      </S.Hero>

      <S.Section>
        <BlurGlow
          color='#5580EF'
          blur={100}
          size={320}
          right='28vw'
          bottom='7vw'
          opacity={0.5}
        />
        <BlurGlow
          color='#6A3EF0'
          blur={100}
          size={300}
          left='30vw'
          top='6vw'
          opacity={0.35}
        />
        <S.Content>
          <S.YearText>2026</S.YearText>
          <S.MonthText>3월</S.MonthText>

          <S.CalendarBox>
            <S.Grid>
              {CALENDAR_WEEKS.flat().map((item, index) => (
                <S.Cell key={`${item.day}-${index}`}>
                  {item.day && (
                    <S.DayNumber $variant={item.eventColor}>
                      {item.day}
                    </S.DayNumber>
                  )}

                  {item.event && (
                    <S.EventText $variant={item.eventColor ?? "white"}>
                      {item.event}
                    </S.EventText>
                  )}
                </S.Cell>
              ))}
            </S.Grid>

            <S.EventSummary>
              {EVENT_SUMMARY.map((event) => (
                <S.EventSummaryItem key={event}>• {event}</S.EventSummaryItem>
              ))}
            </S.EventSummary>
          </S.CalendarBox>
        </S.Content>
      </S.Section>
    </S.Wrapper>
  );
}
