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