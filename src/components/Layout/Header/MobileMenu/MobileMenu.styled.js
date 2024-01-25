import styled from 'styled-components';

import { IoMenu, IoClose } from 'react-icons/io5';

export const Container = styled.div`
  @media screen and (min-width: 426px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  text-align: center;
  width: 100%;
  background-color: var(--bg-color-primary);

  transition: var(--animations);
  &.hidden {
    top: -100%;
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
