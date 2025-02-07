"use client";

import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../api/queries";
import { Container, Content, Filters, CustomButtons, SelectFilter, ButtonGroup } from "./styles";
import PageButton from "../components/pageButton";
import ProductCardComponent from "../components/productCard";

const Produtos = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [sortCriteria, setSortCriteria] = useState("");
  const [activePage, setActivePage] = useState(1);
  const { loading, error, data } = useQuery<{ allProducts?: Product[] }>(GET_ALL_PRODUCTS);
  const numberPagesArray = [1, 2, 3, 4, 5];

  if (loading) {
    return <h1>Carregando...</h1>
  }
  if (error) {
    return <h1>Erro ao carregar os produtos: {error.message}</h1>
  }
  if (!data || !data.allProducts) {
    return <h1>Nenhum produto encontrado.</h1>
  }

  const filteredProducts = selectedCategory === "todos"
    ? data.allProducts
    : data.allProducts.filter((product) => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortCriteria === "vendidos") return b.sales - a.sales;
    if (sortCriteria === "preco-maior") return b.price_in_cents - a.price_in_cents;
    if (sortCriteria === "preco-menor") return a.price_in_cents - b.price_in_cents;
    return 0;
  });

  const productsPerPage = 12;
  const paginatedProducts = sortedProducts.slice((activePage - 1) * productsPerPage, activePage * productsPerPage);

  return (
    <Container>
      <Filters>
        <CustomButtons>
          <button className={selectedCategory === "todos" ? "clicked" : ""} onClick={() => setSelectedCategory("todos")}>
            TODOS OS PRODUTOS
          </button>
          <button className={selectedCategory === "t-shirts" ? "clicked" : ""} onClick={() => setSelectedCategory("t-shirts")}>
            CAMISETAS
          </button>
          <button className={selectedCategory === "mugs" ? "clicked" : ""} onClick={() => setSelectedCategory("mugs")}>
            CANECAS
          </button>
        </CustomButtons>

        <SelectFilter>
          <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
            <option hidden>Organizar por</option>
            <option value="novidades">Novidades</option>
            <option value="vendidos">Mais vendidos</option>
            <option value="preco-maior">Preço: Maior - Menor</option>
            <option value="preco-menor">Preço: Menor - Maior</option>
          </select>
        </SelectFilter>
      </Filters>

      <ButtonGroup>
        {numberPagesArray.map((page) => (
          <PageButton
            key={page}
            number={page}
            isClicked={activePage === page}
            handleClick={() => setActivePage(page)}
          />
        ))}
      </ButtonGroup>

      <Content>
        {paginatedProducts.map((product) => (
          <ProductCardComponent key={product.id} {...product} />
        ))}
      </Content>

      <ButtonGroup>
        {numberPagesArray.map((page) => (
          <PageButton
            key={page}
            number={page}
            isClicked={activePage === page}
            handleClick={() => setActivePage(page)}
          />
        ))}
      </ButtonGroup>
    </Container>
  );
};

export default Produtos;
