import { ClockContainer, Digit } from "./styles";

export function DigitalClock() {
  const time = "00:00:00"
  return (
    <ClockContainer>
      <Digit>0</Digit>
      <Digit>0</Digit>
      <Digit>:</Digit>
      <Digit>0</Digit>
      <Digit>0</Digit>
      <Digit>:</Digit>
      <Digit>0</Digit>
      <Digit>1</Digit>
    </ClockContainer>
  )
}