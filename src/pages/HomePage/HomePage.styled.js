import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.div`
  padding-top: 50px;

  @media screen and (max-width: 767px) {
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
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

export const Container = styled.div`
  padding-top: 50px;

  text-align: center;
`;

export const Title = styled.h1`
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

export const Subtitle = styled.h3`
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  color: var(--txt-color-secondary);
`;

export const Txt = styled.p`
  color: var(--txt-color-secondary);
  text-align: start;
  font-size: 16px;
  @media screen and (min-width: 351px) and (max-width: 425px) {
    font-size: 18px;
  }
  @media screen and (min-width: 426px) and (max-width: 767px) {
    font-size: 20px;
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

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 300px;
  }
  @media screen and (min-width: 1024px) {
    width: 400px;
  }
`;

export const CardList = styled.ul`
  margin: 0 8px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media screen and (min-width: 1024px) {
    margin: 0 16px;
  }
`;
export const CardItem = styled.li`
  display: inline-block;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: var(--bg-color-secondary);

  @media screen and (max-width: 425px) {
    margin-bottom: 20px;
    padding: 10px;
  }
  @media screen and (min-width: 426px) and (max-width: 767px) {
    margin-bottom: 28px;
    padding: 15px;
  }
  @media screen and (min-width: 768px) {
    width: 364px;
    padding: 20px;

    &:nth-child(odd) {
      margin-bottom: 50px;
    }
    &:nth-child(even) {
      margin-top: 50px;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 486px;
    padding: 25px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
export const CardTitle = styled.h3`
  text-align: center;
  margin-bottom: 24px;
`;
export const CardTxt = styled.p`
  text-align: start;
`;
export const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CardBtn = styled(Link)`
  padding: 16px;

  border: var(--border-primary);
  border-radius: 15px;

  background-color: var(--bg-color-btn);
`;
