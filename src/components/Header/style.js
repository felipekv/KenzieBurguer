import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 6.25rem;
  gap: 1rem;
  background-color: var(--color-grey-0);

  @media (max-width: 788px) {
    flex-wrap: wrap;
    padding-inline: 1rem;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
  width: 350px;
  align-items: center;

  @media (max-width: 788px) {
    width: 100%;
  }
`;

export const StyledLogo = styled.img`
    src = {props.Logo}
`;

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-pack: justify;
  height: 3.125rem;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-pack: justify;
  height: 3.125rem;

  span {
    place-self: flex-start flex-end;
    width: 1.25rem;
    height: 1.5rem;
    font-family: var(--font-primary);
    background-color: var(--color-primary);
    border-radius: var(--bd-radius);
    margin-left: -1.75rem;
    margin-top: -0.2rem;
    text-align: center;
    color: white;
    font-weight: 900;
    font-size: 0.875rem;
    padding-top: 0.1875rem;
  }
`;
