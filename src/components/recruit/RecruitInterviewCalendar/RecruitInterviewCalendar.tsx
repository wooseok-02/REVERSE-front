import { useMemo, useState } from "react";
import * as S from "./RecruitInterviewCalendar.styles";

type InterviewRange = {
  startDate: string;
  endDate: string;
};

type CalendarDay = {
  date: Date;
  key: string;
  day: number;
  isCurrentMonth: boolean;
  interviewPosition: "start" | "middle" | "end" | "single" | null;
};

type DayVariant = "plain" | "dark" | "light";

const monthLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const weekLabels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const interviewDateRanges: InterviewRange[] = [
  {
    startDate: "2026-09-09",
    endDate: "2026-09-13",
  },
];

const toDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const createDateFromKey = (key: string) => {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const addDays = (date: Date, amount: number) => {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + amount);
  return nextDate;
};

const getInterviewPosition = (dateKey: string) => {
  for (const range of interviewDateRanges) {
    const start = createDateFromKey(range.startDate);
    const end = createDateFromKey(range.endDate);
    const current = createDateFromKey(dateKey);

    if (current < start || current > end) {
      continue;
    }

    if (range.startDate === range.endDate) {
      return "single";
    }

    if (dateKey === range.startDate) {
      return "start";
    }

    if (dateKey === range.endDate) {
      return "end";
    }

    return "middle";
  }

  return null;
};

const getDefaultVariant = (
  position: CalendarDay["interviewPosition"]
): DayVariant => {
  if (!position) {
    return "plain";
  }

  return "dark";
};

export default function RecruitInterviewCalendar() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(8);
  const [reversedDateKeys, setReversedDateKeys] = useState<Set<string>>(
    () => new Set()
  );

  const calendarDays = useMemo<CalendarDay[]>(() => {
    const firstDate = new Date(currentYear, currentMonth, 1);
    const firstGridDate = addDays(firstDate, -firstDate.getDay());

    return Array.from({ length: 35 }, (_, index) => {
      const date = addDays(firstGridDate, index);
      const key = toDateKey(date);

      return {
        date,
        key,
        day: date.getDate(),
        isCurrentMonth: date.getMonth() === currentMonth,
        interviewPosition: getInterviewPosition(key),
      };
    });
  }, [currentMonth, currentYear]);

  const moveMonth = (amount: number) => {
    const nextDate = new Date(currentYear, currentMonth + amount, 1);
    setCurrentYear(nextDate.getFullYear());
    setCurrentMonth(nextDate.getMonth());
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentMonth(Number(event.target.value));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentYear(Number(event.target.value));
  };

  const handleInterviewDateClick = (dateKey: string) => {
    setReversedDateKeys((prev) => {
      const next = new Set(prev);

      if (next.has(dateKey)) {
        next.delete(dateKey);
      } else {
        next.add(dateKey);
      }

      return next;
    });
  };

  return (
    <S.CalendarField>
      <S.Label>면접 일정</S.Label>
      <S.CalendarBox>
        <S.CalendarHeader>
          <S.MoveButton
            type='button'
            aria-label='이전 달'
            onClick={() => moveMonth(-1)}
          >
            ‹
          </S.MoveButton>

          <S.SelectGroup>
            <S.Select
              aria-label='월 선택'
              value={currentMonth}
              onChange={handleMonthChange}
            >
              {monthLabels.map((month, index) => (
                <option key={month} value={index}>
                  {month}
                </option>
              ))}
            </S.Select>

            <S.Select
              aria-label='연도 선택'
              value={currentYear}
              onChange={handleYearChange}
            >
              {[2025, 2026, 2027].map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </S.Select>
          </S.SelectGroup>

          <S.MoveButton
            type='button'
            aria-label='다음 달'
            onClick={() => moveMonth(1)}
          >
            ›
          </S.MoveButton>
        </S.CalendarHeader>

        <S.WeekGrid aria-hidden='true'>
          {weekLabels.map((week) => (
            <S.WeekLabel key={week}>{week}</S.WeekLabel>
          ))}
        </S.WeekGrid>

        <S.DayGrid>
          {calendarDays.map((item) => {
            const defaultVariant = getDefaultVariant(item.interviewPosition);
            const isReversed = reversedDateKeys.has(item.key);
            const variant =
              isReversed && defaultVariant === "dark"
                ? "light"
                : isReversed && defaultVariant === "light"
                  ? "dark"
                  : defaultVariant;
            const isInterviewDate = Boolean(item.interviewPosition);

            return (
              <S.DayButton
                key={item.key}
                type='button'
                $variant={variant}
                $currentMonth={item.isCurrentMonth}
                disabled={!isInterviewDate}
                onClick={() => handleInterviewDateClick(item.key)}
              >
                {item.day}
              </S.DayButton>
            );
          })}
        </S.DayGrid>
      </S.CalendarBox>
    </S.CalendarField>
  );
}
