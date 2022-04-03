import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bgBodyColor};
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 300;
    transition: all 0.1s linear;
  }
`;

export default GlobalStyles;
