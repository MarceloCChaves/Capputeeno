"use client"

import styled from "styled-components"

export const ProductCard = styled.div`
  display: flex;
  background: white;
  margin: 30px 0;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  p, strong {
    color: var(--light-dark);
    font-size: 16px;
    font-family: "Saira", sans-serif;
  }

  @media(max-width: 767px){
    flex-wrap: wrap;
    padding: 20px;
  }
`;

export const ProductImage = styled.img`
  width: 200px;
  border-radius: 8px;
  padding-right: 20px;

  @media(max-width: 767px){
    width: 100%;
    padding: 0;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ProductTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: var(--light-dark);
    font-size: 16px;
    font-family: "Saira", sans-serif;
  }
`;

export const RemoveButton = styled.button`
  padding: 5px 10px;
  border: none;
  background: none;
  cursor: pointer;
`;