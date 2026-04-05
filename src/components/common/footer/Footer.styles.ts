import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  background: linear-gradient(180deg, #141414 0%, #050505 100%);
  padding: 54px 28px 34px;
`;

export const Inner = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

export const TopRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 36px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 22px;
  }
`;

export const LogoButton = styled.button`
  justify-self: start;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  @media (max-width: 900px) {
    justify-self: center;
  }
`;

export const LogoImage = styled.img`
  display: block;
  width: 72px;
  height: auto;
  object-fit: contain;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 52px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 18px 28px;
  }
`;

export const NavButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  color: rgba(255, 255, 255, 0.92);
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
`;

export const IconButton = styled.button`
  justify-self: end;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: none;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;

  @media (max-width: 900px) {
    justify-self: center;
  }
`;

export const InstagramIcon = styled.svg`
  width: 16px;
  height: 16px;
  display: block;
`;

export const Divider = styled.div`
  width: calc(100% - 132px);
  height: 1px;
  margin: 18px 0 14px auto;
  background: rgba(255, 255, 255, 0.58);

  @media (max-width: 900px) {
    width: 100%;
    margin: 18px 0 14px;
  }
`;

export const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;

export const CopyText = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 10px;
  font-weight: 400;
  line-height: 1.4;
`;

export const PolicyList = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
`;

export const PolicyButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  color: rgba(255, 255, 255, 0.72);
  font-size: 10px;
  font-weight: 400;
  line-height: 1.4;
  text-decoration: underline;
  cursor: pointer;
`;
