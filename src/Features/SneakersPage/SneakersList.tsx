import React from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

import SneakersCard from "./SneakersCard";
import Sneakers from "./types/SneakersType";

function ProductList() {
  const { sneakers } = useSelector((store: RootState) => store.sneakers);

  return (
    <div>
      {sneakers.map((sneaker: Sneakers) => (
        <SneakersCard sneaker={sneaker} key={sneaker.id} />
      ))}
    </div>
  );
}

export default ProductList;
