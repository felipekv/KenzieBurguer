import { ProductsCard } from "./ProductsCard";
import { StyledProductsList } from "./style";

export const ProductsList = ({ products, addToCart }) => {
  return (
    <StyledProductsList>
      {products.map((product) => (
        <ProductsCard
          key={product.id}
          id={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </StyledProductsList>
  );
};
