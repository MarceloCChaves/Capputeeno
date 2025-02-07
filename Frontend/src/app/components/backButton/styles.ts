import Link from "next/link";
import styled from "styled-components";

export const BackButtonComponent = styled(Link)`
  color: var(--light-dark);
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  font-family: "Saira", sans-serif;

  &:hover {
    background-color: #f0f0f0;
  }
`;
