import * as SC from './Header.styled';
import NavBar from './NavBar/NavBar';

export default function Header({ children }) {
  return (
    <SC.Container>
      <SC.NavContainer>
        <NavBar />
      </SC.NavContainer>
      {children}
    </SC.Container>
  );
}
