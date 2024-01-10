import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  @media screen and (max-width: 425px) {
    margin: 5px;
  }
  @media screen and (min-width: 426px) and (max-width: 767px) {
    margin: 10px auto;
    width: 426px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin: 10px auto;
    width: 768px;
  }
  @media screen and (min-width: 1024px) {
    margin: 10px auto;
    width: 1024px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  bottom: -5px;
  left: -5px;
  background-color: var(--bg-color-overlay);
`;
