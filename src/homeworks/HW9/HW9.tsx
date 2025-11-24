import { useState, type ChangeEvent } from "react";

import Input from "../../components/Input/Input";
import {
  FormWrapper,
  HW9Wrapper,
  Result,
  ResultWrapper,
} from "./styles";
import Button from "../../components/Button/Button";

function HW9() {
  const [firstNote, setFirstNote] = useState<string>("");
  const [secondNote, setSecondNote] = useState<string>("");
  const [firstResult, setFirstResult] = useState<string>("");
  const [secondResult, setSecondResult] = useState<string>("");
  const [isShowResult, setIsShowResult] = useState<boolean>(false);

  const firstNoteChanging = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstNote(event.target.value);
  };

  const secondNoteChanging = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondNote(event.target.value);
  };

  const showResult = () => {
    setFirstResult(firstNote);
    setSecondResult(secondNote);

    setIsShowResult(!isShowResult);
  };

  return (
    <HW9Wrapper>
      <FormWrapper>
        <Input
          name="first-note"
          placeholder="Enter first note"
          label="First note"
          id="first-note-id"
          value={firstNote}
          onChange={firstNoteChanging}
        />
        <Input
          name="second-note"
          placeholder="Enter second note"
          label="Second note"
          id="second-note-id"
          value={secondNote}
          onChange={secondNoteChanging}
        />
        <Button label="show/hide" onClick={showResult} />
      </FormWrapper>
      <ResultWrapper isShow={isShowResult}>
        <Result>{firstResult ? firstResult : "null"}</Result>
        <Result>{secondResult ? secondResult : "null"}</Result>
      </ResultWrapper>
    </HW9Wrapper>
  );
}

export default HW9;
