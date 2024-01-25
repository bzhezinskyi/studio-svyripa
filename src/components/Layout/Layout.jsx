import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import Header from './Header/Header';
import MobileMenu from './Header/MobileMenu/MobileMenu';

import * as SC from './Layout.styled';
import Logo from './Header/Logo/Logo';

export default function Layout() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const togleMenu = () => {
    isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true);
  };

  return (
    <>
      <SC.Container>
        <Header />
        <Outlet />
        <MobileMenu isOpenMenu={isOpenMenu} togleMenu={togleMenu} />
        <SC.Overlay onClick={togleMenu} className={isOpenMenu || 'hidden'} />
        <Logo click={() => setIsOpenMenu(false)} />
      </SC.Container>
    </>
  );
}
