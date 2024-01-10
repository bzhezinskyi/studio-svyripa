import * as SC from './MobileMenu.styled';
import NavBar from '../NavBar/NavBar';

export default function MobileMenu({ isOpenMenu, togleMenu }) {
  return (
    <>
      <SC.MobileContainer>
        {isOpenMenu ? (
          <>
            <NavBar>
              <SC.MenuBtn onClick={togleMenu}>
                <SC.CloseIcon />
              </SC.MenuBtn>
            </NavBar>
          </>
        ) : (
          <>
            <SC.MenuBtn onClick={togleMenu}>
              <SC.MenuIcon />
            </SC.MenuBtn>
          </>
        )}
      </SC.MobileContainer>
    </>
  );
}
