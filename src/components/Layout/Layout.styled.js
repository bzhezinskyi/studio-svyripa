import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 40px;
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
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  height: 120%;

  background-color: var(--bg-color-overlay);

  transition: var(--animations);
  &.hidden {
    top: -120%;
  }
`;
