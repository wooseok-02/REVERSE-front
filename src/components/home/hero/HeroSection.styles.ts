import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 640px;
  overflow: hidden;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  color: #ffffff;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-size: 78px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  margin-bottom: 28px;

  @media (max-width: 1200px) {
    font-size: 64px;
  }

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;

  @media (max-width: 1200px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;
