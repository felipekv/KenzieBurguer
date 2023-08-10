import { StyledForm } from "./style";
import { Input } from "../Input";
import { Button } from "../../Button";
import Icon from "../../../assets/search-icon.svg";

export const Form = ({ onSubmit, setInputSearch }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Digitar pesquisa"
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
      />
      <Button
        height="var(--bt-height-2)"
        src={Icon}
        alt="Lupa de pesquisa"
        background="var(--color-primary)"
        border="2px solid var(--color-primary)"
      />
    </StyledForm>
  );
};
