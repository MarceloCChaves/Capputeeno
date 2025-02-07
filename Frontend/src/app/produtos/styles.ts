"use client";

import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  padding: 20px;
  margin: 0 auto;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  
  @media(max-width: 767px){
    flex-direction: column;
    align-items: center;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;

  @media(max-width: 767px){
    justify-content: center;
  }

`

export const CustomButtons = styled.div`
  button {
    border: none;
    padding: 10px 15px;
    font-family: "Saira", sans-serif;
    color: var(--light-dark);
    background: transparent;
    cursor: pointer;
  }

  .clicked {
    text-decoration: underline;
    color: var(--dark);
    text-decoration-color: var(--orange);
  }

  @media(max-width: 767px){
    display: flex;
    flex-direction: column;
  }
`

export const SelectFilter = styled.div`
  select {
    border: none;
    padding: 10px 15px;
    font-family: "Saira", sans-serif;
    color: var(--light-dark);
    background: transparent;
    outline: none;
  }
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media(max-width: 767px){
    justify-content: center;
  }
`;