import { StyledButton } from "./style";

export const Button = ({
  text,
  background,
  color,
  height,
  border,
  src,
  alt,
  ...rest
}) => {
  return (
    <StyledButton
      background={background}
      height={height}
      border={border}
      color={color}
      {...rest}
    >
      {text ? text : <img src={src} alt={alt} />}
    </StyledButton>
  );
};
