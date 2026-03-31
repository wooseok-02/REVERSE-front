import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 100;
  margin: 0px;
  padding: 0px;
`;

export const Container = styled.div`
  width: 100%;

  min-height: 74px;
  padding: 0 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(10, 10, 10, 0.18);
  backdrop-filter: blur(14px);

  box-shadow: 0 8px 18px 0 rgba(255, 255, 255, 0.2),
    inset 0 22px 26px 0 rgba(255, 255, 255, 0.15);
`;

export const Logo = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: #fff;
  font-size: 28px;
  font-weight: 900;
`;

export const RightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 34px;
  height: 74px;
`;

export const MenuItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const MenuButton = styled.button<{ $active?: boolean }>`
  border: none;
  background: none;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "#ffffff" : "#e4e4e4")};
  font-size: 16px;
  font-weight: 600;
  padding: 0;
`;

export const LoginButton = styled.button`
  height: 32px;
  padding: 0 32px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  background: linear-gradient(90deg, #5d2fff, #7f4dff);
`;

export const MegaMenuWrap = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  width: min(92vw, 1120px);
  background: #4a4a4a;
  padding: 22px 46px 28px;
  box-sizing: border-box;
`;

export const MegaMenuInner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 28px;
`;

export const Column = styled.div`
  min-width: 0;
`;

export const Section = styled.div`
  & + & {
    margin-top: 28px;
  }
`;

export const SectionTitle = styled.h4`
  margin: 0 0 14px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;

export const SubItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SubItem = styled.li`
  color: #e8e8e8;
  font-size: 14px;
  line-height: 1.9;
`;
