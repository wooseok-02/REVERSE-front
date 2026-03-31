import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 160px 20px;
`;

export const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  color: #ffffff;
`;

export const Title = styled.h2`
  font-size: 52px;
  font-weight: 500;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    font-size: 44px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.p`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 60px;

  @media (max-width: 1200px) {
    font-size: 18px;
  }
`;

export const RuleList = styled.ol`
  list-style-type: none;
  list-style: none;

  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: 18px;

  font-size: 18px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 1200px) {
    font-size: 16px;
  }
  li::marker {
    content: "";
  }
`;

export const RuleItem = styled.li`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    color: #ffffff;
    font-weight: bold;
  }
`;
