import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  padding-top: 50px;

  @media screen and (max-width: 767px) {
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }
`;
export const Box = styled.div`
  @media screen and (max-width: 425px) {
    margin-bottom: 16px;
  }
  @media screen and (min-width: 426px) and (max-width: 767px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 768px) {
    margin: auto 10px;
  }
`;
export const Title = styled.h2`
  color: var(--txt-color-primary);
  @media screen and (max-width: 425px) {
    font-size: 48px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 426px) and (max-width: 767px) {
    font-size: 60px;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 64px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 96px;
    margin-bottom: 24px;
  }
`;
export const Txt = styled.p`
  color: var(--txt-color-secondary);
  text-align: start;

  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
  @media screen and (min-width: 426px) and (max-width: 767px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;
export const Img = styled.img`
  border-radius: 250px 250px 0 0;
  @media screen and (max-width: 425px) {
  }
  @media screen and (min-width: 426px) and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 300px;
  }
  @media screen and (min-width: 1024px) {
    width: 400px;
  }
`;
