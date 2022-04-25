import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bgBodyColor};
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: ${(props) => props.theme.textColor};
    transition: all 0.1s linear;
  }
`;

export default GlobalStyles;
