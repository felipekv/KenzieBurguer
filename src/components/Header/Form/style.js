import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  input {
    width: 100%;
  }

  Button {
    position: absolute;
    top: center;
    right: 110px;
  }

  @media (max-width: 788px) {
    width: 100%;

    input {
      width: 100%;
    }

    Button {
      position: absolute;
      top: center;
      right: 1.75rem;
    }
  }
`;
