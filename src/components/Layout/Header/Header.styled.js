import styled from 'styled-components';
import { IoMenu, IoClose } from 'react-icons/io5';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;

  height: 50px;
  width: 100%;
  background-color: var(--bg-color-overlay-secondary);
`;

export const NavContainer = styled.div`
  @media screen and (max-width: 425px) {
    display: none;
  }
  @media screen and (min-width: 426px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 544px) {
    padding-left: 100px;
  }
`;

export const NavList = styled.ul`
  @media screen and (min-width: 426px) {
    display: flex;
  }
  @media screen and (max-width: 425px) {
    padding: 50px 0;
  }
`;
export const NavItem = styled.li`
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
export const NavLink = styled.a`
  text-transform: uppercase;
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  text-align: center;
  width: 100%;
  min-height: 100px;
  background-color: var(--bg-color-primary);

  transition: var(--animations);
  &.hidden {
    top: -100%;
  }

  @media screen and (min-width: 426px) {
    display: none;
  }
`;
export const MenuBtn = styled.button`
  position: fixed;
  top: 5px;
  right: 5px;

  border: none;
  background-color: transparent;
`;
export const MenuIcon = styled(IoMenu)`
  width: 0;
  height: 0;
  transition: var(--animations);
  &.hidden {
    width: 30px;
    height: 30px;
  }
`;
export const CloseIcon = styled(IoClose)`
  width: 30px;
  height: 30px;
  transition: var(--animations);
  &.hidden {
    width: 0;
    height: 0;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  height: 120%;

  background-color: var(--bg-color-overlay);

  transition: var(--animations);
  &.hidden {
    top: -120%;
  }
  @media screen and (min-width: 426px) {
    display: none;
  }
`;
