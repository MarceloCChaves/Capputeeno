import { FaShoppingBag } from "react-icons/fa";
import BackButton from "../backButton";
import { ProductDetails } from "./styles";

interface productDetailsProps extends Product {
  handleAddToCart: () => void;
}

const ProductDetailsComponent = ({name, image_url, category, price_in_cents, description, handleAddToCart}: productDetailsProps) => {
  return(
    <ProductDetails>
      <div>
        <BackButton/>
        <img src={image_url} alt={name} />
      </div>
      <div>
        <p>{category}</p>
        <h1>{name}</h1>
        <p>R$ {(price_in_cents / 100).toFixed(2)}</p>
        <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
        <p>Descrição</p>
        <p>{description}</p>
        <button onClick={handleAddToCart}>
          <FaShoppingBag color="#fff" size={20}/>
          ADICIONAR AO CARRINHO
        </button>
      </div>
    </ProductDetails>
  )
}

export default ProductDetailsComponent;