import Logo from "./Logo/Logo";

import * as SC from "./Header.styled";

export default function Header() {
  return (
    <SC.Container>
      <Logo />
      <SC.NavList>
        <SC.List>
          <SC.Item>
            <SC.Link>Про мене</SC.Link>
          </SC.Item>
          <SC.Item>
            <SC.Link>Курси</SC.Link>
          </SC.Item>
          <SC.Item>
            <SC.Link>Запис на послуги</SC.Link>
          </SC.Item>
        </SC.List>
      </SC.NavList>
    </SC.Container>
  );
}
