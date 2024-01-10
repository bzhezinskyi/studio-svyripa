import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import Header from './Header/Header';
import MobileMenu from './Header/MobileMenu/MobileMenu';

import * as SC from './Layout.styled';

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
        {isOpenMenu && <SC.Overlay onClick={togleMenu} />}
      </SC.Container>
    </>
  );
}
