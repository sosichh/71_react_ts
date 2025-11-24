import "./styles.css";
import {AnimalCardWrapper, AnimalName, AnimailSpecies, AnimalImage} from "./styles";

import type { AnimalProps } from "./types";

function AnimalCard({
  animalName,
  animalSpecies,
  animalImg,
  children,
}: AnimalProps) {
  return (
    <AnimalCardWrapper>
      {children}
      <AnimalName>{animalName}</AnimalName>
      <AnimailSpecies>{animalSpecies}</AnimailSpecies>
      <AnimalImage src={animalImg} />
    </AnimalCardWrapper>
  );
}

export default AnimalCard;