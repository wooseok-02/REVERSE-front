import * as S from "./Logo.styles";

type LogoProps = {
  src: string;
  size?: number;
  alt?: string;
};

export default function Logo({ src, size = 74, alt = "logo" }: LogoProps) {
  return (
    <S.Wrapper size={size}>
      <img src={src} alt={alt} />
    </S.Wrapper>
  );
}
