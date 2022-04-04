import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bgBodyColor};
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    transition: all 0.1s linear;
  }
`;

export default GlobalStyles;
