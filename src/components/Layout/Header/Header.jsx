import Logo from './Logo/Logo';

import * as SC from './Header.styled';
import NavBar from './NavBar/NavBar';

export default function Header({ children }) {
  return (
    <SC.Container>
      <Logo />
      <SC.NavContainer>
        <NavBar />
      </SC.NavContainer>
      {children}
    </SC.Container>
  );
}
