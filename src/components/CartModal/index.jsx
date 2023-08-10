import * as React from "react";
import { Button } from "../Button";
import { CartProduct } from "./CartProduct";
import closeIcon from "../../assets/close-icon.svg";
import {
  ModalHeaderStyled,
  ModalContainerStyled,
  ModalListStyled,
  ModalValueContainer,
  ModalValueTitle,
  ModalValue,
  ModalRemoveButton,
} from "./style";
import Dialog from "@mui/material/Dialog";

export const CartModal = ({
  cartProducts,
  handleClose,
  open,
  removeFromCart,
  removeAllFromCart,
  totalValue,
}) => {
  return (
    <ModalContainerStyled>
      <Dialog open={open} onClose={handleClose}>
        <ModalHeaderStyled>
          <h3>Carrinho de Compras </h3>
          <Button
            onClick={handleClose}
            src={closeIcon}
            background="transparent"
            border="2px transparent"
            height="3.375rem"
          />
        </ModalHeaderStyled>

        <ModalListStyled>
          {cartProducts.map((product) => (
            <CartProduct
              key={product.id}
              id={product.id}
              product={product}
              removeFromCart={removeFromCart}
            />
          ))}
          <hr />
        </ModalListStyled>
        <ModalValueContainer>
          <ModalValueTitle>Total:</ModalValueTitle>
          <ModalValue>
            {totalValue.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </ModalValue>
        </ModalValueContainer>
        <ModalRemoveButton>
          <Button
            onClick={() => removeAllFromCart()}
            text="Remover produtos"
            height="var(--bt-height-1)"
            color="var(--color-grey-300)"
            background="var(--color-grey-100)"
            border="2px solid var(--color-grey-100)"
          />
        </ModalRemoveButton>
      </Dialog>
    </ModalContainerStyled>
  );
};
