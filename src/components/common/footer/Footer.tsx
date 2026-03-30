import * as S from "./Footer.styles";

const footerMenus = ["About Us", "활동 및 참여", "정보 및 교류", "게시판"];

const footerPolicies = [
  "Privacy Policy",
  "Terms of Service",
  "Cookies Settings",
];

export default function Footer() {
  return (
    <S.Footer>
      <S.Inner>
        <S.TopRow>
          <S.LogoButton type='button'>Logo</S.LogoButton>

          <S.Nav>
            {footerMenus.map((menu) => (
              <S.NavButton key={menu} type='button'>
                {menu}
              </S.NavButton>
            ))}
          </S.Nav>

          <S.IconButton
            type='button'
            aria-label='인스타그램 바로가기'
            onClick={() =>
              window.open("https://www.instagram.com/nsu_reverse/", "_blank")
            }
          >
            <S.InstagramIcon viewBox='0 0 24 24' fill='none'>
              <rect
                x='3.5'
                y='3.5'
                width='17'
                height='17'
                rx='4.5'
                stroke='currentColor'
                strokeWidth='1.8'
              />
              <circle
                cx='12'
                cy='12'
                r='4'
                stroke='currentColor'
                strokeWidth='1.8'
              />
              <circle cx='17.3' cy='6.7' r='1.1' fill='currentColor' />
            </S.InstagramIcon>
          </S.IconButton>
        </S.TopRow>

        <S.Divider />

        <S.BottomRow>
          <S.CopyText>© 2024 Relume. All rights reserved.</S.CopyText>

          <S.PolicyList>
            {footerPolicies.map((item) => (
              <S.PolicyButton key={item} type='button'>
                {item}
              </S.PolicyButton>
            ))}
          </S.PolicyList>
        </S.BottomRow>
      </S.Inner>
    </S.Footer>
  );
}
