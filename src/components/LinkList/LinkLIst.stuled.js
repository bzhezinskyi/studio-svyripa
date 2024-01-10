import styled from "styled-components";

export const List = styled.ul``;
export const Item = styled.li`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;
export const Link = styled.a`
  display: block;
  text-align: center;
  padding: 10px;
  border: 1px solid #780609;
  border-radius: 15px;
  cursor: pointer;
`;
