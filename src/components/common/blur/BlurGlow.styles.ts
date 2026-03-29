import styled, { css } from "styled-components";

type BlurGlowBaseProps = {
  $size: number;
  $color: string;
  $blur: number;
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
  $opacity?: number;
};

export const BlurGlowBase = styled.div<BlurGlowBaseProps>`
  position: absolute;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  border-radius: 50%;
  background: ${({ $color }) => $color};
  filter: ${({ $blur }) => `blur(${$blur}px)`};
  opacity: ${({ $opacity = 1 }) => $opacity};
  pointer-events: none;
  z-index: 0;

  ${({ $top }) =>
    $top !== undefined &&
    css`
      top: ${$top};
    `}

  ${({ $right }) =>
    $right !== undefined &&
    css`
      right: ${$right};
    `}

  ${({ $bottom }) =>
    $bottom !== undefined &&
    css`
      bottom: ${$bottom};
    `}

  ${({ $left }) =>
    $left !== undefined &&
    css`
      left: ${$left};
    `}
`;
