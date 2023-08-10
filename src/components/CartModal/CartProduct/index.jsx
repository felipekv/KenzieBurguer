import { Button } from "../../Button";
import {
  StyledCard,
  StyledTitle,
  StyledFigCaption,
  StyledImage,
  StyledDiv,
  StyledFigure,
} from "./style";
import DeleteIcon from "../../../assets/remove-icon.svg";

export const CartProduct = ({ product, id, removeFromCart }) => {
  return (
    <StyledCard id={id}>
      <StyledFigure>
        <StyledDiv>
          <StyledImage src={product.img} alt={product.name} />
        </StyledDiv>
        <StyledFigCaption>
          <StyledTitle>{product.name}</StyledTitle>
          <Button
            src={DeleteIcon}
            alt="Icone de lixeira, referenciando a remoção do produto"
            background="transparent"
            border="2px transparent"
            height="1rem"
            onClick={(e) =>
              removeFromCart(
                e.target.parentElement.parentElement.parentElement.parentElement
                  .id
              )
            }
          />
        </StyledFigCaption>
      </StyledFigure>
    </StyledCard>
  );
};
