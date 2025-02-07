import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    allProducts {
      id,
      name,
      description,
      category,
      image_url,
      price_in_cents,
      sales
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query GetProductById {
    allProducts {
      id
      name
      image_url
      category
      description
      price_in_cents
    }
  }
`;
