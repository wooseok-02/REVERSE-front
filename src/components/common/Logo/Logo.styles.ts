import styled from "styled-components";

export const Wrapper = styled.div<{ size?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: ${({ size }) => (size ? `${size}px` : "74px")};
    height: auto;
    object-fit: contain;
  }
`;
