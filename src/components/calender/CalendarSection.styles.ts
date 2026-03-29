import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`;

export const Hero = styled.section<{ $image: string }>`
  position: relative;
  width: 100%;
  height: 280px;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HeroContent = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 20px;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  color: #ffffff;
  font-size: 56px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

export const HeroDesc = styled.p`
  max-width: 760px;
  margin: 14px 0 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const Section = styled.div`
  position: relative;
  width: 100%;
  min-height: 900px;
  background-color: #111111;
  padding: 64px 20px 120px;
  overflow: hidden;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const YearText = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
`;

export const MonthText = styled.h2`
  margin: 10px 0 40px;
  color: #ffffff;
  font-size: 52px;
  font-weight: 400;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

export const CalendarBox = styled.div`
  width: 100%;
  max-width: 720px;
  border: 2px solid rgba(255, 255, 255, 0.72);
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const Cell = styled.div`
  position: relative;
  min-height: 100px;
  padding: 10px 8px;
  border-right: 1px solid rgba(255, 255, 255, 0.58);
  border-bottom: 1px solid rgba(255, 255, 255, 0.58);

  &:nth-child(7n) {
    border-right: none;
  }

  @media (max-width: 768px) {
    min-height: 68px;
    padding: 8px 6px;
  }
`;

export const DayNumber = styled.span<{ $variant?: "blue" | "white" }>`
  display: inline-block;
  color: ${({ $variant }) => ($variant === "blue" ? "#76a8ff" : "#ffffff")};
  font-size: 20px;
  font-weight: 300;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const EventText = styled.p<{ $variant: "blue" | "white" }>`
  margin: 8px 0 0;
  color: ${({ $variant }) =>
    $variant === "blue" ? "#76a8ff" : "rgba(255, 255, 255, 0.84)"};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.4;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

export const EventSummary = styled.div`
  min-height: 140px;
  padding: 16px 26px 18px;
`;

export const EventSummaryItem = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.9;

  & + & {
    margin-top: 2px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
