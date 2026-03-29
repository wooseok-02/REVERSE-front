import { BlurGlowBase } from "./BlurGlow.styles";

export interface BlurGlowProps {
  size?: number;
  color: string;
  blur?: number;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  opacity?: number;
}

export default function BlurGlow({
  size = 420,
  color,
  blur = 420,
  top,
  right,
  bottom,
  left,
  opacity = 1,
}: BlurGlowProps) {
  return (
    <BlurGlowBase
      $size={size}
      $color={color}
      $blur={blur}
      $top={top}
      $right={right}
      $bottom={bottom}
      $left={left}
      $opacity={opacity}
    />
  );
}
