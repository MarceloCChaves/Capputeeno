"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from "../../api/queries";
import { useParams } from "next/navigation";
import { Container, ProductDetails } from "./styles";
import Header from "@/app/components/header";
import { FaShoppingBag } from "react-icons/fa";
import BackButton from "@/app/components/backButton";

const ProductPage = () => {
  const { id } = useParams();
const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID);

if (loading){
  return <h1>Carregando detalhes do produto...</h1>
};
if (error){
  return <h1>Erro ao carregar o produto: {error.message}</h1>
}

const product = data.allProducts.find((p: Product) => p.id === id);

const { name, image_url, category, description, price_in_cents } = product;

const handleAddToCart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
  const existingProductIndex = cartItems.findIndex((item: Product) => item.id === id);

  if (existingProductIndex !== -1) {
    cartItems[existingProductIndex].quantity += 1;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cartItems));

  alert("Produto adicionado ao carrinho!");
};

return (
  <>
  <Header/>
   <Container>
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
  </Container>
  </>
);

};

export default ProductPage;
