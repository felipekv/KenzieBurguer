import styled from "styled-components";

export const StyledCard = styled.li`
  min-width: 18.75rem;
  height: 21.375rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 2px solid var(--color-grey-100);
  border-radius: var(--bd-radius);

  :hover,
  :focus {
    scale: 1.1;
    border-color: var(--color-primary);

    main {
      button {
        background-color: var(--color-primary);
        border-color: var(--color-primary);
      }
    }
  }
`;

export const StyledHeader = styled.header`
  width: 100%;
  height: 9.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-0);
`;
export const StyledImage = styled.img`
  height: 100%;
`;
export const StyledMain = styled.main`
  width: 100%;
  height: 12.25rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyledName = styled.h3`
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-heading-3);
  color: var(--color-grey-600);
`;

export const StyledType = styled.p`
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-body);
  color: var(--color-grey-300);
`;

export const StyledPrice = styled.p`
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-body);
  color: var(--color-primary);
`;
