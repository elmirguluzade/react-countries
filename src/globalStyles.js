import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  scroll-behavior: smooth;
}

button {
 cursor: pointer;
}

.d-flex{
  display: flex;
}
`;

export default GlobalStyle;
