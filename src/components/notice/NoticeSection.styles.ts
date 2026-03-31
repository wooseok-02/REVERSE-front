import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 80px 20px 100px;
  background: #111111;
  min-height: 700px;
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const TabList = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-bottom: 48px;
  flex-wrap: wrap;
`;

export const TabButton = styled.button<{ $active: boolean }>`
  height: 36px;
  padding: 0 16px;
  border: 1px solid
    ${({ $active }) => ($active ? "#ffffff" : "rgba(255,255,255,0.35)")};
  background: ${({ $active }) =>
    $active ? "rgba(255,255,255,0.08)" : "transparent"};
  color: ${({ $active }) => ($active ? "#ffffff" : "rgba(255,255,255,0.7)")};
  font-size: 13px;
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    border-color: #ffffff;
    color: #ffffff;
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 760px;
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.8);

  transition: all 0.2s;

  &:hover {
    border-color: #8c63ff;
    transform: translateY(-2px);
  }
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h3`
  margin: 0;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
`;

export const Category = styled.span`
  background: #7b3cff;
  color: #ffffff;
  font-size: 11px;
  padding: 4px 8px;
`;

export const MoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;
  background: transparent;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Arrow = styled.span`
  font-size: 20px;
`;

export const Description = styled.p`
  margin-top: 18px;
  color: rgba(255, 255, 255, 0.75);
  font-size: 14px;
  line-height: 1.6;
`;
export const Hero = styled.section<{ $image: string }>`
  width: 100%;
  height: 320px;
  position: relative;

  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
`;

export const HeroContent = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  color: white;
  font-size: 44px;
  font-weight: 700;
`;

export const HeroDesc = styled.p`
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
`;
