import type { ReactNode } from "react";
import * as S from "./AuthShell.styles";
import BlurGlow from "../../common/blur/BlurGlow";
import Logo from "../../common/Logo";
import LogoImage from "../../../assets/logos/Logo_2.png";

type AuthShellProps = {
  title: string;
  children: ReactNode;
};

export default function AuthShell({ title, children }: AuthShellProps) {
  return (
    <S.Frame>
      <BlurGlow
        color='#1D39C4'
        blur={80}
        size={200}
        right='6vw'
        top='-1vw'
        opacity={0.5}
      />
      <BlurGlow
        color='#1D39C4'
        blur={80}
        size={240}
        left='-2vw'
        bottom='-1vw'
        opacity={0.5}
      />

      <S.Inner>
        <S.TopArea>
          <Logo src={LogoImage} size={64} />
          <S.Title>{title}</S.Title>
        </S.TopArea>

        {children}
      </S.Inner>
    </S.Frame>
  );
}
