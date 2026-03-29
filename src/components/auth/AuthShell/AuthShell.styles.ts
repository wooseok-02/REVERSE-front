import styled from "styled-components";

export const Frame = styled.section`
  position: relative;
  width: 100%;
  max-width: 680px;
  min-height: 600px;
  border-radius: 24px;
  padding: 18px;
  border: none;
  background: linear-gradient(180deg, #ffffff1a 0%, #cfd6ff14 100%), #00000099;
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: 24px;
    background: linear-gradient(
      90deg,
      #6872ff 9%,
      #a268ff 28%,
      #dc68ff 47%,
      #190dc0 75%,
      #6cb3ff 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 768px) {
    min-height: auto;
    padding: 14px;
    border-radius: 18px;

    &::before {
      border-radius: 18px;
    }
  }
`;

export const Inner = styled.div`
  width: 100%;
  min-height: 564px;
  border-radius: 18px;
  padding: 56px 54px 42px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: #ffffff20;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 36px 22px 28px;
    border-radius: 16px;
  }
`;

export const TopArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 56px;
`;

export const Title = styled.h1`
  margin-top: 12px;
  font-size: 22px;
  font-weight: 800;
  color: #ffffff;
`;
