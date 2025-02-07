"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  @media(max-width: 767px){
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-family: "saira", sans-serif;
    font-weight: 100;
  }

  p {
    font-family: "saira", sans-serif;
  }

  @media(max-width: 767px){
    width: 100%;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35%;
  height: 100vh;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-family: "Saira", sans-serif;
  }

  @media(max-width: 767px){
    width: 100%;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 16px;

  p {
    font-family: "Saira", sans-serif;
    font-weight: 100;
  }
`;

export const AdditionalInfo = styled.div`
  h4 {
    text-decoration: underline;
    color: var(--light-dark);
    cursor: pointer;
    font-family: "Saira", sans-serif;
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 10px;
  background: var(--green);
  color: var(--white);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  font-weight: 700;
  
  &:hover {
    filter: brightness(90%);
  }
`;
