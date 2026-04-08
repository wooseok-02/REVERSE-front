import styled from "styled-components";

if (typeof document !== "undefined") {
  const existing = document.querySelector("link[href*='fonts.googleapis.com']");

  if (!existing) {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Jersey+25&family=Inter:wght@400;500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
}

export const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 160px 20px;
`;

export const BgWrap = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background: #2d303a; //이미지 밖 채우는 색
`;

export const BgImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain; // 이미지 비율 유지
`;

export const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  color: #ffffff;
`;

export const Title = styled.h2`
  font-size: 90px;
  font-weight: 500;
  margin-bottom: 35px;
  letter-spacing: 0.02em;

  font-family: "Jersey 25", sans-serif;

  @media (max-width: 1200px) {
    font-size: 44px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.p`
  font-size: 15px;
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

export const ButtonWrap = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 14px 45px;
  font-size: 13px;
  font-weight: 10;

  background: rgba(153, 191, 255, 0.25);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  color: white;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: rgba(153, 191, 255, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.35);
  }
`;
