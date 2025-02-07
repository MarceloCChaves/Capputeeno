"use client";

import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProductDetails = styled.div`
  display: flex;
  gap: 40px;
  padding: 40px;
  border-radius: 12px;
  max-width: 1180px;
  width: 100%;

  @media(max-width: 767px) {
    flex-wrap: wrap;

    img {
      max-width: 100%;
    }
  }
  
  img {
    width: 600px;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-family: "Saira", sans-serif;
    color: var(--light-dark);
    margin-bottom: 10px;
    font-weight: 100;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 20px;
    line-height: 1.6;
    font-family: "Saira", sans-serif;
  }

  button {
    background: var(--blue);
    color: var(--white);
    cursor: pointer;
    font-family: "Saira", sans-serif;
    font-weight: 700;
    padding: 10px 15px;
    border-radius: 4px;
    border: none;
    gap: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: .5s linear;

    &:hover {
     filter: brightness(90%);
    }
  }
`;
