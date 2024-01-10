import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: inline-block;

  box-sizing: border-box;

  width: 480px;
  height: 480px;

  padding: 25px;

  border-radius: 15px;
  border: 1px solid var(--bg-color-primary);

  background-color: var(--bg-color-secondary);
`;
export const Title = styled.h3`
  text-align: center;
  margin-bottom: 25px;
`;
export const Txt = styled.p``;

export const Btn = styled(Link)`
  background-color: var(--txt-color-primary);
`;
