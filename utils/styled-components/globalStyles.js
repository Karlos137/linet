import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

/* CSS reset start */
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, small, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  cursor: pointer;
}
/* CSS reset end */


/* Custom global styles */

::selection {
  background: ${props => props.theme.colors.main};
  color: #fff;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.colors.text};
  scroll-behavior: smooth;
}

`

export default GlobalStyle
