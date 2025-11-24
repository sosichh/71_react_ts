import axios from "axios";
import { useEffect, useState } from "react";

import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";

import {
  ButtonsContainer,
  ErrorMsg,
  ImageContainer,
  ImgArrContainer,
  Lesson11Wrapper,
} from "./styles";

function Lesson11() {
  const URL = "https://dog.ceo/api/breeds/image/random";

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [imgArr, setImgArr] = useState<string[]>([]);
  const [isFirstLoading, setIsFirstLoading] = useState<boolean>(true);

  const getImage = async () => {
    if (isLoading) return;

    setIsLoading(true);
    setError("");

    try {
      const result = await axios.get(URL);

      if (result.data.status === "success") {
        setImgArr((Arr) => [...Arr, result.data.message]);
      } else {
        console.log("Failed to fetch img");
        setError("Failed to fetch img");
      }
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const clearImgArr = () => {
    setImgArr([]);
  };

  useEffect(() => {
    if (!isFirstLoading) getImage();
    else setIsFirstLoading(false);
  }, []);

  return (
    <Lesson11Wrapper>
      <ButtonsContainer>
        <Button
          label="GET MORE IMAGES"
          onClick={getImage}
          disabled={isLoading}
        />
        {imgArr.length > 0 && (
          <Button
            label="DELETE ALL DATA"
            onClick={clearImgArr}
            disabled={isLoading}
          />
        )}
      </ButtonsContainer>
      {error && <ErrorMsg>{error}</ErrorMsg>}
      {isLoading && <Spinner />}
      <ImgArrContainer>
        {imgArr.map((imgUrl, index) => (
          <ImageContainer key={index}>
            <img src={imgUrl} alt={`Image #${index + 1}`} />
          </ImageContainer>
        ))}
      </ImgArrContainer>
    </Lesson11Wrapper>
  );
}

export default Lesson11;
