import axios from "axios";
import { useEffect, useState, type ChangeEvent } from "react";
import Input from "../../components/Input/Input";
import { DataContainer, ErrorMsg, HW10Wrapper } from "./styles";
import Spinner from "../../components/Spinner/Spinner";

function HW10() {
  const URL = "https://catfact.ninja/fact";

  const [fact, setFact] = useState<string>("");
  const [searchField, setSearchField] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFirstLoading, setIsFirstLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const searchFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value);
  };

  const noteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const getData = async () => {
    setFact("");
    setIsLoading(true);
    setError("");

    try {
      const result = await axios.get(URL);
      setFact(result.data.fact);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsFirstLoading(false);
  }, []);

  useEffect(() => {
    if (!isFirstLoading) {
      getData();
    }
  }, [searchField]);

  return (
    <HW10Wrapper>
      <Input
        name="search-field"
        placeholder="Enter something"
        value={searchField}
        onChange={searchFieldChange}
      />
      <Input
        name="note-field"
        placeholder="Enter the note"
        value={note}
        onChange={noteChange}
      />
      {fact && <DataContainer>{fact}</DataContainer>}
      {error && <ErrorMsg>{error}</ErrorMsg>}
      {isLoading && <Spinner></Spinner>}
    </HW10Wrapper>
  );
}

export default HW10;
