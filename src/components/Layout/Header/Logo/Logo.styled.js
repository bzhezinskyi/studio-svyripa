import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
  display: inline-block;
  /* margin-right: 100px; */
`;
export const LogoIcon = styled.img`
  width: 100px;
`;
