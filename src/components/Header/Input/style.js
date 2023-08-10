import styled from "styled-components";
export const StyledInput = styled.input`
  height: var(--bt-height-1);
  background-color: white;
  padding-inline: 0.9375rem;
  border: 2px solid var(--color-grey-100);
  border-radius: var(--bd-radius);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-headline);
  color: var(--color-grey-300);
  width: clamp(100%, 22.8125rem, 23rem);

  &::placeholder {
    font-family: var(--font-primary);
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-headline);
    color: var(--color-grey-100);
  }

  :focus {
    color: var(--color-grey-300);
    border-color: var(--color-grey-600);
    &::placeholder {
      color: transparent;
    }
  }
`;
