import { Outlet } from "react-router-dom";

import * as SC from "./Layout.styled";
import Header from "./Header/Header";

export default function Layout() {
  return (
    <>
      <SC.Container>
        <Header />
        <Outlet />
      </SC.Container>
    </>
  );
}
