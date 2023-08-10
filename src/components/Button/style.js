import styled from "styled-components";

export const StyledButton = styled.button`
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  background-color: ${(props) => props.background};
`;
