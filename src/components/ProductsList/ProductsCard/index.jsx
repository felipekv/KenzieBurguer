import { Button } from "../../Button";
import {
  StyledCard,
  StyledHeader,
  StyledImage,
  StyledMain,
  StyledName,
  StyledType,
  StyledPrice,
} from "./style";

export const ProductsCard = ({ product, addToCart, id }) => {
  return (
    <StyledCard id={id}>
      <StyledHeader>
        <StyledImage src={product.img} alt={product.name} />
      </StyledHeader>
      <StyledMain>
        <StyledName>{product.name}</StyledName>
        <StyledType>{product.category}</StyledType>
        <StyledPrice>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </StyledPrice>
        <Button
          text="Adicionar"
          background="var(--color-grey-400)"
          border="2px solid var(--color-grey-400)"
          color="white"
          height="var(--bt-height-2)"
          onClick={(e) => addToCart(e.target.parentElement.parentElement.id)}
        />
      </StyledMain>
    </StyledCard>
  );
};
