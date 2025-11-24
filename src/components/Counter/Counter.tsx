import Button from "../Button/Button";
import {ButtonWrapper, CounterWrapper, ResultContainer} from "./styles";
import type { CounterProps } from "./types";

function Counter({counter, onPlusClick, onMinusClick}: CounterProps) {
  return (
    <CounterWrapper>
      <ButtonWrapper>
        <Button label="-" onClick={onMinusClick} isDanger/>
      </ButtonWrapper>
      <ResultContainer>{counter}</ResultContainer>
      <ButtonWrapper>
        <Button label="+" onClick={onPlusClick} />
      </ButtonWrapper>
    </CounterWrapper>
  );
}

export default Counter;
