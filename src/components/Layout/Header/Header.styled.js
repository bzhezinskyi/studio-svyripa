import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;

  width: 100%;
  height: 50px;

  @media screen and (max-width: 425px) {
    justify-content: space-between;
  }
`;
