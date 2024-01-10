import styled from "styled-components";

export const Container = styled.div``;
export const Title = styled.h2`
  margin-bottom: 24px;
  text-align: center;

  color: var(--txt-color-primary);
  font-size: 96px;
`;
export const ListCard = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Item = styled.li`
  &:nth-child(odd) {
    margin-bottom: 50px;
  }
  &:nth-child(even) {
    margin-top: 50px;
  }
`;
