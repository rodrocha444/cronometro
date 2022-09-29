import styled from "styled-components";
import { pxToRem } from "../utils/operations";

export const AppContainer = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  padding:1rem;

  & #container{
    width:100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap:2rem;
  }
`
export const ButtonsContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  justify-items: center;
  
  & button{
    height: ${pxToRem(102)};
    width: ${pxToRem(102)};

    border: 0;
    border-radius: 999px;
    background: #3355cc;
    color:white;
    font-size: 1.2rem;

    transition: box-shadow 0.2s,filter 0.2s;

    &:hover{
      box-shadow: inset 2px 2px 1px 1px rgba(0,0,0,0.5);
      filter: brightness(1.2);
    }
  }
`