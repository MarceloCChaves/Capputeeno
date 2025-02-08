"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from "../../api/queries";
import { useParams } from "next/navigation";
import { Container } from "./styles";
import Header from "@/app/components/header";
import ProductDetailsComponent from "@/app/components/productDetails";

const ProductPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID);

  if (loading) {
    return <h1>Carregando detalhes do produto...</h1>
  };
  if (error) {
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
      <Header />
      <Container>
        <ProductDetailsComponent
          name={name}
          image_url={image_url}
          category={category}
          description={description}
          price_in_cents={price_in_cents}
          handleAddToCart={handleAddToCart} 
          id={""} 
          sales={0} />
      </Container>
    </>
  );

};

export default ProductPage;
