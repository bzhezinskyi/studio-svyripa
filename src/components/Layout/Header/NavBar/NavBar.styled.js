import styled from 'styled-components';

export const Contaner = styled.div`
  @media screen and (max-width: 425px) {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    height: 100%;
    width: 300px;
    background-color: var(--bg-color-primary);
  }
`;
export const NavList = styled.nav``;
export const List = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  margin-right: 15px;
  &:last-child {
    margin-right: 0;
  }
`;
export const Link = styled.a`
  text-transform: uppercase;
  cursor: pointer;
`;
