import { useState } from "react";
import * as S from "./Header.styles";
import Logo from "../Logo";
import LogoImage from "../../../assets/logos/Header_logo.png";
import BannerLogo from "../../../assets/logos/baner.png";
import type { HeaderProps } from "./Header.types";

export default function Header({
  menus,
  logo = "REVERSE",
  loginText = "LOGIN",
  onLogoClick,
  onLoginClick,
}: HeaderProps) {
  const [hoveredMenuKey, setHoveredMenuKey] = useState<string | null>(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo onClick={onLogoClick}>
          {logo && <Logo src={LogoImage} size={240} alt="logo" />}
        </S.Logo>

        <S.RightArea>
          <S.NavArea
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => {
              setIsMegaMenuOpen(false);
              setHoveredMenuKey(null);
            }}
          >
            <S.Nav>
              {menus.map((menu) => (
                <S.MenuItem
                  key={menu.key}
                  onMouseEnter={() => setHoveredMenuKey(menu.key)}
                >
                  <S.MenuButton
                    type="button"
                    $active={hoveredMenuKey === menu.key}
                  >
                    {menu.label}
                  </S.MenuButton>
                </S.MenuItem>
              ))}
            </S.Nav>

            {isMegaMenuOpen && (
              <S.MegaMenuWrap>
                <S.MegaMenuInner>
                  {menus.map((menu) => (
                    <S.Column key={menu.key}>
                      <S.ColumnTitle>{menu.label}</S.ColumnTitle>

                      {menu.sections?.map((section) => (
                        <S.Section key={`${menu.key}-${section.title}`}>
                          <S.SectionHeading>
                            <S.SectionIcon
                              src={BannerLogo}
                              alt=""
                              aria-hidden="true"
                            />
                            <S.SectionTitle>{section.title}</S.SectionTitle>
                          </S.SectionHeading>

                          {section.items.length > 0 && (
                            <S.SubItemList>
                              {section.items.map((item) => (
                                <S.SubItem key={item}>{item}</S.SubItem>
                              ))}
                            </S.SubItemList>
                          )}
                        </S.Section>
                      ))}
                    </S.Column>
                  ))}
                </S.MegaMenuInner>
              </S.MegaMenuWrap>
            )}
          </S.NavArea>

          <S.LoginButton type="button" onClick={onLoginClick}>
            {loginText}
          </S.LoginButton>
        </S.RightArea>
      </S.Container>
    </S.Wrapper>
  );
}
