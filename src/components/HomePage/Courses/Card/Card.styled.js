import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: inline-block;
  position: relative;

  box-sizing: border-box;

  border-radius: 15px;

  background-color: var(--bg-color-secondary);
  @media screen and (max-width: 425px) {
    padding: 10px;
  }
  @media screen and (min-width: 426px) and (max-width: 767px) {
    padding: 15px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 20px;
  }
  @media screen and (min-width: 1024px) {
    padding: 25px;
  }
`;
export const Title = styled.h3`
  text-align: center;
  margin-bottom: 25px;
`;
export const Txt = styled.p`
  text-align: start;
`;

export const Btn = styled(Link)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 16px;

  border: var(--border-primary);
  border-radius: 15px;

  background-color: var(--bg-color-btn);
`;
