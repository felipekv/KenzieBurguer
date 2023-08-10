import Logo from "../../assets/logo.svg";
import CartIcon from "../../assets/cart-icon.svg";
import { Form } from "./Form";
import { Button } from "../Button";
import {
  HeaderContainer,
  InputsContainer,
  StyledLogo,
  Container,
  CartContainer,
} from "./style";

export const Header = ({
  callback,
  setInputSearch,
  inputSearch,
  handleClickOpen,
  cartProducts,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    callback(inputSearch);
  };

  return (
    <HeaderContainer>
      <Container>
        <StyledLogo src={Logo} alt="Logo da Kenzie Burguer" />
        <CartContainer>
          <Button
            src={CartIcon}
            alt="Icone do carrinho"
            background="transparent"
            border="1px transparent"
            onClick={() => handleClickOpen()}
          />
          <span>{cartProducts.length}</span>
        </CartContainer>
      </Container>
      <InputsContainer>
        <Form onSubmit={handleSubmit} setInputSearch={setInputSearch} />
      </InputsContainer>
    </HeaderContainer>
  );
};
