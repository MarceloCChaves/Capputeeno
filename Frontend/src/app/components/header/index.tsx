"use client";

import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import {
  Container,
  Logo,
  SearchBar,
  SearchInput,
  IconWrapper,
  CartIcon,
  MenuButton,
  MobileMenu,
  CloseButton,
  RightContent
} from "./styles";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");

  return (
    <Container>
      <Logo><Link href="/">Capputeeno</Link></Logo>

      <RightContent>
        <SearchBar>
          <SearchInput
            type="text"
            placeholder="Procurando por algo específico?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IconWrapper>
            <FaSearch />
          </IconWrapper>
        </SearchBar>
        <CartIcon>
          <Link href="/carrinho">
            <FaShoppingBag size={20} />
          </Link>
          <span>{storedCart.length}</span>
        </CartIcon>
      </RightContent>

      <MenuButton onClick={() => setIsMenuOpen(true)}>
        <FaBars size={24} />
      </MenuButton>

      <MobileMenu isopen={isMenuOpen ? true : undefined}>
        <CloseButton onClick={() => setIsMenuOpen(false)}>
          <FaTimes size={24} />
        </CloseButton>
        <SearchBar>
          <SearchInput
            type="text"
            placeholder="Procurando por algo específico?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IconWrapper>
            <FaSearch />
          </IconWrapper>
        </SearchBar>
        <CartIcon>
          <Link href="/carrinho">
            <FaShoppingBag size={20} />
          </Link>
          <span>{storedCart.length}</span>
        </CartIcon>
      </MobileMenu>
    </Container>
  );
};

export default Header;
