import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;

  width: 100%;
  height: 50px;
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
