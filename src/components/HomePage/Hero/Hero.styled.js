import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  padding-top: 100px;
  /* height: 623px; */

  @media screen and (min-width: 426px) {
    display: flex;
  }
`;

export const Box = styled.div``;

export const Title = styled.h1`
  margin-bottom: 24px;

  color: var(--txt-color-primary);
  font-size: 96px;
`;

export const Txt = styled.p`
  text-align: center;
  color: var(--txt-color-secondary);
  text-transform: uppercase;
`;

export const Img = styled.img`
  border-radius: 250px 250px 0 0;
`;
