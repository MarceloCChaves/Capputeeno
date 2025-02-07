"use client"

import styled from "styled-components";

export const ProductCard = styled.div`
  background: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  width: 256px;
  max-width: 100%;
  margin: 25px;
  cursor: pointer;
  transition: .3s linear;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
  }
`;

export const ProductInfo = styled.div`
  margin: 12px;

  h3 {
    font-family: "Saira", sans-serif;
    color: var(--light-dark);
    font-size: 14px;
    margin-bottom: 10px;
  }

  p {
    color: var(--dark);
    font-weight: 600;
    font-size: 14px;
    font-family: "Saira", sans-serif;
    margin-top: 10px;
  }
`