import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box; 
  text-decoration: none;
  font-family: sans-serif;
}
`;
export default GlobalStyle;
