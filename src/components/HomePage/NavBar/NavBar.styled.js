import styled from 'styled-components';

export const NavList = styled.nav``;
export const List = styled.ul`
  @media screen and (min-width: 426px) {
    display: flex;
  }

  @media screen and (max-width: 425px) {
    padding: 50px 0;
  }
`;
export const Item = styled.li`
  @media screen and (min-width: 426px) {
    margin-right: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 425px) {
    padding-bottom: 15px;
    &:last-child {
      padding-bottom: 0;
    }
  }
`;
export const Link = styled.a`
  text-transform: uppercase;
  cursor: pointer;
`;
