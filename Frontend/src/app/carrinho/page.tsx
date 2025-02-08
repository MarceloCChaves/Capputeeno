"use client";

import { useState, useEffect } from "react";
import BackButton from "../components/backButton";
import Header from "../components/header";
import { Container, LeftColumn, RightColumn } from "./styles";
import CartProduct from "../components/cartProduct";
import TotalCard from "../components/totalCard";

const Carrinho = () => {
  const [productCart, setProductCart] = useState<Product[]>([]);
  const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");

  useEffect(() => {
    setProductCart(storedCart);
  }, []);

  const total = (productCart.reduce((sum, item) => sum + item.price_in_cents, 0)) / 100;

  const removeFromCart = (id: string) => {
    if (confirm("Tem certeza que você quer excluir o item?")) {
      const updatedCart = productCart.filter((item) => item.id !== id);
      setProductCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  let shipping = total >= 900 ? 0 : 40;

  return (
    <>
      <Header />
      <Container>
        <LeftColumn>
          <BackButton />
          <h2>SEU CARRINHO</h2>
          <p>Total ({productCart.length} produtos): <strong>R$ {(total).toFixed(2)}</strong></p>
          {productCart.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            productCart.map((product) => (
              <CartProduct
                key={product.id}
                {...product}
                removeFromCart={removeFromCart}
              />
            ))
          )}
        </LeftColumn>
        {productCart.length > 0 ? (
          <RightColumn>
            <TotalCard
              total={total}
              shipping={shipping}
            />
          </RightColumn>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default Carrinho;
