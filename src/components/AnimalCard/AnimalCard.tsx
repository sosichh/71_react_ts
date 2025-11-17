import "./styles.css";

import type { AnimalProps } from "./types";

function AnimalCard({ animalName, animalSpecies, animalImg, children }:AnimalProps) {
  return (
    <div className="animal-card-wrapper">
      {children}
      <h3>{animalName}</h3>
      <div>{animalSpecies}</div>
      <img src={animalImg} />
    </div>
  );
}

export default AnimalCard;