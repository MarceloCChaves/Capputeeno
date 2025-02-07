import Link from "next/link";
import { ProductCard, ProductInfo, ProductImage, ProductTop, RemoveButton } from "./styles";
import { CgTrash } from "react-icons/cg";

interface CartProductProps extends Product {
  removeFromCart: (id: string) => void;
}

const CartProduct = ({ id, name, image_url, price_in_cents, description, removeFromCart }: CartProductProps) => {
  return (
    <ProductCard key={id}>
      <ProductImage src={image_url} alt={name} />
      <ProductInfo>
        <ProductTop>
          <h3>{name}</h3>
          <RemoveButton onClick={() => removeFromCart(id)}>
            <CgTrash color="#DE3838" size={30} />
          </RemoveButton>
        </ProductTop>
        <p>{description}</p>
        <strong>R$ {(price_in_cents / 100).toFixed(2)}</strong>
      </ProductInfo>
    </ProductCard>
  );
};

export default CartProduct;
