import * as S from "./CalendarSection.styles";
import heroImage from "../../assets/images/calendar-bg.png";

type CalendarDay = {
  day: number | null;
  holiday?: string;
  clubEvent?: string;
  holidayColor?: "blue" | "white";
  clubEventColor?: "blue" | "white";
};

const CALENDAR_WEEKS: CalendarDay[][] = [
  [
    { day: 1, holiday: "3.1절", holidayColor: "blue" },
    { day: 2, holiday: "대체공휴일", holidayColor: "blue" },
    { day: 3, clubEvent: "개강", clubEventColor: "white" },
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
    { day: 18, clubEvent: "임원 대면 회의", clubEventColor: "white" },
    { day: 19, clubEvent: "동아리 OT", clubEventColor: "white" },
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

const EVENT_SUMMARY = [
  "3.1 삼일절",
  "3.2 대체공휴일",
  "3.3 개강",
  "3.18 임원 대면 회의",
  "3.19 동아리 OT",
];

export default function CalendarSection() {
  return (
    <S.Wrapper>
      <S.Hero $image={heroImage}>
        <S.HeroOverlay />
        <S.HeroContent>
          <S.HeroTitle>REVERSE 일정</S.HeroTitle>
          <S.HeroDesc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
            {"\n"}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </S.HeroDesc>
        </S.HeroContent>
        <S.HeroLine />
      </S.Hero>

      <S.Section>
        <S.Content>
          <S.YearText>2026</S.YearText>
          <S.MonthText>3월</S.MonthText>

          <S.CalendarBox>
            <S.Grid>
              {CALENDAR_WEEKS.flat().map((item, index) => (
                <S.Cell key={`${item.day}-${index}`}>
                  {item.day !== null && (
                    <S.DayNumber
                      $variant={item.holidayColor || item.clubEventColor}
                    >
                      {item.day}
                    </S.DayNumber>
                  )}

                  {item.holiday && (
                    <S.HolidayText $variant={item.holidayColor ?? "blue"}>
                      {item.holiday}
                    </S.HolidayText>
                  )}

                  {item.clubEvent && (
                    <S.EventText $variant={item.clubEventColor ?? "white"}>
                      {item.clubEvent}
                    </S.EventText>
                  )}
                </S.Cell>
              ))}
            </S.Grid>
          </S.CalendarBox>

          <S.EventSummaryBox>
            {EVENT_SUMMARY.map((event) => (
              <S.EventSummaryItem key={event}>• {event}</S.EventSummaryItem>
            ))}
          </S.EventSummaryBox>
        </S.Content>
      </S.Section>
    </S.Wrapper>
  );
}