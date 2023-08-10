import styled from "styled-components";

export const StyledCard = styled.li`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 5rem;
`;

export const StyledFigure = styled.figure`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

export const StyledDiv = styled.div`
  width: 5.1413rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-100);
  border: 2px transparent;
  border-radius: var(--bd-radius);
  margin-right: 1rem;
`;

export const StyledImage = styled.img`
  width: 3.4375rem;
  height: 3.4375rem;
`;

export const StyledFigCaption = styled.figcaption`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;

  button {
    padding: 0;
  }
`;

export const StyledTitle = styled.h3`
  font-size: var(--font-size-heading-3);
  color: var(--color-grey-600);
`;
