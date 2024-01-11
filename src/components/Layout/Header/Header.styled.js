import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;

  height: 50px;
  width: 100%;
  background-color: var(--bg-color-overlay-secondary);

  @media screen and (max-width: 425px) {
    justify-content: space-between;
  }
`;

export const NavContainer = styled.div`
  @media screen and (max-width: 425px) {
    display: none;
  }
  @media screen and (min-width: 426px) {
    margin: 0 auto;
  }
`;
