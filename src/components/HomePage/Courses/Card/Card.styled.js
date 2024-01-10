import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: inline-block;
  position: relative;

  box-sizing: border-box;

  /* width: 480px; */

  padding: 25px;

  border-radius: 15px;

  background-color: var(--bg-color-secondary);
`;
export const Title = styled.h3`
  text-align: center;
  margin-bottom: 25px;
`;
export const Txt = styled.p``;

export const Btn = styled(Link)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 16px;

  border: var(--border-primary);
  border-radius: 15px;

  background-color: var(--bg-color-btn);
`;
