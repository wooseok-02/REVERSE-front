import styled from "styled-components";

export const Footer = styled.footer`
  background: #111111;
  width: 100%;
  padding: 64px 20px 56px;
`;

export const Inner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

export const TopRow = styled.div`
  min-height: 36px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: start;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 18px;
  }
`;

export const LogoButton = styled.button`
  justify-self: start;
  padding: 0;
  border: none;
  background: none;
  color: #ffffff;
  font-size: 32px;
  font-style: italic;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;

  @media (max-width: 900px) {
    justify-self: center;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding-top: 6px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 16px 20px;
    padding-top: 0;
  }
`;

export const NavButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  color: rgba(255, 255, 255, 0.95);
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
`;

export const IconButton = styled.button`
  justify-self: end;
  padding: 0;
  border: none;
  background: none;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 900px) {
    justify-self: center;
  }
`;

export const InstagramIcon = styled.svg`
  width: 18px;
  height: 18px;
  display: block;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 28px 0 18px;
  background: rgba(255, 255, 255, 0.28);

  @media (max-width: 900px) {
    margin: 24px 0 18px;
  }
`;

export const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
`;

export const CopyText = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 11px;
  font-weight: 400;
  line-height: 1.4;
`;

export const PolicyList = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
`;

export const PolicyButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  color: rgba(255, 255, 255, 0.72);
  font-size: 11px;
  font-weight: 400;
  line-height: 1.4;
  text-decoration: underline;
  cursor: pointer;
`;
