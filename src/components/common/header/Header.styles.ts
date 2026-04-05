import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;
  margin: 0;
  padding: 0;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 102px;
  padding: 0 40px 0 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), #c1bfde33);
  backdrop-filter: blur(22px);
  border: 1px solid rgba(154, 174, 232, 0.4);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95),
    0 10px 24px rgba(117, 133, 196, 0.08);
`;

export const Logo = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: #fff;
  font-size: 28px;
  font-weight: 900;
  padding: 0;
  flex-shrink: 0;
`;

export const RightArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 48px;
  margin-left: auto;
  flex: 1;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 36px;
  min-height: 102px;
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
  color: ${({ $active }) => ($active ? "#2d2f38" : "#5b5d66")};
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  padding: 0;
  padding-bottom: 4px;
  border-bottom: 1px solid
    ${({ $active }) => ($active ? "rgba(73, 82, 124, 0.9)" : "transparent")};
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: #2d2f38;
    border-bottom-color: rgba(73, 82, 124, 0.55);
  }
`;

export const LoginButton = styled.button`
  min-width: 132px;
  height: 34px;
  padding: 0 28px;
  border: 1px solid #6b88d8;
  border-radius: 999px;
  cursor: pointer;
  color: #8c95ab;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);
  transition: background-color 0.2s ease, color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
    color: #4e5d8e;
    border-color: #5679d6;
  }
`;

export const MegaMenuWrap = styled.div`
  position: absolute;
  top: calc(100% - 10px);
  left: 50%;
  transform: translateX(-50%);
  width: min(92vw, 1120px);
  background: rgba(255, 255, 255, 0.94);
  padding: 22px 46px 28px;
  box-sizing: border-box;
  border: 1px solid rgba(154, 174, 232, 0.28);
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(97, 112, 173, 0.14);
  backdrop-filter: blur(18px);
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
  color: #3a4152;
  font-size: 18px;
  font-weight: 700;
`;

export const SubItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SubItem = styled.li`
  color: #697081;
  font-size: 14px;
  line-height: 1.9;
`;
