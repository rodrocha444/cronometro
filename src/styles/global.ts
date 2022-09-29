import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: DsDigit;
    src: url('src/assets/fonts/DS-DIGII.TTF');
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    font-family: sans-serif;
  }
  button:hover{
    cursor: pointer;
  }
`