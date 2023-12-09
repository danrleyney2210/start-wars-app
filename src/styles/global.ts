import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.body};
  }

  body, input, button , textarea {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  html{
    scroll-behavior: smooth;
  }

  h1, h2,h3,h4,h5,p,span {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
  }
`;
