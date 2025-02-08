"use client";

import { ApolloProvider } from "@apollo/client";
import apolloClient from "./api/apolloClient";
import { StyledComponentsRegistry } from "./styles/styledComponentsRegistry";
import GlobalStyle from "./styles/global";
import { Saira, Saira_Stencil_One } from "next/font/google";

const sairaSans = Saira({
  subsets: ["latin"],
  weight: ["400"],
});

const sairaStencil = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${sairaSans.className} ${sairaStencil.className}`}>
        <ApolloProvider client={apolloClient}>
          <StyledComponentsRegistry>
            <GlobalStyle />
            {children}
          </StyledComponentsRegistry>
        </ApolloProvider>
      </body>
    </html>
  );
}
