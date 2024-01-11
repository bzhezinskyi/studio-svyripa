import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 50px;

  text-align: center;
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
export const ListCard = styled.ul`
  @media screen and (max-width: 425px) {
  }
  @media screen and (min-width: 426px) and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 8px;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 16px;
  }
`;
export const Item = styled.li`
  @media screen and (max-width: 425px) {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 426px) and (max-width: 767px) {
    margin-bottom: 28px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 364px;
    &:nth-child(odd) {
      margin-bottom: 50px;
    }
    &:nth-child(even) {
      margin-top: 50px;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 486px;

    &:nth-child(odd) {
      margin-bottom: 50px;
    }
    &:nth-child(even) {
      margin-top: 50px;
    }
  }
`;
