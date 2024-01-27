import { Outlet } from 'react-router-dom';

import * as SC from './Layout.styled';

export default function Layout() {
  return (
    <SC.Container>
      <Outlet />
    </SC.Container>
  );
}
