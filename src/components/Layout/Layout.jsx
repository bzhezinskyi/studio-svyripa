import { Outlet } from 'react-router-dom';

import Header from './Header/Header';

import * as SC from './Layout.styled';

export default function Layout() {
  return (
    <>
      <SC.Container>
        {/* <Header /> */}
        <Outlet />
      </SC.Container>
    </>
  );
}
