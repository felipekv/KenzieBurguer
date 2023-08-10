import styled from "styled-components";

export const ModalHeaderStyled = styled.header`
  width: 28.75rem;
  height: 3.375rem;
  background-color: var(--color-primary);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1.25rem;

  button {
    margin-right: -1.25rem;
  }

  h3 {
    color: white;
    font-size: var(--font-size-heading-3);
  }

  @media ((max-width: 788px) and (min-width: 426px)) {
    width: 37.25rem;
  }

  @media ((max-width: 425px) and (min-width: 376px)) {
    width: 22.25rem;
  }

  @media ((max-width: 375px) and (min-width:321px)) {
    width: 18rem;
  }

  @media (max-width: 280px) {
    width: 15.5rem;
  }
`;

export const ModalContainerStyled = styled.div`
  width: 28.75rem;
  @media (max-width: 788px) {
    width: 47.25rem;
  }
`;

export const ModalListStyled = styled.ul`
  width: 100%;
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ModalValueContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-inline: 1rem;
`;

export const ModalValueTitle = styled.h4`
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-body);
  color: var(--color-grey-600);
`;

export const ModalValue = styled.p`
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-body);
  color: var(--color-grey-300);
`;

export const ModalRemoveButton = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  padding-inline: 1rem;

  button {
    width: 100%;
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-headline);
    :hover {
      background-color: var(--color-primary);
      border-color: var(--color-primary);
      color: white;
    }
  }
`;
