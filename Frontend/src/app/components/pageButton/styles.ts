import styled from "styled-components";

export const Container = styled.div`
  .clicked {
    color: var(--orange);
    border: 2px solid var(--orange);
    background: var(--white);
  }
`

export const PageButtonComponent = styled.button`
  color: var(--light-dark);
  font-size: 16px;
  cursor: pointer;
  font-family: "Saira", sans-serif;
  padding: 5px 10px;
  border: none;
  margin: 0 5px;
  border-radius: 8px;
`;
