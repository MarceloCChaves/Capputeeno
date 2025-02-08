import styled from "styled-components";

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