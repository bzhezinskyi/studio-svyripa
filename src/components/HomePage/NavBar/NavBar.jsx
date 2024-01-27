import * as SC from './NavBar.styled';

export default function NavBar({ togleMenu }) {
  return (
    <>
      <SC.NavList>
        <SC.List>
          <SC.Item>
            <SC.Link href="#AboutMe" onClick={togleMenu}>
              Про мене
            </SC.Link>
          </SC.Item>
          <SC.Item>
            <SC.Link href="#Courses" onClick={togleMenu}>
              Курси
            </SC.Link>
          </SC.Item>
          <SC.Item>
            <SC.Link
              href="https://widget.easyweek.io/svyripa-nails/63873"
              onClick={togleMenu}
            >
              Запис на послуги
            </SC.Link>
          </SC.Item>
        </SC.List>
      </SC.NavList>
    </>
  );
}
