interface Sneakers {
  id?: number;
  name: string;
  price: string;
  mark_id: number;
  Mark: Mark;
  Sizes: Size[];
  Photos: Photo[];
}

interface Mark {
  id: number;
  name: string;
}

interface Size {
  id: number;
  size: string;
  model_sneaker_id: number;
  count: number;
}

export interface Photo {
  id: number;
  mainPhoto: string;
  two: string;
  three: string;
  four: string;
  five: string;
  six: string;
}
export type SneakersId = Sneakers["id"];

export default Sneakers;
