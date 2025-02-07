"use client";

import styled from "styled-components";

interface MobileMenuProps {
  isopen: any;
}

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px 24px;
  background-color: var(--white);
`;

export const Logo = styled.div`
  font-size: 24px;
  color: var(--logo);
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const MobileMenu = styled.div<MobileMenuProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.isopen ? "0" : "-100%")};
  height: 100%;
  background: var(--white);
  padding: 50px 0 0 10px;
  transition: right 0.3s ease-in-out;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--search-bar);
  border-radius: 8px;
  padding: 8px;
  width: 250px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;

export const CartIcon = styled.div`
  cursor: pointer;
  position: relative;
  margin-top: 16px;

  span {
    background: var(--red);
    font-family: "saira", sans-serif;
    font-weight: 700;
    font-size: 8px;
    color: var(--white);
    border-radius: 50%;
    padding: 5px 8px;
    position: absolute;
    bottom: 0;
    left: 10px;
  }
`;
