import { useState } from 'react';

import * as SC from './MobileMenu.styled';

export default function MobileMenu({ children }) {
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
        <SC.MenuContainer className={isOpenMobileMenu || 'hidden'}>
          <SC.MenuBtn onClick={togleMenu}>
            <SC.CloseIcon className={isOpenMobileMenu || 'hidden'} />
            <SC.MenuIcon className={isOpenMobileMenu || 'hidden'} />
          </SC.MenuBtn>
          <SC.List>
            {children.map(i => (
              <SC.Item>
                <SC.Link href={i.href} onClick={closeMenu}>
                  {i.name}
                </SC.Link>
              </SC.Item>
            ))}
          </SC.List>
        </SC.MenuContainer>
      </SC.Container>
      <SC.Overlay
        onClick={closeMenu}
        className={isOpenMobileMenu || 'hidden'}
      />
    </>
  );
}
