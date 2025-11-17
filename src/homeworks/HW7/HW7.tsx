import { v4 } from "uuid";
import type { JSX } from "react";

import { animalsData } from "./data";
import "./styles.css";
import type { Animal } from "./types";
import AnimalCard from "../../components/AnimalCard/AnimalCard";

function HW7() {
  const animals: JSX.Element[] = animalsData.map(
    (animal: Animal): JSX.Element => {
      return (
        <AnimalCard
        key={v4()}
        animalName={animal.name}
        animalSpecies={animal.species}
        animalImg={animal.image}
        />
      );
    }
  );

  return <div className="HW7-wrapper">{animals}</div>;
}

export default HW7;
