import { StyledInput } from "./style";

export const Input = ({ type, onChange, ...rest }) => {
  return <StyledInput {...rest} type={type} onChange={onChange} />;
};
