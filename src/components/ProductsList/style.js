import styled from "styled-components";

export const StyledProductsList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 2rem;
  padding-bottom: 2rem;
  row-gap: 3.25rem;
  column-gap: 3.5rem;
  padding-inline: 2rem;

  @media (max-width: 788px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    overflow-x: auto;
    padding-right: 1rem;
  }
`;
