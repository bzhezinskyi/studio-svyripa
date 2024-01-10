import styled from 'styled-components';

import { IoMenu, IoClose } from 'react-icons/io5';

export const Container = styled.div`
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  @media screen and (min-width: 426px) {
    display: none;
  }
`;

export const MenuBtn = styled.button`
  position: fixed;
  top: 5px;
  right: 5px;
  border: none;
`;
export const MenuIcon = styled(IoMenu)`
  width: 30px;
  height: 30px;
`;
export const CloseIcon = styled(IoClose)`
  width: 30px;
  height: 30px;
`;
