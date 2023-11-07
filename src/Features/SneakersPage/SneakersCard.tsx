import React from "react";
import Sneakers, { Photo } from "./types/SneakersType";
import SliderPhoto from "./SliderPhoto/SliderPhoto";

function SneakersCard({ sneaker }: { sneaker: Sneakers }): JSX.Element {
  return (
    <div>
      {sneaker.Photos.map((photo: Photo) => (
        <SliderPhoto photo={photo} key={photo.id} />
      ))}
      <div>
        {sneaker.Mark.name}
        <p>{sneaker.name}</p>
        <span>{sneaker.price}</span>
      </div>
      <div>
        <button>Купить</button>
        <button>В избранное</button>
      </div>
    </div>
  );
}

export default SneakersCard;
