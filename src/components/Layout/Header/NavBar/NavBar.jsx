import * as SC from './NavBar.styled';

export default function NavBar({ children }) {
  return (
    <SC.Contaner>
      {children}
      <SC.NavList>
        <SC.List>
          <SC.Item>
            <SC.Link href="#AboutMe">Про мене</SC.Link>
          </SC.Item>
          <SC.Item>
            <SC.Link href="#Courses">Курси</SC.Link>
          </SC.Item>
          <SC.Item>
            <SC.Link>Запис на послуги</SC.Link>
          </SC.Item>
        </SC.List>
      </SC.NavList>
    </SC.Contaner>
  );
}
