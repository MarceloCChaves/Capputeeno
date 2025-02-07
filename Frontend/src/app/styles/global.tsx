"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --logo: #5D5D6D;
    --light-dark: #41414D;
    --dark: #09090A;
    --search-bar: #F1F1F1;
    --light-gray: #F0F0F5;
    --white: #fff;
    --orange: #FFA585;
    --blue: #115D8C;
    --red: #DE3838;
    --green: #51B853;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: var(--logo);
  }

  body {
    background: var(--light-gray);
  }

`;

export default GlobalStyle;
