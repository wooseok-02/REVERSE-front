export interface MegaMenuSection {
  title: string;
  items: string[];
}

export interface HeaderMenuItem {
  label: string;
  key: string;
  sections?: MegaMenuSection[];
  path?: string;
}

export interface HeaderProps {
  menus: HeaderMenuItem[];
  logo?: string;
  loginText?: string;
  onLogoClick?: () => void;
  onLoginClick?: () => void;
}
