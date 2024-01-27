import { useState } from 'react';

import logoIcon from 'images/logo-2.png';

import * as SC from './Header.styled';

export default function Header({ navList }) {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const closeMenu = () => {
    return setIsOpenMobileMenu(false);
  };
  const togleMenu = () => {
    return isOpenMobileMenu
      ? setIsOpenMobileMenu(false)
      : setIsOpenMobileMenu(true);
  };

  return (
    <>
      <SC.Container>
        <SC.NavContainer>
          <SC.NavList>
            {navList.map(i => (
              <SC.NavItem key={i.name}>
                <SC.NavLink href={i.href}>{i.name}</SC.NavLink>
              </SC.NavItem>
            ))}
          </SC.NavList>
        </SC.NavContainer>
      </SC.Container>

      <SC.MenuContainer className={isOpenMobileMenu || 'hidden'}>
        <SC.MenuBtn onClick={togleMenu}>
          <SC.CloseIcon className={isOpenMobileMenu || 'hidden'} />
          <SC.MenuIcon className={isOpenMobileMenu || 'hidden'} />
        </SC.MenuBtn>
        <SC.NavList>
          {navList.map(i => (
            <SC.NavItem key={i.name}>
              <SC.NavLink href={i.href} onClick={closeMenu}>
                {i.name}
              </SC.NavLink>
            </SC.NavItem>
          ))}
        </SC.NavList>
      </SC.MenuContainer>

      <SC.Overlay
        onClick={closeMenu}
        className={isOpenMobileMenu || 'hidden'}
      />

      <SC.LogoLink to="/">
        <SC.LogoIcon src={logoIcon} />
      </SC.LogoLink>
    </>
  );
}
