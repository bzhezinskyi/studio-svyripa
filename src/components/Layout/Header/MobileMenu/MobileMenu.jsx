import * as SC from './MobileMenu.styled';
import NavBar from '../NavBar/NavBar';

export default function MobileMenu({ isOpenMenu, togleMenu }) {
  return (
    <>
      <SC.Container>
        <SC.MenuContainer className={isOpenMenu || 'hidden'}>
          <SC.MenuBtn onClick={togleMenu}>
            <SC.CloseIcon className={isOpenMenu || 'hidden'} />
            <SC.MenuIcon className={isOpenMenu || 'hidden'} />
          </SC.MenuBtn>
          <NavBar togleMenu={togleMenu} />
        </SC.MenuContainer>
      </SC.Container>
    </>
  );
}
