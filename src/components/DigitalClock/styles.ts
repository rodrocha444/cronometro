import styled from "styled-components";
import { pxToRem } from "../../utils/operations";

export const ClockContainer = styled.div`
  display: flex;
  justify-content: stretch;
  gap:0.2rem;
`

export const Digit = styled.div`
  @keyframes digitKeys {
    50%{
      transform: rotateX(90deg);
    }
  }
  font-size: 3.5rem;
  line-height: 1;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${pxToRem(64)};
  width: 100%;
  background: #222;
  color: white;
  animation-name: digitKeys;
  animation-duration: 1s;
  animation-iteration-count: infinite;
`