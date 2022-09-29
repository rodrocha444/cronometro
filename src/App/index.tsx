import { DigitalClock } from "../components/DigitalClock";

import { GlobalStyle } from "../styles/global";
import { AppContainer, ButtonsContainer } from "./styles";

export function App() {
  return (
    <>
      <AppContainer>
        <div id="container">
          <DigitalClock />

          <ButtonsContainer>
            <button>Zerar</button>
            <button>Iniciar</button>
          </ButtonsContainer>
        </div>
      </AppContainer>
      <GlobalStyle />
    </>
  )
}