import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif !important;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    height: 100%;
  }

  #root {
    flex: 1;
    margin: 0 auto;
    width: 100vw;
  }

  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-family: 'Open Sans', sans-serif;
    font-size: 40px;
  }

  h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 32px;
  }

  h3 {
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
  }

  h4 {
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
  }

  h5 {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }

  p, span, label {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
  }

  b {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
  }
`;
