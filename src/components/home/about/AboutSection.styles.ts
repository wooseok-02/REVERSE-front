import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 640px;
  overflow: hidden;
`;

export const Background = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
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
  color: white;
  padding: 0 20px;
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 30px;
`;

export const SubTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 18px;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.7;
  max-width: 900px;
  margin-bottom: 40px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;

export const PrimaryButton = styled.button`
  padding: 14px 28px;
  background: white;
  color: black;
  font-weight: 700;
  border-radius: 4px;
`;

export const SecondButton = styled.button`
  padding: 14px 28px;
  background: transparent;
  border: 2px solid white;
  color: white;
  font-weight: 700;
  border-radius: 4px;
`;
