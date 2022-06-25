import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${theme.color.bg};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;