import { DigitalClock } from "../components/DigitalClock";

import { GlobalStyle } from "../styles/global";
import { AppContainer } from "./styles";

export function App() {
  return (
    <>
      <AppContainer>
        <DigitalClock />
        <div>
          <button>Zerar</button>
          <button>Iniciar</button>
        </div>
      </AppContainer>
      <GlobalStyle />
    </>
  )
}