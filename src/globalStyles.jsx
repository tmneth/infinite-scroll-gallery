import { createGlobalStyle } from "styled-components";
import { colors } from "./utils/theme";

const GlobalStyle = createGlobalStyle`
body {
  margin:0;
  font-family: sans-serif, Arial; 
  background-color: ${colors.bg.primary};
}
`;

export default GlobalStyle;
