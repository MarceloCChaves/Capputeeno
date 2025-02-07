import Link from "next/link";
import { ProductCard, ProductInfo } from "./styles";

const ProductCardComponent = ({id, name, image_url, price_in_cents } : Product) => {
  return (
    <ProductCard>
      <Link href={`/produtos/${id}`}>
        <img src={image_url} alt={name} loading="lazy" />
        <ProductInfo>
          <h3>{name}</h3>
          <hr />
          <p>R$ {(price_in_cents / 100).toFixed(2)}</p>
        </ProductInfo>
      </Link>
    </ProductCard>
  )
}

export default ProductCardComponent;