import { useState } from "react";
import * as S from "./Header.styles";
import Logo from "../Logo";
import LogoImage from "../../../assets/logos/Logo_4.png";
import type {
  HeaderProps,
  HeaderMenuItem,
  MegaMenuSection,
} from "./Header.types";

function chunkSections(sections: MegaMenuSection[] = [], size = 2) {
  const result: MegaMenuSection[][] = [];

  for (let i = 0; i < sections.length; i += size) {
    result.push(sections.slice(i, i + size));
  }

  return result;
}

export default function Header({
  menus,
  logo = "REVERSE",
  loginText = "LOGIN",
  onLogoClick,
  onLoginClick,
}: HeaderProps) {
  const [hoveredMenuKey, setHoveredMenuKey] = useState<string | null>(null);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo onClick={onLogoClick}>
          {logo && <Logo src={LogoImage} size={220} alt='logo' />}
        </S.Logo>

        <S.RightArea>
          <S.Nav>
            {menus.map((menu) => (
              <S.MenuItem
                key={menu.key}
                onMouseEnter={() => setHoveredMenuKey(menu.key)}
                onMouseLeave={() => setHoveredMenuKey(null)}
              >
                <S.MenuButton
                  type='button'
                  $active={hoveredMenuKey === menu.key}
                >
                  {menu.label}
                </S.MenuButton>

                {hoveredMenuKey === menu.key &&
                  menu.sections &&
                  menu.sections.length > 0 && (
                    <S.MegaMenuWrap
                      onMouseEnter={() => setHoveredMenuKey(menu.key)}
                      onMouseLeave={() => setHoveredMenuKey(null)}
                    >
                      <S.MegaMenuInner>
                        {chunkSections(menu.sections, 2).map((group, index) => (
                          <S.Column key={`${menu.key}-group-${index}`}>
                            {group.map((section) => (
                              <S.Section key={section.title}>
                                <S.SectionTitle>{section.title}</S.SectionTitle>

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
              </S.MenuItem>
            ))}
          </S.Nav>

          <S.LoginButton type='button' onClick={onLoginClick}>
            {loginText}
          </S.LoginButton>
        </S.RightArea>
      </S.Container>
    </S.Wrapper>
  );
}
